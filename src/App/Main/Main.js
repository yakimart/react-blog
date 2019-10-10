import React from 'react';

import Blogs from './Blogs/Blogs'
// import Sidebar from './Sidebar/'
import Sort from './Sort/Sort'
import './Main.css'

const Main = () => {
	return(
		<div class="main">
            <Sort/>
            <div class="container flex-row">
                <Blogs/>
                <div class="sidebar">
                    {/* <Sidebar/> */}
                    </div>
            </div> 
		</div>
	)
}


export default Main;
