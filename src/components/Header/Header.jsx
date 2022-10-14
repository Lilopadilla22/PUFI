import "./stylesheader.css";
//import pufy from '../../assets/img/puffy-principal.webp'
//style={{backgroundImage: `url(${pufy})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}

import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="App-header">
      <Navbar />

      <h3 className="anuncio">
        ESTÁR CÓMODO, <br></br>NUNCA FUE TAN FÁCIL.
      </h3>

      <div className="botonshop">
        <button> SHOP </button>
      </div>
    </header>
  );
}

export default Header;
