import React from "react";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no,user-scalable=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} className="dark">
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (()=>{
              const theme = localStorage.getItem('blogTheme');
              if(theme==='light')
              document.body.className='light';
              })();
            `,
            }}
          />
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
