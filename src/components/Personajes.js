import React, {Fragment} from 'react';
import logo from '../images/logo.png'
import './Personajes.css';

const Personajes = ({personaje}) => {
    return ( 
        <Fragment>
        <div>
            <img className="logo" src={logo} alt=""/>
            <div className="container">
      <div className="row">
                {personaje.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div  className="card" style={{ minWidth: "200px" }}> 
                          <img src={item.image}/>
                           <div className="card-body">
                              <h2>{item.name}</h2>
                              <h4 >Species: {item.species}</h4>
                              <h4 >Status: {item.status}</h4>
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