import "./stylescard.css";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
 
function CardDescription({ title, pictureBanner }) {
  return (
    <div className="containerCard">
      <img src={pictureBanner} alt="umbrella" />
      <h4>{title}</h4>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Ratione
        veritatis quia harum consequuntur.{" "}
      </p>
      <Link to={"/"} className="enlacesvermas">
      <FontAwesomeIcon icon={faArrowRightFromBracket} />VER MÁS
      </Link>
    </div>
  );
}

export default CardDescription;
