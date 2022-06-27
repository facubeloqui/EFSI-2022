import React from 'react';
import Buscador from './Buscador';

const Navbar = () => {
    return ( 
        <>
             <nav className ="navbar navbar-expand-lg navbar-dark bg-custom">
        <a className ="navbar-brand" href="#">Prime Video</a>
        <button className ="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className ="navbar-toggler-icon"></span>
        </button>
        <div className ="collapse navbar-collapse" id="collapsibleNavId">
                <ul className ="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className ="nav-item active">
                        <a className ="nav-link" href="index.html">Inicio <span className ="sr-only">(current)</span></a>
                    </li> 
                    <li className ="nav-item">
                        <a className ="nav-link" href="#">Series</a>
                    </li>
                    <li className ="nav-item">
                        <a className ="nav-link" href="#">Peliculas</a>
                    </li>
                    <li className ="nav-item">
                        <a className ="nav-link" href="#">Infantil</a>
                    </li>
                </ul>
            <Buscador/>
        </div>
    </nav>
        </>
    );
}
 
export default Navbar;