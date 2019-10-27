import React from 'react';

import './head-blog.css'


import Logo from '../../../Header/Logo/Logo'
import Menu from '../../../Header/Menu/Menu'
import Icons from '../../../Header/Icons/Icons'
import Article from '../../../Header/Article/Article'

const HeadBlog = () =>{
	return(
			<div>
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
			
	
	)
}

export default HeadBlog;