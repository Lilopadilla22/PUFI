import './styles.css'
import React from 'react';
import Card from '../Cards/Card';
import CardDescription from '../Cards/CardDescription';
import sombrillas from '../../assets/img/sombrillas.jpg';
import sombrilla  from '../../assets/img/sombrilla.jpg';
import silla from '../../assets/img/pufi1.jpg';
import mueble from '../../assets/img/mueble.jpg';
import bolsa from '../../assets/img/pufibolsa.jpg';
import bolsito from '../../assets/img/bolsito.jpg';
import nap from '../../assets/img/nap.jpg';
import napsillon from '../../assets/img/pufy.jpg';



function Body() {
  return (

      <div className='containerBody'>

      <Card image={sombrillas}>

        <button className='bottonCard'>SHOP</button>

      </Card>
      
      <CardDescription pictureBanner={sombrilla} title='PUFFY RAIN'/>

      <CardDescription pictureBanner={mueble} title='PUFFY PUFF'/>

      <Card image={silla} />

      <Card image={bolsa} />

      <CardDescription pictureBanner={bolsito} title='PUFFY PUFF'/>

      <CardDescription pictureBanner={nap} title='PUFFY PUFF'/>
      
      <Card image={napsillon} />    

    </div> 

   
   
  );
}

export default Body;