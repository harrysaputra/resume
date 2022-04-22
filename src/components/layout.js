/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="max-w-4xl mx-auto p-6 pb-16 md:py-16 text-slate-600">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main>{children}</main>
      <footer className="mt-8 text-center w-full text-sm ">
        © {new Date().getFullYear()} Built with
        {` `}
        <a href="https://www.gatsbyjs.com" className="font-semibold">
          Gatsby
        </a>
        {` `}and{` `}
        <a href="https://tailwindcss.com" className="font-semibold">
          Tailwind
        </a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
