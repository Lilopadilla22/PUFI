import sombrilla from "../../assets/img/sombrilla.jpg";
import silla from "../../assets/img/pufi1.jpg";
import mueble from "../../assets/img/mueble.jpg";
import bolsa from "../../assets/img/pufibolsa.jpg";
import bolsito from "../../assets/img/bolsito.jpg";
import nap from "../../assets/img/nap.jpg";
import "./stylesredes.css";
import ImagenRedesContainer from "./CardRedes";

function Redes() {
  return (
    <div className="containerRedes">
      <p>INSTAGRAM</p>
      <span>#ESPUFI</span>

      <div className="containerRedesImg">
        <ImagenRedesContainer image={sombrilla} />
        <ImagenRedesContainer image={silla} />
        <ImagenRedesContainer image={mueble} />
        <ImagenRedesContainer image={bolsa} />
        <ImagenRedesContainer image={bolsito} />
        <ImagenRedesContainer image={nap} />

      </div>
    </div>
  );
}

export default Redes;
