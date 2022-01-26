import * as React from "react"
import {Link} from "gatsby"

import { FaPhone } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

import LogoSvg from "../images/svg/logo.svg"

const Footer = () => {

  return (
      <>
    <footer>
    <div className="a_propos">
        <h3>à propos</h3>
        <hr />
        <Link to="/">
            <img src={LogoSvg} alt="Logo aide automatisme"/>
        </Link>
        <p>
            Nous sommes spécialisés dans les automatismes industriels et machines de conditionnement. Nous sommes spécialisés.
        </p>
    </div>
    <div className="contact">
        <h3>Contact</h3>
        <hr />
        <div className="linksContainer">
            <Link to="https://goo.gl/maps/U9ucoSUHqDi7G7QAA" >
            <div>
                <FaMapMarkedAlt />
                <span>6 Avenue Archimède ZAC du Bois de la Chocque, 02100 Saint Quentin</span>
            </div>
            </Link>

            <div>
                <FaPhone />
                <span>Tel: (+33) 6 65 55 52 96</span>
            </div>

            <Link to="https://fr-fr.facebook.com/pechetellier">
            <div>
                <FaEnvelope />
                <span>info@aide-automatisme.com</span>
            </div>
            </Link>

        </div>

    </div>
    <div className="informations">
        <h3>Informations</h3>
        <hr />
        <Link to="/" activeClassName="active">Aide Automatisme</Link> <br />
        <Link to="/prestations" activeClassName="active">Prestations</Link> <br />
        <Link to="/blog" activeClassName="active">Blog</Link><br />
        <Link to="/contact" activeClassName="active">Contact</Link><br />
    </div>
    </footer>
    <div className="droits_reserves">
        <p>
            © {new Date().getFullYear()}, Aide Automatisme Tous droits réservés
        </p>
    </div>
    </>
  )
}

export default Footer