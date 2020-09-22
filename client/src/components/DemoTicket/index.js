import React from 'react'

export default function DemoTicket({ticket}) {
    return (
        <div className="demo-ticket">
            <p>{ticket.ticket_title}</p>
        </div>
    )
}
