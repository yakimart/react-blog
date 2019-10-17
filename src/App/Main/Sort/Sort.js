import React from 'react';
import {Link} from 'react-router-dom'

import './sort.css'

const Sort = () => {
	return(
        <div className="sort">
        <div className="container">
            <div className="flex">
                <p className="sort-blog">sort blog:</p>
                    <nav>
                        <ul className="sort-buttons">
                            <li><Link to = '/'>All</Link></li>
                            <li><Link to = '/Photography'>Photography</Link></li>
                            <li><Link to = '/Trip'>Trip</Link></li>
                            <li><Link to = '/Lifestyle'>Lifestyle</Link></li>
                            <li><Link to = '/Inspiration'>Inspiration</Link></li>
                        </ul>
                    </nav>
            </div>
        </div>
    </div>
	)
}


export default Sort;


