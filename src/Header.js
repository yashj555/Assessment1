import React from 'react';
import './App.css';
function Header() {  
    return (<div className="header">
            {/* <h4 className="logo">Logo</h4> */}
            <ul className="navigation">
             <a><li>Home</li></a> 
             <a><li>PortFolio</li></a>
             <a><li>Clients</li></a>
             <a><li>Get in Touch</li></a>  
            </ul>
        </div>);  
  }  
export default Header;