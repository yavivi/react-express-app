import React from 'react';
import './css/card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='assets/et.jpg'
              text='Explore the ethiopia Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='assets/barc.jpg'
              text='Travel in barcelona'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='pictures/Extreme.jpg'
              text='Extreme trip,
              Skydiving'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='pictures/Walibi.jpg'
              text='Extreme trip'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='pictures/slider.jpg'
              text='Extreme trip'
              // text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/signUp'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;