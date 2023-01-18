import React from 'react'
import getStartImg from '../../assets/Chef-bro.png'

import { Link } from "react-router-dom";

import './GetStarted.css'
const GetStarted = () => {
    return (

        <Link to='/recipes'>
            <div className="getstarted ">
                <div className='getstarted-cont'>
                    <img className='GetImg' src={getStartImg} alt="getStartImg" />
                    <div className='get-heading-cont'>
                        <p className='title'>100s Of Premium Recipes</p>
                        <h1 className='heading'>I'ts Cooking Time</h1>
                        <button className='get-btn'>Get Started</button>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default GetStarted