import "./stylesfooter.css";
import logo from "../../assets/img/brandlive.png";
import pufi from "../../assets/img/logo-pufi.avif";
import { faQrcode, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      
      <div className="containerfilas">

        <div className="footerlogo">
          <img src={pufi} alt="pufi" />
        </div>

        <div>
          <ul>
            <li>PUFI RAIN</li>
            <li>PUFI PUFF</li>
            <li>PUFI CART</li>
            <li>PUFI NAP</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>CONTACTO</li>
            <li>AYUDA</li> 
            <li>CÓMO COMPRAR</li>
            <li>TÉRMINOS Y CONDICIONES</li>
          </ul>
        </div>

        <div className="containercomprasegura">
          <p>
            COMPRA 100% SEGURA <br></br>
            <FontAwesomeIcon icon={faQrcode} /> {""}
            <FontAwesomeIcon icon={faShieldHalved} />{" "}
            <span>
              COMPRA CON <br></br>GARANTIA DE PUFI
            </span>
          </p>
        </div>

        <div className="containerredessociales">
          <p>
            SIGUENOS EN <FontAwesomeIcon icon={faSquareInstagram} />{" "}
            <FontAwesomeIcon icon={faSquareFacebook} />{" "}
            <FontAwesomeIcon icon={faTwitter} />
          </p>
        </div>
      </div>

      <div className="containercopyright">
        <p className="copyright">
          PUFI Copyright 2017 - Todos los derechos reservados
        </p>
        <img src={logo} alt="logo" className="logolive" />
      </div>
    </div>
  );
}

export default Footer;
