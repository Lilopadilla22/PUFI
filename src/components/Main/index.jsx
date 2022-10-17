import "./stylesbody.css";
import React from "react";
import ContainerRedes from '../ContainerRedes/ContainerRedes';
import Form from '../Form';
import ImageContainer from "../Cards/ImageContainer";
import CardDescription from "../Cards/CardDescription";
import sombrillas from "../../assets/img/sombrillas.jpg";
import sombrilla from "../../assets/img/sombrilla.jpg";
import silla from "../../assets/img/pufi1.jpg";
import mueble from "../../assets/img/mueble.jpg";
import bolsa from "../../assets/img/pufibolsa.jpg";
import bolsito from "../../assets/img/bolsito.jpg";
import nap from "../../assets/img/nap.jpg";
import napsillon from "../../assets/img/pufy.jpg";

function Main() {
  return (
    <>
    <div className="containerBody">
      
      <ImageContainer image={sombrillas}>
        <button url='/hola' type="submit" className="bottonCard">SHOP</button>
      </ImageContainer>

      <CardDescription pictureBanner={sombrilla} title="PUFFY RAIN" />

      <CardDescription pictureBanner={mueble} title="PUFFY PUFF" />

      <ImageContainer image={silla} />

      <ImageContainer image={bolsa} />

      <CardDescription pictureBanner={bolsito} title="PUFFY PUFF" />

      <CardDescription pictureBanner={nap} title="PUFFY PUFF" />

      <ImageContainer image={napsillon} />
    </div>

    <ContainerRedes />

    <Form />

    </>
  );
}

export default Main;
