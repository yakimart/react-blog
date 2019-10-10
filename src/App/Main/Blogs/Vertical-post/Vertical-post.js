import React from 'react';

import './vertical-post.css'

const VerticalPost = () => {
	return(
        <div className="post big-vertical-post">
        <div className="media">
                <img src="img/Layer 64.png" alt="lifestyle"/>
            </div>
            <div class="comment">
                    <p className="title">10 Things To Do To Change Your Life Forever</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="author">
                    <div><img src="img/Ellipse 4.png"/></div>
                    <div className="post-info">
                        <div className="author-name">Henry Little</div>
                        <div className="date">April 25, 2016   10:15</div>
                    </div>
                    <a href="" className="share"></a>
                </div>
</div> 
	)
}


export default VerticalPost;








