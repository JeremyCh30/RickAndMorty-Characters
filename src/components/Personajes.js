import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

//Components
import CardsPersonajes from './CardsPersonajes';


const Personajes = () => {

    //State de personajes
  const[personaje, setPersonaje] = useState([]);
  //State de información
  const[info, setInfo] = useState({});
  


  //Link del api de Rick & Morty
  const  url = "https://rickandmortyapi.com/api/character";

  //Función para obtener contenido del api
  const fetchPersonajes = (url) => {
    fetch(url)
    .then ((response) => response.json())
    .then((data) => {
      setPersonaje(data.results);
      setInfo(data.info);
    })
    .catch((error) =>{
      console.log(error);
    });
  };
  //Función para el cambio de página
  //avanzar
  const nextPage = () => {
    fetchPersonajes(info.next);
    window.scrollTo(0,0);
  };
  //regresar
  const prevPage = () => {
    fetchPersonajes(info.prev);
    window.scrollTo(0,0);
  };

  useEffect(() => {
    fetchPersonajes(url);
  }, []);

    return ( 
        <>

            <Link to={'/'} className="button margen-arriba">
                Ir a la Página Principal
            </Link>

            <CardsPersonajes personaje={personaje} />
    
            <div className="container pb-5">
                <nav>
                <ul className="pagination justify-content-center">
                {info.next ? (
                    <li className="page-item">
                        <button className="page-link1" onClick={nextPage}>
                        Next
                        </button>
                    </li>
                    ) : null}
                    {info.prev ? (
                    <li className="page-item">
                        <button className="page-link2" onClick={prevPage}>
                        Previous
                        </button>
                    </li>
                    ) : null}
                </ul>
                </nav>
            </div>
        </> 
     );
}
 
export default Personajes;