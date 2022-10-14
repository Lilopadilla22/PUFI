/* eslint-disable jsx-a11y/alt-text */
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body';
import Redes from './components/Redes/Redes';
import Form from './components/Form';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Redes />
      <Form />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
