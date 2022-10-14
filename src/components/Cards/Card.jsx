import './styles.css';



function Card ({ children, image }) {

  return (
   
   <div className='containerCard' style= {{backgroundImage: `url(${image}`}}> 
   
   {children }
   
   </div>
  );
}

export default Card;