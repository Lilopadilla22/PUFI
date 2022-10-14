import sombrilla  from '../../assets/img/sombrilla.jpg';
import silla from '../../assets/img/pufi1.jpg';
import mueble from '../../assets/img/mueble.jpg';
import bolsa from '../../assets/img/pufibolsa.jpg';
import bolsito from '../../assets/img/bolsito.jpg';
import nap from '../../assets/img/nap.jpg';
import './stylesredes.css'
import CardRedes from './CardRedes';


function Redes() {
  return (

    <div className='containerRedes'>

        <p>INSTAGRAM</p>
        <span>#ESPUFI</span>

        <div className='containerRedesImg'>

            <CardRedes image={sombrilla}/>
            <CardRedes image={silla}/>
            <CardRedes image={mueble}/>
            <CardRedes image={bolsa}/>
            <CardRedes image={bolsito}/>
            <CardRedes image={nap}/>

            {/* <img src={sombrilla} alt='collage'/>
            <img src={silla} alt='collage'/>
            <img src={mueble} alt='collage'/>
            <img src={bolsa} alt='collage'/>
            <img src={bolsito} alt='collage'/>
            <img src={nap} alt='collage'/>   */}

        </div>     

    </div>

 
  );
}

export default Redes;