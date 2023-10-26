import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

function WhatGPT3() {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3?" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae" />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">We offer a variety of services to harness the power of artificial intelligence</h1>
                <p>Explore the Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae"/>
                <Feature title="Knowledgebase" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae"/>
                <Feature title="Education" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae"/>
            </div>
        </div>
    )
}

export default WhatGPT3