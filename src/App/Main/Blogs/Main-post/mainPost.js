import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './main-post.css'

class MainPost extends Component{

    render(){
        const {
        id,
        category,
        title,
        photo,
        intro,
        // content,
        authorName,
        authorPhoto,
        date,
        postType,
        } = this.props


	return(
        <Link to = {`/blog/${id}`}>
        <div className="post main-post">
        <div className="media">
            <img src={photo} alt="lifestyle"/>
            <p className="category">{category}</p>
        </div>
        <div className="comment">
            <p className="title">{title}</p>
            <p>{title}</p>
        </div>
        <div class="author">
            <div><img src={authorPhoto}/></div>
            <div class="post-info">
                <div className="author-name">{authorName}</div>
                <div className="date">{date}</div>
            </div>
            <a href="" className="share"></a>
        </div>
    </div>
    </Link>
	)}
}


export default MainPost;






