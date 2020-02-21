import React from "react"
import { graphql } from "gatsby"

import HomeLayout from "../Components/Layout/Home"
import "./global.scss"
import PostList, { PostItem } from "../Components/PostList"

export const query = graphql`
  query PostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          description
          title
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <HomeLayout>
    <PostList>
      {data.allMdx.nodes.map(
        ({ frontmatter, id, fields, timeToRead, excerpt }) => (
          <PostItem key={id} name={frontmatter.title} date={frontmatter.date} />
        )
      )}
      }
    </PostList>
  </HomeLayout>
)

export default IndexPage
