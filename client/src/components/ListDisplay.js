import React from 'react';
import Modal from './profileGaide'

function ListDisplay(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__div'>
          <figure className='cards__item__pic-wrap' data-category={props.country} >
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            {/* <h5 className='cards__item__text'>{props.text}</h5> */}
            <Modal text={props.text}  src={props.src} country={props.country} cost={props.cost} com={props.com}
            date={props.date} summery={props.summery}/>
          </div>
        </div>
      </li>
    </>
  );
}

export default ListDisplay;