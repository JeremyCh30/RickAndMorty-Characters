import React, {Fragment} from 'react';
import logo from '../images/logo.png'
import './Personajes.css';

const Personajes = ({personaje}) => {
    return ( 
        <Fragment>
        <div>
            <img class="Logo" src={logo} alt=""/>
        <div className="content">
            <div className="content-characters">
                {personaje.map((item, index) => (
                    <div key={index}>
                        <div className="character"> 
                          <img  src={item.image}/>
                           <div className="info-character">
                              <h2>{item.name}</h2>
                              <h4>Species: {item.species}</h4>
                              <h4>Status: {item.status}</h4>
                            </div>
                         </div>
                         </div>
                ))}
                </div>
            </div>
            </div>
            </Fragment>
     );
}
 
export default Personajes;