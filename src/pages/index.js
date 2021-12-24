import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "../components/Image"

import ContactSvg from "../images/svg/contact.svg"

const HomePage = () => {


  return (
    <Layout>
      <Seo title="Page d'accueil" />
        <div className="introAnim">
          <div>
          <svg className="aide" width="638" height="143" viewBox="0 0 638 143" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.8182 142.5H36.1525L36.2803 142.191L48.6171 112.344H113.287L125.624 142.191L125.751 142.5H126.086H160.263H161.034L160.719 141.796L97.7933 1.0669L97.661 0.770996H97.3368H65.1702H64.8457L64.7135 1.06744L1.98862 141.796L1.67504 142.5H2.44531H35.8182ZM215.072 0.770996H214.572V1.271V142V142.5H215.072H247.64H248.14V142V1.271V0.770996H247.64H215.072ZM321.247 0.770996H320.747V1.271V142V142.5H321.247H385.178C400.52 142.5 414.068 139.606 425.809 133.803L425.811 133.802C437.683 127.866 446.87 119.562 453.355 108.888C459.977 98.2117 463.28 85.7881 463.28 71.6355C463.28 57.4829 459.977 45.0594 453.355 34.3828C446.87 23.7094 437.683 15.4712 425.809 9.66898C414.069 3.73196 400.521 0.770996 385.178 0.770996H321.247ZM416.799 40.2332L416.805 40.2388C425.128 47.9016 429.309 58.3468 429.309 71.6355C429.309 84.9238 425.128 95.4381 416.802 103.236C408.605 110.904 397.547 114.761 383.569 114.761H354.315V28.5095H383.569C397.545 28.5095 408.602 32.4331 416.799 40.2332ZM637.014 115.865V115.365H636.514H560.417V83.7959H625.256H625.756V83.2959V57.9647V57.4647H625.256H560.417V27.9064H633.9H634.4V27.4064V1.271V0.770996H633.9H527.55H527.05V1.271V142V142.5H527.55H636.514H637.014V142V115.865ZM59.4852 86.6157L81.0525 34.5432L102.62 86.6157H59.4852Z" stroke="black"/>
          </svg>
          <svg className="automatisme" width="626" height="49" viewBox="0 0 626 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-outside-1_297_182" maskUnits="userSpaceOnUse" x="0.429688" y="0.500488" width="625" height="48" fill="black">
            <rect fill="white" x="0.429688" y="0.500488" width="625" height="48"/>
            <path d="M37.3741 37.0136H16.8371L12.9193 46.4922H2.42969L22.1451 2.25877H32.2556L52.0343 46.4922H41.2919L37.3741 37.0136ZM34.1513 29.2411L27.1372 12.3061L20.123 29.2411H34.1513Z"/>
            <path d="M87.9882 47.2504C81.6692 47.2504 76.7403 45.5022 73.2016 42.0056C69.7051 38.5091 67.9568 33.517 67.9568 27.0295V2.25877H78.1937V26.6503C78.1937 34.5702 81.4796 38.5302 88.0514 38.5302C91.2531 38.5302 93.6964 37.5823 95.3815 35.6866C97.0666 33.7487 97.9091 30.7366 97.9091 26.6503V2.25877H108.02V27.0295C108.02 33.517 106.25 38.5091 102.712 42.0056C99.2151 45.5022 94.3073 47.2504 87.9882 47.2504Z"/>
            <path d="M139.196 10.5999H125.041V2.25877H163.587V10.5999H149.433V46.4922H139.196V10.5999Z"/>
            <path d="M202.538 47.2504C197.946 47.2504 193.797 46.2605 190.089 44.2805C186.424 42.3005 183.539 39.5833 181.432 36.1289C179.368 32.6324 178.336 28.7146 178.336 24.3755C178.336 20.0364 179.368 16.1396 181.432 12.6852C183.539 9.18867 186.424 6.45041 190.089 4.47044C193.797 2.49047 197.946 1.50049 202.538 1.50049C207.13 1.50049 211.258 2.49047 214.923 4.47044C218.588 6.45041 221.474 9.18867 223.58 12.6852C225.687 16.1396 226.74 20.0364 226.74 24.3755C226.74 28.7146 225.687 32.6324 223.58 36.1289C221.474 39.5833 218.588 42.3005 214.923 44.2805C211.258 46.2605 207.13 47.2504 202.538 47.2504ZM202.538 38.5302C205.15 38.5302 207.509 37.9404 209.615 36.7608C211.722 35.5391 213.365 33.854 214.544 31.7056C215.766 29.5571 216.377 27.1137 216.377 24.3755C216.377 21.6372 215.766 19.1938 214.544 17.0454C213.365 14.8969 211.722 13.2329 209.615 12.0533C207.509 10.8316 205.15 10.2208 202.538 10.2208C199.926 10.2208 197.567 10.8316 195.461 12.0533C193.354 13.2329 191.69 14.8969 190.468 17.0454C189.289 19.1938 188.699 21.6372 188.699 24.3755C188.699 27.1137 189.289 29.5571 190.468 31.7056C191.69 33.854 193.354 35.5391 195.461 36.7608C197.567 37.9404 199.926 38.5302 202.538 38.5302Z"/>
            <path d="M287.324 46.4922L287.261 19.9521L274.243 41.8161H269.63L256.676 20.5208V46.4922H247.071V2.25877H255.539L272.095 29.7467L288.398 2.25877H296.802L296.929 46.4922H287.324Z"/>
            <path d="M349.192 37.0136H328.655L324.738 46.4922H314.248L333.963 2.25877H344.074L363.852 46.4922H353.11L349.192 37.0136ZM345.97 29.2411L338.955 12.3061L331.941 29.2411H345.97Z"/>
            <path d="M388.021 10.5999H373.866V2.25877H412.412V10.5999H398.258V46.4922H388.021V10.5999Z"/>
            <path d="M430.559 2.25877H440.795V46.4922H430.559V2.25877Z"/>
            <path d="M478.465 47.2504C474.968 47.2504 471.577 46.7871 468.291 45.8603C465.047 44.8913 462.436 43.6486 460.456 42.132L463.931 34.4228C465.827 35.813 468.081 36.9293 470.692 37.7719C473.304 38.6144 475.916 39.0357 478.528 39.0357C481.435 39.0357 483.583 38.6144 484.973 37.7719C486.364 36.8872 487.059 35.7287 487.059 34.2964C487.059 33.2432 486.637 32.3796 485.795 31.7056C484.995 30.9894 483.941 30.4207 482.635 29.9994C481.372 29.5782 479.644 29.1148 477.454 28.6092C474.084 27.8088 471.324 27.0084 469.176 26.208C467.027 25.4076 465.174 24.1227 463.615 22.3534C462.099 20.584 461.34 18.2249 461.34 15.276C461.34 12.7063 462.035 10.3893 463.426 8.32507C464.816 6.21871 466.901 4.5547 469.681 3.33301C472.504 2.11133 475.937 1.50049 479.981 1.50049C482.804 1.50049 485.563 1.8375 488.259 2.51154C490.956 3.18557 493.315 4.15449 495.337 5.4183L492.177 13.1907C488.091 10.8738 484.005 9.71526 479.918 9.71526C477.054 9.71526 474.926 10.1787 473.536 11.1055C472.188 12.0322 471.514 13.2539 471.514 14.7705C471.514 16.2871 472.293 17.4245 473.852 18.1828C475.453 18.899 477.875 19.6151 481.119 20.3313C484.489 21.1317 487.248 21.9321 489.397 22.7325C491.545 23.5329 493.378 24.7967 494.894 26.5239C496.453 28.2512 497.232 30.5892 497.232 33.5381C497.232 36.0657 496.516 38.3827 495.084 40.4891C493.694 42.5533 491.587 44.1962 488.765 45.4179C485.942 46.6396 482.509 47.2504 478.465 47.2504Z"/>
            <path d="M557.118 46.4922L557.055 19.9521L544.037 41.8161H539.424L526.47 20.5208V46.4922H516.865V2.25877H525.333L541.889 29.7467L558.192 2.25877H566.596L566.723 46.4922H557.118Z"/>
            <path d="M624.105 38.2774V46.4922H589.855V2.25877H623.283V10.4735H600.029V20.0785H620.566V28.0405H600.029V38.2774H624.105Z"/>
            </mask>
            <path d="M37.3741 37.0136H16.8371L12.9193 46.4922H2.42969L22.1451 2.25877H32.2556L52.0343 46.4922H41.2919L37.3741 37.0136ZM34.1513 29.2411L27.1372 12.3061L20.123 29.2411H34.1513Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_297_182)"/>
            <path d="M87.9882 47.2504C81.6692 47.2504 76.7403 45.5022 73.2016 42.0056C69.7051 38.5091 67.9568 33.517 67.9568 27.0295V2.25877H78.1937V26.6503C78.1937 34.5702 81.4796 38.5302 88.0514 38.5302C91.2531 38.5302 93.6964 37.5823 95.3815 35.6866C97.0666 33.7487 97.9091 30.7366 97.9091 26.6503V2.25877H108.02V27.0295C108.02 33.517 106.25 38.5091 102.712 42.0056C99.2151 45.5022 94.3073 47.2504 87.9882 47.2504Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_297_182)"/>
            <path d="M139.196 10.5999H125.041V2.25877H163.587V10.5999H149.433V46.4922H139.196V10.5999Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_297_182)"/>
            <path d="M202.538 47.2504C197.946 47.2504 193.797 46.2605 190.089 44.2805C186.424 42.3005 183.539 39.5833 181.432 36.1289C179.368 32.6324 178.336 28.7146 178.336 24.3755C178.336 20.0364 179.368 16.1396 181.432 12.6852C183.539 9.18867 186.424 6.45041 190.089 4.47044C193.797 2.49047 197.946 1.50049 202.538 1.50049C207.13 1.50049 211.258 2.49047 214.923 4.47044C218.588 6.45041 221.474 9.18867 223.58 12.6852C225.687 16.1396 226.74 20.0364 226.74 24.3755C226.74 28.7146 225.687 32.6324 223.58 36.1289C221.474 39.5833 218.588 42.3005 214.923 44.2805C211.258 46.2605 207.13 47.2504 202.538 47.2504ZM202.538 38.5302C205.15 38.5302 207.509 37.9404 209.615 36.7608C211.722 35.5391 213.365 33.854 214.544 31.7056C215.766 29.5571 216.377 27.1137 216.377 24.3755C216.377 21.6372 215.766 19.1938 214.544 17.0454C213.365 14.8969 211.722 13.2329 209.615 12.0533C207.509 10.8316 205.15 10.2208 202.538 10.2208C199.926 10.2208 197.567 10.8316 195.461 12.0533C193.354 13.2329 191.69 14.8969 190.468 17.0454C189.289 19.1938 188.699 21.6372 188.699 24.3755C188.699 27.1137 189.289 29.5571 190.468 31.7056C191.69 33.854 193.354 35.5391 195.461 36.7608C197.567 37.9404 199.926 38.5302 202.538 38.5302Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_297_182)"/>
            <path d="M287.324 46.4922L287.261 19.9521L274.243 41.8161H269.63L256.676 20.5208V46.4922H247.071V2.25877H255.539L272.095 29.7467L288.398 2.25877H296.802L296.929 46.4922H287.324Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_297_182)"/>
            <path d="M349.192 37.0136H328.655L324.738 46.4922H314.248L333.963 2.25877H344.074L363.852 46.4922H353.11L349.192 37.0136ZM345.97 29.2411L338.955 12.3061L331.941 29.2411H345.97Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_297_182)"/>
            <path d="M388.021 10.5999H373.866V2.25877H412.412V10.5999H398.258V46.4922H388.021V10.5999Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_297_182)"/>
            <path d="M430.559 2.25877H440.795V46.4922H430.559V2.25877Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_297_182)"/>
            <path d="M478.465 47.2504C474.968 47.2504 471.577 46.7871 468.291 45.8603C465.047 44.8913 462.436 43.6486 460.456 42.132L463.931 34.4228C465.827 35.813 468.081 36.9293 470.692 37.7719C473.304 38.6144 475.916 39.0357 478.528 39.0357C481.435 39.0357 483.583 38.6144 484.973 37.7719C486.364 36.8872 487.059 35.7287 487.059 34.2964C487.059 33.2432 486.637 32.3796 485.795 31.7056C484.995 30.9894 483.941 30.4207 482.635 29.9994C481.372 29.5782 479.644 29.1148 477.454 28.6092C474.084 27.8088 471.324 27.0084 469.176 26.208C467.027 25.4076 465.174 24.1227 463.615 22.3534C462.099 20.584 461.34 18.2249 461.34 15.276C461.34 12.7063 462.035 10.3893 463.426 8.32507C464.816 6.21871 466.901 4.5547 469.681 3.33301C472.504 2.11133 475.937 1.50049 479.981 1.50049C482.804 1.50049 485.563 1.8375 488.259 2.51154C490.956 3.18557 493.315 4.15449 495.337 5.4183L492.177 13.1907C488.091 10.8738 484.005 9.71526 479.918 9.71526C477.054 9.71526 474.926 10.1787 473.536 11.1055C472.188 12.0322 471.514 13.2539 471.514 14.7705C471.514 16.2871 472.293 17.4245 473.852 18.1828C475.453 18.899 477.875 19.6151 481.119 20.3313C484.489 21.1317 487.248 21.9321 489.397 22.7325C491.545 23.5329 493.378 24.7967 494.894 26.5239C496.453 28.2512 497.232 30.5892 497.232 33.5381C497.232 36.0657 496.516 38.3827 495.084 40.4891C493.694 42.5533 491.587 44.1962 488.765 45.4179C485.942 46.6396 482.509 47.2504 478.465 47.2504Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_297_182)"/>
            <path d="M557.118 46.4922L557.055 19.9521L544.037 41.8161H539.424L526.47 20.5208V46.4922H516.865V2.25877H525.333L541.889 29.7467L558.192 2.25877H566.596L566.723 46.4922H557.118Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_297_182)"/>
            <path d="M624.105 38.2774V46.4922H589.855V2.25877H623.283V10.4735H600.029V20.0785H620.566V28.0405H600.029V38.2774H624.105Z" stroke="black" stroke-width="2" mask="url(#path-1-outside-1_297_182)"/>
        </svg>


          </div>
        </div>


      <header>
        <div className="herocontainer">
          <h1>Vous avez un problème, nous avons la solution!</h1>
          <p>Nous sommes spécialisés dans les automatismes industriels et machines de conditionnement.</p>
          <Link to="#prestations" className="bigButton">Découvrez nos préstations</Link>
        </div>
        <div className="logo_partenaires">
            <Image alt="logo partenaire" filename={"LogoLoreal.png"} />
            <Image alt="logo partenaire" filename={"LogoFauquet.png"} />
            <Image alt="logo partenaire" filename={"LogoGuerlain.png"} />
            <Image alt="logo partenaire" filename={"LogoNestle.png"} />
            <Image alt="logo partenaire" filename={"LogoGRTgaz.png"} />

          </div>
      </header>
      <div className="video_container">
        <div className="video">
          <iframe
            // src={"https://www.youtube.com/embed/rbki4HR41-4?playlist=rbki4HR41-4&autoplay=1&mute=1&loop=1?controls=0"}
            src={"https://www.youtube.com/embed/rbki4HR41-4?version=3&loop=1&playlist=rbki4HR41-4&autoplay=1&mute=1&controls=0?modestbranding=1&showinfo=0"}
            frameBorder="0"
            title={"exemple de notre travaille"}
            // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            // frameBorder="0"
            // webkitallowfullscreen="true"
            // mozallowfullscreen="true"
            // allowFullScreen

          />
        </div>
      </div>

      <section id="prestations" className="blackbg">
        <div className="text_container">
          <h2>La consultation d’avant projets</h2>
          <p>Etudes, réalisation de plans, de cahiers des charges et définition de matériels.  Maecenas sed accumsan lacus. Sed ullamcor quam sed nisl lobortis scelerisque.</p>
          <Link to="/" className="littleButton">Nos préstations</Link>
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
          <Link to="/" className="littleButton">Nos préstations</Link>
        </div>
      </section>

      <section className="blackbg">
        <div className="text_container">
          <h2>La consultation d’avant projets</h2>
          <p>Etudes, réalisation de plans, de cahiers des charges et définition de matériels.  Maecenas sed accumsan lacus. Sed ullamcor quam sed nisl lobortis scelerisque.</p>
          <Link to="/" className="littleButton">Nos préstations</Link>
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
          <Link to="/" className="littleButton">Nos préstations</Link>
        </div>
      </section>

      <div className="partrnaires">
        <h2>+40 entreprises du nord de la France ont déjà travaillés avec nous</h2>
        <Image alt="Les logos de nos partenaires" filename={"partenaires-logo.png"} />
      </div>

      <section className="contact">
        <div className="text_container">
          <h2>N’hésitez pas à nous contacter si vous avez un projet à nous proposer </h2>
          <Link to="/" className="littleButton">Nous contactez</Link>
        </div>
        <div className="img_container">
          <img src={ContactSvg} alt="contact illustration"/>
        </div>
      </section>

    </Layout>
  )
}

export default HomePage

