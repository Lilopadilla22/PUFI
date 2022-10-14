import "./styles.css"
import { useForm, ValidationError } from '@formspree/react';
import {AiOutlineArrowRight} from 'react-icons/ai'



function Form() {

  const [state, handleSubmit] = useForm("xlevlaol");
  if (state.succeeded) {
      return <p className="messange">Thanks for joining!</p>;
    }

  return (

<form  method="POST" className="formSuscribe" onSubmit={handleSubmit}>

    <div className="forminformation">
        <p>NEWSLETTER</p>
        <span className="suscribe">SUSCRIBETE</span>
        <span>Y enterate de todas las novedades</span>
    </div> 

    <div className="formbutton">
      <input id="email" type="email" name="email" placeholder="Ingresa tu Email"/> 
        <ValidationError prefix="Email" field="email" errors={state.errors}/>
      <button type="submit" disabled={state.submitting}> <AiOutlineArrowRight /> 
    </button></div>
  
    </form>
  );
}



export default Form;