import * as React from "react"
import {Link} from "gatsby"
import Image from "../components/Image"

import LogoSvg from "../images/svg/logo.svg"

const Navbar = () => {

  return (
    <nav>
        <div>
          <Link to="/" className="logo"><img src={LogoSvg} alt="Logo aide automatisme"/></Link>
          <Link to="/" className="mobileVersion"><Image filename={"iconMobile.png"} alt="Logo aide automatisme mobile"/></Link>
        </div>
        <div className="links">
          <Link to="/prestations" activeClassName="active">Prestation</Link>
          <Link to="/blog" activeClassName="active">Blog</Link>
          <Link to="/contact" activeClassName="active">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar