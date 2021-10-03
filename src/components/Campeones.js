import React, { useState }  from 'react'
import axios from 'axios';

const Campeones = () => {
    
    
    
    const [campeon, setCampeon] = useState({
        nombre: ''
    });

    // Destructuring al state pokemon
    const { nombre } = campeon;

    const buscarCampeon = async () => {
        const url = `https://rickandmortyapi.com/api/character`;

        const resultado = await axios.get(url);
        console.log(resultado);

        setCampeon({
            nombre: resultado.data.results[0].name
        });
    }

    return ( 
        <div>
            <p>{nombre}</p>
            <button onClick={() => buscarCampeon()}>Llamar</button>
        </div>
        
           
        
     );
}
 
export default Campeones;