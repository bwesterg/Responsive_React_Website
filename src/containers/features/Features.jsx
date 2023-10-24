import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Title number one plus more text',
        text: 'nisi ut aliquid ex ea commodi consequatur? Quis autem'
    },
    {
        title: 'Title number two',
        text: 'nisi ut aliquid ex ea commodi consequatur? Quis autem'
    },
    {
        title: 'Title number three this is more text',
        text: 'nisi ut aliquid ex ea commodi consequatur? Quis autem'
    },
    {
        title: 'Title number four filler',
        text: 'nisi ut aliquid ex ea commodi consequatur? Quis autem'
    }
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</h1>
                <p>Request Early Access</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} /> 
                ))}
            </div>
        </div>
    )
}

export default Features
