import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


function Header() {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">AI is Coming</h1>
                <p>AI must feed.  Do not resist.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your email address"/>
                    <button type="submit">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/>
                    <p>1604 people have requested access in the last 4 minutes.</p>
                </div>

                {/* <div className="gpt3__header-image">
                    <img src={ai} alt="ai avatar"/>
                </div> */}
            </div>
        </div>
    )
}

export default Header
