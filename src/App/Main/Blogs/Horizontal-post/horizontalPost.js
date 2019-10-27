import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './horizontal-post.css'

class HorizontalPost extends Component{

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
        <div className="post horizontal-post">
        <div className="media">
            <img src={photo} alt={category}/>
        </div>
        <div>
            <div className="comment">
                    <p className="title">{title}</p>
                    <p>{intro}}</p>
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
       </div>
       </Link>
	)
}
}

export default HorizontalPost;
















