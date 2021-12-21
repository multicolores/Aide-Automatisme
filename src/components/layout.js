import * as React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import "./styles/styles.scss"

const Layout = ({ children }) => {

  return (
    <div className="global-wrapper">
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* <footer>
        © {new Date().getFullYear()}, Aide Automatisme Tous droits réservés
      </footer> */}
    </div>
  )
}

export default Layout
