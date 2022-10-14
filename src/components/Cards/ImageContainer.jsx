import './stylescard.css';



function ImageContainer ({ children, image }) {
  return (
    <div className="containerCard" style={{ backgroundImage: `url(${image}` }}>
      {children}
    </div>
  );
}

export default ImageContainer;