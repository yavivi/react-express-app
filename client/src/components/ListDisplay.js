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
            { <Modal name={props.name} src={props.src} country={props.country} 
            cost={props.cost} lang={props.lang} summary={props.summary} com={props.com} email={props.email}/> }
            
          </div>
        </div>
      </li>
    </>
  );
}

export default ListDisplay;