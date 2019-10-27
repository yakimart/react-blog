import React, {Component} from 'react';


import './singlePost.css'

import blogPosts from '../blogPosts/blogPosts'
import {getBlogById} from '../blogPosts/blogPosts'

class SinglePost extends Component{

    render(){
        const {
        blogId,
        } = this.props.match.params

        const{
            id,
            category,
            title,
            photo,
            intro,
            content,
            authorName,
            authorPhoto,
            date,
        } = getBlogById(blogPosts)[blogId]


	return(
        <div>
            <h1>{title}</h1>
            <div>{content}</div>
            
        </div>
	)
}
}

export default SinglePost;
















