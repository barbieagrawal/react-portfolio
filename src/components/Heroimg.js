import React from 'react'

import "./HeroimgStyles.css";
import IntroImg from "../assets/workspace3-transformed.jpeg";
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} />
        </div>
        <div className='content'>
            <p>HI! I'M A STUDENT</p>
            <h1>Front-end Developer</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg