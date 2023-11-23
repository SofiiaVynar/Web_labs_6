import React from 'react';
import './footer.css';
import facebook from './Fotoes/facebook.png';
import twitter from './Fotoes/twitter.png';
import inl from './Fotoes/inl.png';
import G from './Fotoes/G.png';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="left-footer-1">
                    <p>La'laurel</p>
                </div>
                <div className='left-footer-2'>
                <p>Brand perfumes</p>
                </div>
                <div className="center-footer">
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className="right-footer">
                    <img src={facebook} alt="Facebook" />
                    <img src= {twitter} alt="Twitter" />
                    <img src= {inl} alt="In" />
                    <img src= {G} alt="G+" />
                </div>
            </div>
            <div className="line"></div>
            <div className='underLine'>
                <p>2023 @copyrights</p>
            </div>
        </footer>
    );
}

export default Footer;
