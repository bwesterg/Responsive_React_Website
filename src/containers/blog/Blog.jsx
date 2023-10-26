import React from 'react';
import { Article } from '../../components';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

function Blog() {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, and we are blogging on the subject</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="October 25, 2023" title="Open AI is the future. Let us explore the possibilities"/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="October 25, 2023" title="Open AI is the future. Let us explore the possibilities"/>
                    <Article imgUrl={blog03} date="October 25, 2023" title="Open AI is the future. Let us explore the possibilities"/>
                    <Article imgUrl={blog04} date="October 25, 2023" title="Open AI is the future. Let us explore the possibilities"/>
                    <Article imgUrl={blog05} date="October 25, 2023" title="Open AI is the future. Let us explore the possibilities"/> 
                </div>
            </div>
        </div>
    )
}
 
export default Blog
