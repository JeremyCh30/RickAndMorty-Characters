import React from 'react'
import Personajes from './components/Personajes';


function App(personajes) {


  return (


    <div>
      <Personajes personajes={personajes}/>
    </div>
    
    
  );
}

export default App;
