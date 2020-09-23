import React, {useEffect, useState} from 'react'
// import DemoTicket from '../DemoTicket';
import {getAllTickets} from '../../apis/ticketsApi';
import CardComponent from '../CardComponent';

export default function TicketsContainer() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        getAllTickets()
            .then(res => setTickets(res.data.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="tickets-container">
            {/* {tickets.map((ticket) => <DemoTicket key={ticket._id} ticket={ticket} />)} */}
            {tickets.map((ticket) => <CardComponent key={ticket._id} eventInfo={ticket} />)}
        </div>
    )
}

