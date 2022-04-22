import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  IoLocationSharp,
  IoPhonePortraitSharp,
  IoMailSharp,
} from "react-icons/io5"

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex">
      <StaticImage
        src="../images/photo.jpg"
        quality={60}
        formats={["auto"]}
        alt="Harry Saputra"
        className="rounded-full w-20 h-20"
      />
      <div className="ml-4">
        <h1 className="font-bold text-3xl">
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
            <IoLocationSharp className="inline-flex text-sky-600" /> Pontianak,
            Indonesia
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
