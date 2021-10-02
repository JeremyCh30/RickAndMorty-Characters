import React, { useState }  from 'react'
import axios from 'axios';

const Campeones = () => {

    const [campeon, setCampeon] = useState({
        nombre: ''
    });

    // Destructuring al state pokemon
    const { nombre } = campeon;

    const buscarCampeon = async () => {
        const url = `https://ddragon.leagueoflegends.com/cdn/6.24.1/data/es_ES/champion.json`;

        const resultado = await axios.get(url);
        console.log(resultado);

        setCampeon({
            nombre: resultado.data.type
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