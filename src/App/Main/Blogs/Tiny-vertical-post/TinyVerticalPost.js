import React, {Component} from 'react';
import {Link} from 'react-router-dom'


import './tiny-vertical-post.css'

class TinyVerticalPost extends Component{
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
        // postType,
        } = this.props





	return(
	<Link to = {`/blog/${id}`}>
        <div className="post tiny-vertical-post">
            <div className="media">
                <img src={photo} alt={category}/>
            </div>
            <div className="comment">
                <p class="title">{title}</p>
                <p>{intro}</p>
                </div>
                <div className="author">
                    <div><img src={authorPhoto}/></div>
                        <div className="post-info">
                        <div className="author-name">{authorName}</div>
                            <div className="date">{date}</div>
                        </div>
                        <a href="" className="share"></a>
                    </div>
                            </div>
			</Link>
	)
}}


export default TinyVerticalPost;















  