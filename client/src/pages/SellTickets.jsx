import React from 'react';
import Date from '../components/Sell/DatePicker'
import Event from '../components/Sell/EventName';


function SellTickets() {

    return (
        <div>
            <h1>Sell Tickets</h1>
            <Event/>
            <Date/>
        </div>
    )
}

export default SellTickets;