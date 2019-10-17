import React from 'react';
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './blogs.css'
import MainPost from './Main-post/mainPost'
import HorizontalPost from './Horizontal-post/horizontalPost'
import TinyVerticalPost from './Tiny-vertical-post/TinyVerticalPost'
import VerticalPost from './Vertical-post/Vertical-post'
import blogPosts from './blogPosts/blogPosts'



const settingsForTiny = {
    swipeToSlide: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};


const settingsForVertical = {
    swipeToSlide: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
};



const AllBlogs = () => {
    return (
        <div>

            {
                blogPosts.filter(blogPosts => blogPosts.postType === 'main').map(({
                    id,
                    category,
                    title,
                    photo,
                    intro,
                    content,
                    authorName,
                    authorPhoto,
                    date,
                    postType
                }) => {

                    return (
                        <div key={id}>
                            <MainPost
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
            }



            {
                blogPosts.filter(blogPosts => blogPosts.postType === 'horizontal').map(({
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
            }



            <div className="tiny-slider">
                <Slider {...settingsForTiny}>
                    {
                        blogPosts.filter(blogPosts => blogPosts.postType === 'tiny-vertical').map(({
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
                                    <TinyVerticalPost
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
                    }
                </Slider>

            </div>



            <div className="vertical-slider">
                <Slider {...settingsForVertical}>
                    {
                        blogPosts.filter(blogPosts => blogPosts.postType == 'vertical').map(({
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
                                    <VerticalPost
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

                    }
                </Slider>

            </div>
        </div>)
}

export default AllBlogs;