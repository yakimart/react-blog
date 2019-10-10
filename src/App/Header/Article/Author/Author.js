import React from 'react';

import avatar from '../Author/Ellipse 4.png'

import './author.css'

const Author = () =>{
	return(
        <div className="author-on-title">
        <div className="author-photo"><img src={avatar} alt='author'/></div>
        <div className="author-name-on-title">Henry Little</div>
        <div className="date-on-title">April 25, 2016   10:15</div>
        <div className="flex-row likes-and-comments">
            <a href="">Comments (28)</a>
            <a href="">Likes (07)</a>
        </div>
    </div>

	)
}

export default Author;