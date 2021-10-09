import React from 'react'
import {Link} from 'react-router-dom';

const Inicio = () => {
    return ( 
        <div>
            <h1>Inicio</h1>
            <Link to={'/Personajes'} className="button margen-arriba">
                Ir a los Personajes
            </Link>
        </div>
     );
}
 
export default Inicio;