import React from 'react';

import './blogs.css'
import MainPost from './Main-post/mainPost'
import HorizontalPost from './Horizontal-post/horizontalPost'
import TinyVerticalPost from './Tiny-vertical-post/TinyVerticalPost'
import VerticalPost from './Vertical-post/Vertical-post'
import blogPosts from './blogPosts/blogPosts'



        // category,
        // title,
        // photo,
        // intro,
        // content,
        // authorName,
        // authorPhoto,
        // date,
        // postType,


const Blogs = () => {
	return(
		<div class="blogs">
            <MainPost 
                //  category = {blogPosts[0].category}
                 title = {blogPosts[1].title}
                 photo = {blogPosts[1].photo}
                 intro ={blogPosts[1].intro}
                //  content = {blogPosts[0].content}
                 authorName = {blogPosts[1].authorName}
                 authorPhoto = {blogPosts[1].authorPhoto}
                 date = {blogPosts[1].date}
                 />
            {
            blogPosts.map(({
                id,
                category,
                title,
                photo,
                intro,
                content,
                authorName,
                authorPhoto,
                date,
                postType,
            })=>{
                if (postType == 'horizontal'){
                    return(
                            <div key={id}>
                            <HorizontalPost
                                // category = {category}
                                title = {title}
                                photo = {photo}
                                intro = {intro}
                                // content = {content}
                                authorName = {authorName}
                                authorPhoto = {authorPhoto}
                                date = {date}/>
                        </div>
                )}
            })
        }

<div class="flex-row">
    <TinyVerticalPost/>
    <TinyVerticalPost/>
    <TinyVerticalPost/>
</div>
<div class="flex-row">
    <VerticalPost/>     
    <VerticalPost/>
</div>

</div>
	)
}

export default Blogs;


