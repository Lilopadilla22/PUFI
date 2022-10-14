import './styles.css'
import {Link} from 'react-router-dom'

function CardDescription ({ title, pictureBanner }) {
  return (
   
   <div className='containerCard'>

        <img src={pictureBanner} alt="umbrella"/>
        <h4>{title}</h4>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis quia harum consequuntur. </p>
        <Link to={'/'} className='enlacesvermas' >VER   MÁS</Link>

    </div>
  );
}

export default CardDescription;