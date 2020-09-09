import React from 'react';
import './style.scss';

function Navbar(props){

    return(

        <nav>
        <h1>Pinterest</h1>
          <input type='text' placeholder="Buscar en tiempo real" className="searchInput" onChange={(e)=>props.handleSearch(e.target.value)}/>
        
        </nav>
    )
}

export default Navbar;