import React from 'react';


import './menu.css'


const Menu = () =>{
	return(
        <div>
           <ul className="menu">
                <li><a href="">home<div className="arrow"></div></a></li>
                <li><a href="">portfolio<div className="arrow"></div></a></li>
                <li><a href="">blog<div className="arrow"></div></a></li>
                <li><a href="">pages<div className="arrow"></div></a></li>
                <li><a href="">shop<div className="arrow"></div></a></li>
                <li><a href="">components<div className="arrow"></div></a></li>
                <li><a href="">features<div className="arrow"></div></a></li>
            </ul>   
        </div>
	
	)
}

export default Menu;