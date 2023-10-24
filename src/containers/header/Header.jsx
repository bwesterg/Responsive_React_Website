import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


function Header() {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your email address"/>
                    <button type="submit">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/>
                    <p>1604 people have requested access in the last 4 minutes.</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai avatar"/>
            </div>
        </div>
    )
}

export default Header
