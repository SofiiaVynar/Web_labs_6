import React from 'react';
import Header from '../home/home_header';
import { Link } from 'react-router-dom';
import successImage from './output.png';
import './success.css'

const SuccessPage = () => {
    return (
        <div>
            <Header/>
            <p className='submitted'>Your form has been submitted successfully!</p>
            <img src={successImage} alt="Success" style={{ width: '100%', maxWidth: '200px', display: 'block', margin: 'auto' }} />
            <Link to="/login">
                    <button className='back-to'>Go Back</button>
            </Link>
        </div>
    );
};

export default SuccessPage;

