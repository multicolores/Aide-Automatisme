import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Svgimg from "../images/svg/404_illustration.svg"

const NotFoundPage = () => {

  return (
    <Layout>
      <Seo title="404: Not Found" />
      <div className="container404page">
        <div className="container_element">
        <div className="img_container">
            <img src={Svgimg} alt="404 error illustration"/>
          </div>
        <h2>Cette page n'existe pas</h2>
        <Link to="/" className="bigButton">Revenir à la page d'accueil</Link>
        </div>

      </div>

    </Layout>
  )
}

export default NotFoundPage

