import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "../components/Image"

const Prestations = () => {


  return (
    <Layout>
      <Seo title="Nos préstations" />

        <div className="prestation_page">
            <div className="hero">
                <h1>Nos prestations</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati praesentium illum. Maecenas sed accumsan lacus. Sed ullamcor quam sed nis.</p>
            </div>
            <div className="big_image_container">
                <Image alt="image d'un dérouleur" filename={"derouleur.jpg"} />
            </div>
            <div className="text_presentation_container">
                <div>
                    <h2>La consultation d’avant projets</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati praesentium illum. Maecenas sed accumsan lacus. Sed ullamcor quam sed nisl lobortis scelerisque. Sed enim augue, cursus nec posuere.</p>
                </div>
                <div>
                    <h2>La consultation d’avant projets</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati praesentium illum. Maecenas sed accumsan lacus. Sed ullamcor quam sed nisl lobortis scelerisque. Sed enim augue, cursus nec posuere.</p>
                </div>
                <div>
                    <h2>La consultation d’avant projets</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati praesentium illum. Maecenas sed accumsan lacus. Sed ullamcor quam sed nisl lobortis scelerisque. Sed enim augue, cursus nec posuere.</p>
                </div>
                <div>
                    <h2>La consultation d’avant projets</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati praesentium illum. Maecenas sed accumsan lacus. Sed ullamcor quam sed nisl lobortis scelerisque. Sed enim augue, cursus nec posuere.</p>
                </div>
            </div>
        </div>

        <section className="blackbg">
        <div className="text_container">
          <h2>La consultation d’avant projets</h2>
          <p>Etudes, réalisation de plans, de cahiers des charges et définition de matériels.  Maecenas sed accumsan lacus. Sed ullamcor quam sed nisl lobortis scelerisque.</p>
        </div>
        <div className="img_container">
          <Image alt="image consultation" filename={"derouleur.jpg"} />
        </div>
      </section>

      <section>
        <div className="img_container">
          <Image alt="image consultation" filename={"derouleur.jpg"} />
        </div>
        <div className="text_container">
          <h2>La consultation d’avant projets</h2>
          <p>Etudes, réalisation de plans, de cahiers des charges et définition de matériels.  Maecenas sed accumsan lacus. Sed ullamcor quam sed nisl lobortis scelerisque.</p>
        </div>
      </section>

    </Layout>
  )
}

export default Prestations

