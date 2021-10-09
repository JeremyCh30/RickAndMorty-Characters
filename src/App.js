import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import Inicio from './components/Inicio';
import Personajes from './components/Personajes';

const App = () => {
  
  
  return ( 
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/personajes" component={Personajes}/>
      </Switch>

    </Router>
   );
}
 
export default App;
