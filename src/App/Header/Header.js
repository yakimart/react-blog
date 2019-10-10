import React from 'react';

import './header.css'


import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Icons from './Icons/Icons'
import Article from './Article/Article'

const Header = () =>{
	return(
		<div className="header">
			<div className="bg">
				<div className="container">
					<div class="start flex-row">
						<div className="logo">
							<Logo/>
						</div>
						<nav>
							<Menu/>
						</nav>
						<div className="icons">
							<Icons/>
						</div>
					</div>
					<div className="main-title">
						<Article/>
					</div>
				</div>
			</div>
		</div>
	
	)
}

export default Header;