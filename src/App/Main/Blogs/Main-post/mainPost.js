import React from 'react';

import './main-post.css'

class MainPost {

    render(){
        const {
        // category,
        title,
        photo,
        intro,
        // content,
        authorName,
        authorPhoto,
        date,
        // postType,
        } = this.props


	return(
        <div className="post main-post">
        <div className="media">
            <img src={photo} alt="lifestyle"/>
        </div>
        <div className="comment">
            <p className="title">{title}}</p>
            <p>{title}</p>
        </div>
        <div class="author">
            <div><img src={authorPhoto}/></div>
            <div class="post-info">
                <div className="author-name">{authorName}}</div>
                <div className="date">{date}}</div>
            </div>
            <a href="" className="share"></a>
        </div>
    </div>
	)}
}


export default MainPost;






