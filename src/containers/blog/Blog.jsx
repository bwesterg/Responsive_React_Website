import React from 'react';
import { Article } from '../../components';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

function Blog() {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">Our engineers are excited for the future</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="October 25, 2023" title="Open AI is the future. Let us explore the possibilities"/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="October 25, 2023" title="AI is open to the future. Let us possibly explore"/>
                    <Article imgUrl={blog03} date="October 25, 2023" title="Possibly, AI is openly future. Let's now explore"/>
                    <Article imgUrl={blog04} date="October 25, 2023" title="Explore the possibilities of an AI future"/>
                    <Article imgUrl={blog05} date="October 25, 2023" title="Futuristic AI is possibly explorable"/> 
                </div>
            </div>
        </div>
    )
}
 
export default Blog
