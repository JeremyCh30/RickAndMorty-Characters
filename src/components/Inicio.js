import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom';
//import css
import './inicio.css'

const Inicio = () => {
    return ( 
        <div className="localizar">
            <img className="logo" src={logo} alt=""/>
            <div className="contiene">
            <h1>¡Wubba lubba dub dub!</h1>
            <Link to={'/Personajes'} className="button margen-arriba input">
                Ir a personajes
            </Link>
            </div>
        </div>
     );
}
 
export default Inicio;