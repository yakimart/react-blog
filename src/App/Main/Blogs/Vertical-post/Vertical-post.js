import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './vertical-post.css'

class VerticalPost extends Component{
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
        <div className="post big-vertical-post">
        <div className="media">
                <img src={photo} alt={category}/>
            </div>
            <div class="comment">
                    <p className="title">{title}</p>
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


export default VerticalPost;








