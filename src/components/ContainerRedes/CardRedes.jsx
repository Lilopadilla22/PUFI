function ImagenRedesContainer({ image }) {
  return (
    <div
      className="cardRedes"
      style={{ backgroundImage: `url(${image}` }}
    ></div>
  );
}

export default ImagenRedesContainer;
