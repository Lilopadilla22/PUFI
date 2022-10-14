import {
  AiFillAlert,
  AiFillPrinter,
  AiFillAlipayCircle,
  AiFillTags,
} from "react-icons/ai";
import logo from "../../assets/img/logo-pufi.avif";
import "./stylesnav.css";

function Navbar() {
  return (
    <nav className="navbar space-between">
      <div className="logo">
        <img src={logo} alt="logo" className="ImgLogo" />
      </div>

      <div className="seccion">
        <div className="seccionitem">
          <AiFillTags />
          <span>PUFI PUF</span>
        </div>
        <div className="seccionitem">
          <AiFillPrinter />
          <span> PUFI RAIN </span>
        </div>
        <div className="seccionitem">
          <AiFillAlipayCircle />
          <span> PUFI CART </span>
        </div>
        <div className="seccionitemlast">
          <AiFillAlert />
          <span> PUFINAP </span>
        </div>
      </div>

      <div className="seccion-compras">
        <span>
          Mi cuenta <select> </select>{" "}
        </span>
        <span>Mi carrito</span>
      </div>
    </nav>
  );
}

export default Navbar;
