import React, { useState }  from 'react'
import axios from 'axios';

const Personajes = () => {
    
    
    
    const [personaje, setPersonaje] = useState({
        nombre: ''
    });

    // Destructuring al state pokemon
    const { nombre } = personaje;

    const buscarPersonaje = async () => {
        const url = `https://rickandmortyapi.com/api/character`;

        const resultado = await axios.get(url);
        console.log(resultado);

        setPersonaje({
            nombre: resultado.data.results[0].name
        });
    }

    return ( 
        <div>
            <p>{nombre}</p>
            <button onClick={() => buscarPersonaje()}>Llamar</button>
        </div>
        
           
        
     );
}
 
export default Personajes;