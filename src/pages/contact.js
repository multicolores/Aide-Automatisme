import * as React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { FaPhone } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

import ContactSvg from "../images/svg/contact.svg"

const Contact = () => {

  return (
    <Layout>
      <Seo title="Contact" />
      <Bio />
      <div className="contact_container">

          <div className="hero">
            <h1>Contact</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati praesentium illum. Maecenas sed accumsan lacus. Sed ullamcor quam sed nis.</p>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5295.3094903292795!2d3.2599245687050806!3d49.85596276137885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e818fa88d00001%3A0xec904162b208a600!2s6%20Av.%20Archim%C3%A8de%2C%2002100%20Saint-Quentin!5e0!3m2!1sfr!2sfr!4v1640119518201!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy"></iframe>
        

          <div className="contactInfo_container">
            <div>
              <FaPhone />
              <h3>Téléphone</h3>
              <a>Tel: (+33) 6 65 55 52 96</a>
            </div>

            <div>
              <FaMapMarkedAlt />
              <h3>Adresse</h3>
              <a>
                <span>6 Avenue Archimède</span>
                 <span>ZAC du Bois de la Chocque</span> 
                 <span>02100 Saint Quentin
              </span></a>
            </div>

            <div>
            <FaEnvelope />
              <h3>Email</h3>
              <a href="mailto:info@aide-automatisme.com">info@aide-automatisme.com</a>
            </div>
          </div>

          <div className="contact_section">
        {/* <h2>Me contacter</h2> */}
          <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
            <p>
            <input type="text" name="name" required /> <label for="name"> <span>Nom :</span> </label>   
            </p>
            <p>
            <input type="email" name="email" required /><label for="email"><span>Email :</span></label>
            </p>
            <p>
            <label for="message" className="message"><span>Message</span> <textarea name="message"></textarea></label>
            </p>
              <button type="submit">Envoyer</button>
          </form>

          <div>
            <img src={ContactSvg} alt="contact illustration"/>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Contact

