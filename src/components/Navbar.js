import * as React from "react"
import {Link} from "gatsby"
import Image from "../components/Image"

const Navbar = () => {

  return (
    <nav>
        <div>
          <Link to="/" className="logo"><Image alt="logo" filename={"logo.png"} /></Link>
        </div>
        <div>
          <Link to="/prestations" activeClassName="active">Prestation</Link>
          <Link to="/blog" activeClassName="active">Blog</Link>
          <Link to="/contact" activeClassName="active">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar