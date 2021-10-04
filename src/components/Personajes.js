import React, {Fragment} from 'react';
import logo from '../images/logo.png'
import './Personajes.css';

const Personajes = ({personaje}) => {
    return ( 
        <Fragment>
        <div>
            <img class="logo" src={logo} alt=""/>
            <div className="container">
      <div className="row">
                {personaje.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div  className="card" style={{ minWidth: "200px" }}> 
                          <img  src={item.image}/>
                           <div className="card-body">
                              <h2 className="card-title">{item.name}</h2>
                              <h4 className="card-text">Species: {item.species}</h4>
                              <h4 className="card-text">Status: {item.status}</h4>
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