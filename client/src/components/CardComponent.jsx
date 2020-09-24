import React from 'react';
import './CardComponent.css';



export default function CardComponent({eventInfo}) {

    return (
        <div className="card ticket" >
            <div className="eventImgContainer">
                <img className="eventImg" src={eventInfo.imgUrl} alt="event" />
            </div>

            <p className="eventName">{eventInfo.ticket_title}</p>
            <span className="date">{eventInfo.ticket_dates/*.toLocaleDateString()*/} </span>
            |
            <span className="hour"> {eventInfo.hour/*.toLocaleTimeString()*/}</span>  
            <p className="location">{eventInfo.location}</p>
            <p className="sellerName">{eventInfo.seller_Id}</p>
            <p className="price">{eventInfo.price} ₪</p>
        </div>
    )
}
