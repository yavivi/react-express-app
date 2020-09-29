import React from 'react';
import './CardComponent.css';


export default function CardComponent({ eventInfo }) {
const dateObject = new Date(eventInfo.ticket_dates);
const date = dateObject.toLocaleDateString();
const time = dateObject.toLocaleTimeString();


    return (

        <div className="card ticket" >
            <div className="eventImgContainer">
                <img className="eventImg" src={eventInfo.imgUrl} alt="event" />
            </div>

            <p className="eventName">{eventInfo.ticket_title}</p>
            <span className="date">{date} </span>
            |
            <span className="hour">{time}</span>
            <p className="location">{eventInfo.location}</p>
            {/* <p className="sellerName">{eventInfo.seller_Id}</p> */}
            <p className="price">{eventInfo.price} ₪</p>
        </div>
    )
}
