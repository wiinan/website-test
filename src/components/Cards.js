import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

export default function Cards(){
    return(
        <div className='cards'>
            <h1>Veja uma viagem Epica</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='./assets/img-9.jpg' text='Explore o escondido na mais profunda floresta' label='Adventure' path='/services' />
                        <CardItem src='./assets/img-2.jpg' text='Viage atraves das ilhas de Bali em cruzeiros particulares' label='Luxury' path='/services' />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='./assets/img-3.jpg' text='Escolha Navegar no Oceano Atlantico visitando suas aguas' label='Adventure' path='/services' />
                        <CardItem src='./assets/img-4.jpg' text='Experiencie jogar futebol no topo da Montanha do Himilayan' label='Luxury' path='/services' />
                        <CardItem src='./assets/img-8.jpg' text='Passeie atraves do deserto do Sahara com um guia e camelos' label='Luxury' path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}