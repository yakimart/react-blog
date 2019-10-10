import React from 'react';

import './sort.css'

const Sort = () => {
	return(
        <div className="sort">
        <div className="container">
            <div className="flex">
                <p className="sort-blog">sort blog:</p>
                    <nav>
                        <ul className="sort-buttons">
                            <li><a href="">All</a></li>
                            <li><a href="">Photography</a></li>
                            <li><a href="">lifestyle</a></li>
                            <li><a href="">trip</a></li>
                            <li><a href="">inspiration</a></li>
                        </ul>
                    </nav>
            </div>
        </div>
    </div>
	)
}


export default Sort;


