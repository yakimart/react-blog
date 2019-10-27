import React from 'react';
import { Route } from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './blogs.css'
import AllBlogs from './AllBlogs'
import HorizontalPost from './Horizontal-post/horizontalPost'
import SinglePost from './SinglePost/SinglePost'
import blogPosts from './blogPosts/blogPosts'




const Blogs = () => {
    return (

        <div className="blogs">



            <Route path='/' exact render={() => (<AllBlogs />)} />
            <Route path='/blog/:blogId' component={SinglePost}/>

            <Route path='/Lifestyle' exact render={() => (


                blogPosts.filter(blogPosts => blogPosts.category === 'lifestyle').map(({
                    id,
                    category,
                    title,
                    photo,
                    intro,
                    content,
                    authorName,
                    authorPhoto,
                    date,
                }) => {
                    return (
                        <div key={id}>
                            <HorizontalPost
                                id ={id}
                                category={category}
                                title={title}
                                photo={photo}
                                intro={intro}
                                // content = {content}
                                authorName={authorName}
                                authorPhoto={authorPhoto}
                                date={date} />
                        </div>
                    )
                })

            )} />

            <Route path='/Photography' exact render={() => (


                blogPosts.filter(blogPosts => blogPosts.category === 'photography').map(({
                    id,
                    category,
                    title,
                    photo,
                    intro,
                    content,
                    authorName,
                    authorPhoto,
                    date,
                }) => {
                    return (
                        <div key={id}>
                            <HorizontalPost
                                id ={id}
                                category={category}
                                title={title}
                                photo={photo}
                                intro={intro}
                                // content = {content}
                                authorName={authorName}
                                authorPhoto={authorPhoto}
                                date={date} />
                        </div>
                    )
                })

            )} />

            <Route path='/Trip' exact render={() => (


                blogPosts.filter(blogPosts => blogPosts.category === 'trip').map(({
                    id,
                    category,
                    title,
                    photo,
                    intro,
                    content,
                    authorName,
                    authorPhoto,
                    date,
                }) => {
                    return (
                        <div key={id}>
                            <HorizontalPost
                                id ={id}
                                category={category}
                                title={title}
                                photo={photo}
                                intro={intro}
                                // content = {content}
                                authorName={authorName}
                                authorPhoto={authorPhoto}
                                date={date} />
                        </div>
                    )
                })

            )} />

            <Route path='/Inspiration' exact render={() => (


                blogPosts.filter(blogPosts => blogPosts.category === 'inspiration').map(({
                    id,
                    category,
                    title,
                    photo,
                    intro,
                    content,
                    authorName,
                    authorPhoto,
                    date,
                }) => {
                    return (
                        <div key={id}>
                            <HorizontalPost
                                id ={id}
                                category={category}
                                title={title}
                                photo={photo}
                                intro={intro}
                                // content = {content}
                                authorName={authorName}
                                authorPhoto={authorPhoto}
                                date={date} />
                        </div>
                    )
                })

            )} />



        </div>
    )
}




export default Blogs;


