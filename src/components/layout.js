import * as React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import "./styles/styles.scss"
import { motion } from "framer-motion";

const Layout = ({ children }) => {

  return (
    <div className="global-wrapper">
      <Navbar />
      <motion.div 
          id="container"
          initial={{ opacity: 0, }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5
          }} 
        >
        <main>{children}</main>
        <Footer />
      </motion.div>

      {/* <footer>
        © {new Date().getFullYear()}, Aide Automatisme Tous droits réservés
      </footer> */}
    </div>
  )
}

export default Layout
