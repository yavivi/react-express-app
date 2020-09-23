import React, { useEffect, useState } from 'react'
import DemoTicket from '../DemoTicket';
import { getAllTickets } from '../../apis/ticketsApi';

let allTickets = [];

export default function TicketsContainer({ categoryId }) {
    const [tickets, setTickets] = useState([]);
    // const [categoryId, setCategoryId] = useState(1);
    useEffect(() => {
        getAllTickets()
            .then(res => {
                allTickets = res.data.data;
                setTickets(allTickets);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        setTickets(allTickets.filter((ticket) => {
                return  categoryId === '1' || ticket.category_Id === categoryId;
            })
        )
    }, [categoryId]);

    return (
        <div className="tickets-container">
            {tickets.map((ticket) => <DemoTicket key={ticket._id} ticket={ticket} />)}
        </div>
    )
}

