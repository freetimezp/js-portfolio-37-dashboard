/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function NewsPostItem({ item }) {
    return (
        <div className='post-item clearfix'>
            <img src={item.img} alt="news" />
            <h4>
                <a href="#">{item.title}</a>
            </h4>
            <p>
                {item.subtitle}...
            </p>
        </div>
    );
};

export default NewsPostItem;
