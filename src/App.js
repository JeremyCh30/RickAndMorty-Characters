import React, { useState, useEffect } from 'react';
//Components
import Personajes from './components/Personajes';
const App = () => {
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
    <Personajes personaje={personaje} />

    <div>
      <nav>
        <ul>
          {info.prev? (
          <li>
            <button onClick={prevPage}>
              Anterior
            </button>
            </li>
            ) : null? (
              <li>
                <button onClick={nextPage}>
                  Siguiente
                </button>
              </li>
            ) : null}
        </ul>
      </nav>
    </div>
    </>
   );
}
 
export default App;
