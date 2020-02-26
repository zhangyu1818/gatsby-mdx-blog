import React, { useEffect, useRef } from "react";
import { fromEvent } from "rxjs";
import { debounceTime, filter, map, mergeMap, retryWhen } from "rxjs/operators";

import PageLayout from "../../Layout/Page";
import BlogHeader from "../../Components/BlogHeader";
import { GithubLink } from "../../Components/SocialLink";
import Bio from "../../Components/Bio";
import RefElePropertyHandle from "../../utils/refEleProperty";
import clamp from "../../utils/clamp";
import Timeline from "../../Components/Timeline";

import "./style.scss";
import GithubSvg from "../../Components/SvgLink";

const INNER_WIDTH_RANGE = 992;
const INNER_WIDTH_OUT_OF_RANGE = "INNER_WIDTH_OUT_OF_RANGE";

const isRefExist = (...refs) => refs.some(ref => !ref.current);

const BlogLayout = ({ children }) => {
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const layoutRef = useRef(null);
  const scrollRef = useRef(null);
  const mainRef = useRef(null);
  const asideRef = useRef(null);

  // 获取和设置横向滚动的宽度
  useEffect(() => {
    if (isRefExist(headerRef, layoutRef, scrollRef, mainRef, asideRef)) {
      console.error("没有获取到Ref元素");
      return;
    }
    const layoutRefHandle = RefElePropertyHandle.create(layoutRef);
    const mainRefHandle = RefElePropertyHandle.create(mainRef);
    const scrollRefHandle = RefElePropertyHandle.create(scrollRef);
    const headerRefHandle = RefElePropertyHandle.create(headerRef);
    const timelineRefHandle = RefElePropertyHandle.create(timelineRef);
    const asideRefHandle = RefElePropertyHandle.create(asideRef);
    const { width: layoutWidth } = layoutRefHandle.getBoundingClientRect();

    const mediaQueryList = window.matchMedia(
      `(max-width:${INNER_WIDTH_RANGE}px)`
    );

    // 必须等blog-layout-aside宽度计算出来才能设置高度
    // 问题有点大
    const setScrollSize = () => {
      const { width: contentWidth } = mainRefHandle.getBoundingClientRect();
      scrollRefHandle.setProperty("width", `${contentWidth}px`);
      if (window.innerWidth > INNER_WIDTH_RANGE)
        document.body.style.height = `${contentWidth + window.innerHeight}px`;
    };

    setTimeout(setScrollSize);

    const setAsideWidth = () => {
      const { width } = layoutRefHandle.getBoundingClientRect();
      asideRefHandle.setProperty("width", `${width}px`);
      if (!mediaQueryList.matches) setTimeout(setScrollSize);
    };
    // 初始化宽度
    setAsideWidth();

    const resize$ = fromEvent(window, "resize").pipe(debounceTime(300));

    const scrollTop$ = fromEvent(window, "scroll").pipe(
      map(_ => {
        if (window.innerWidth <= INNER_WIDTH_RANGE)
          throw INNER_WIDTH_OUT_OF_RANGE;
        return document.documentElement.scrollTop;
      }),
      retryWhen(
        mergeMap(error$ => {
          if (error$ === INNER_WIDTH_OUT_OF_RANGE)
            return resize$.pipe(
              filter(_ => window.innerWidth >= INNER_WIDTH_RANGE)
            );
        })
      )
    );

    const resizeSubscription = resize$.subscribe(setAsideWidth);

    // 滚动
    // header和timeline效果
    const scrollSubscription = scrollTop$.subscribe(
      scrollTop => {
        mainRefHandle.setProperty("transform", `translateX(-${scrollTop}px)`);
        const percent = scrollTop / layoutWidth;
        const width = clamp(100 - percent * 50, 50, 100);
        const opacity = clamp(percent.toFixed(1), 0, 1);
        if (opacity === 0)
          timelineRefHandle.setProperty("visibility", "hidden");
        else
          timelineRefHandle.setProperties({ opacity, visibility: "visible" });
        if (opacity === 1) headerRefHandle.addClass("logo-switch");
        else headerRefHandle.removeClass("logo-switch");
        headerRefHandle.setProperty("width", `${width}%`);
      },
      err => console.warn(err)
    );

    const cb = e => {
      if (e.matches) {
        document.body.style.height = "";
        document.scrollingElement.scrollTop = 0;
        mainRefHandle.setProperty("transform", "none");
      }
    };

    mediaQueryList.addListener(cb);

    return () => {
      resizeSubscription.unsubscribe();
      scrollSubscription.unsubscribe();
      document.body.style.height = "";
      mediaQueryList.removeListener(cb);
    };
  }, []);

  const headerNodes = (
    <>
      <BlogHeader ref={headerRef} />
      <Timeline
        ref={timelineRef}
        onClick={top => {
          window.scrollTo({
            top: top,
            behavior: "smooth",
          });
        }}
      />
    </>
  );

  return (
    <PageLayout header={headerNodes} left={<GithubLink />}>
      <div ref={layoutRef} className="blog-layout">
        <div ref={scrollRef} className="blog-layout-scroll">
          <main ref={mainRef} className="scroll-content">
            <aside ref={asideRef} className="blog-layout-aside">
              <div className="aside-hello">Hello</div>
              <div className="aside-divider" />
              <div className="aside-intro">
                <h2 className="intro-name">Blog</h2>
                <Bio />
                <p className="scroll-tips">保持滚动</p>
              </div>
              <div className="aside-social-link">
                <GithubSvg />
              </div>
            </aside>
            <div className="blog-layout-content">{children}</div>
          </main>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogLayout;
