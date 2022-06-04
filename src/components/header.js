import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  IoPhonePortraitSharp,
  IoMailSharp,
  IoLogoLinkedin
} from "react-icons/io5"

const Header = ({ siteTitle }) => (
  <header>
    <h1 className="font-bold text-4xl">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <h3 className="uppercase text-sky-800 text-xs font-light">
      Frontend Developer & UIUX Designer
    </h3>
    <ul className="text-sm mt-4 text-slate-600 md:flex">
      <li>
        <IoMailSharp className="inline-flex text-sky-600" />{" "}
        harry.saputra@gmail.com
      </li>
      <li className="md:ml-4">
        <IoPhonePortraitSharp className="inline-flex text-sky-600" />{" "}
        +628115741200
      </li>
      <li className="md:ml-4">
        <IoLogoLinkedin className="inline-flex text-sky-600" /> 
        <a href="https://linkedin.com/in/harrysatpura" target="_blank">{" "}
        linkedin.com/in/harrysaputra</a>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
