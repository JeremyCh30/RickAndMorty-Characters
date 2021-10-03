import React, { Fragment, useState, useEffect }  from 'react'
import axios from 'axios';

const Personajes = () => {

    const [personajes, setPersonajes] = useState([]);

    const urlInicial = `https://rickandmortyapi.com/api/character`;
    const getPersonajes = async (url) => {
        await axios.get(url)
        .then (data => setPersonajes(data.data.results))
        .catch(error => console.log(error))
        
    };

    getPersonajes(urlInicial);
    
    /* useEffect(() => {
        getPersonajes(urlInicial)
    }, [])*/
    
    
    


    return ( 
        <Fragment>
            <div>
                {personajes.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                
                    </div>
                ))} 
            </div>
            {/* <button onClick={() => buscarPersonajes()}>Llamar</button>  */}
        </Fragment>
        
           
        
     );
}
 
export default Personajes;