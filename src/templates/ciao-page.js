import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export const CiaoPageTemplate = ({
    title
}) => (
  <div className="content">
      <p>{title}</p>
  </div>
)

const CiaoPage = ({data}) => {
    const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CiaoPageTemplate
      title={frontmatter.title}
      />
    </Layout>
  )
}

export default CiaoPage


export const ciaoPageQuery = graphql `
    query CiaoPage ($id: String!) {
        markdownRemark(id: {eq: $id}) {
          frontmatter {
            title
          }
        }
      }

`