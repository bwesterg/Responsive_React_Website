import React from 'react';
import './possibility.css';

import possibilityImage from '../../assets/possibility.png'

function Possibility() {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibilities image"/>
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">A Land of Pure Imagination</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                <h4>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis </h4>
            </div>
        </div>
    )
}

export default Possibility
