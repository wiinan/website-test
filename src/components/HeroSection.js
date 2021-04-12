import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css'

export default function HeroSection(){
    return(
        <div className='hero-container'>
            <video src='../assets/video-2.mp4' autoPlay loop muted/>
            <h1>Aventure-se</h1>
            <p>Frase muito motivacional aqui!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>COMECE</Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>VER PREVIO <i className='far fa-play-circle'/></Button>
            </div>
        </div>
    )
}