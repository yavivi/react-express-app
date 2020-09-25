import React from 'react';
import Date from '../components/Sell/DatePicker';
import Event from '../components/Sell/EventName';
import TimePicker from '../components/Sell/TimePicker';

function SellTickets() {
    return (
        <div>
            <h1>Sell Tickets</h1>
            <Event/>
            <Date/>
            <TimePicker/>
        </div>
    )
}
export default SellTickets;


