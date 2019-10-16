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

            {
            blogPosts.filter(blogPosts => blogPosts.postType == 'main').map(({
                id,
                category,
                title,
                photo,
                intro,
                content,
                authorName,
                authorPhoto,
                date,
            })=>{
                    return(
                            <div key={id}>
                            <MainPost
                                category = {category}
                                title = {title}
                                photo = {photo}
                                intro = {intro}
                                // content = {content}
                                authorName = {authorName}
                                authorPhoto = {authorPhoto}
                                date = {date}/>
                        </div>
                )
            })
        }



{
            blogPosts.filter(blogPosts => blogPosts.postType == 'main').map(({
                id,
                category,
                title,
                photo,
                intro,
                content,
                authorName,
                authorPhoto,
                date,
            })=>{
                    return(
                            <div key={id}>
                            <HorizontalPost
                                category = {category}
                                title = {title}
                                photo = {photo}
                                intro = {intro}
                                // content = {content}
                                authorName = {authorName}
                                authorPhoto = {authorPhoto}
                                date = {date}/>
                        </div>
                )
            })
        }



<div class="flex-row">
{
            blogPosts.filter(blogPosts => blogPosts.postType == 'main').map(({
                id,
                category,
                title,
                photo,
                intro,
                content,
                authorName,
                authorPhoto,
                date,
            })=>{
                    return(
                            <div key={id}>
                            <TinyVerticalPost
                                category = {category}
                                title = {title}
                                photo = {photo}
                                intro = {intro}
                                // content = {content}
                                authorName = {authorName}
                                authorPhoto = {authorPhoto}
                                date = {date}/>
                        </div>
                )
            })
        }

</div>



<div class="flex-row">
    {
            blogPosts.filter(blogPosts => blogPosts.postType == 'main').map(({
                            id,
                            category,
                            title,
                            photo,
                            intro,
                            content,
                            authorName,
                            authorPhoto,
                            date,
                        })=>{
                                return(
                                        <div key={id}>
                                        <VerticalPost
                                            category = {category}
                                            title = {title}
                                            photo = {photo}
                                            intro = {intro}
                                            // content = {content}
                                            authorName = {authorName}
                                            authorPhoto = {authorPhoto}
                                            date = {date}/>
                                    </div>
                            )
                        })
        }

</div>

</div>
	)
}

export default Blogs;


