import React from 'react'
import LinkButton from '../LinkButton'
import Logo from '../Logo'

export default function MainNavbar() {
    return (
        <nav className="main-navbar">
            <Logo />
            {window.location.pathname === '/' && <LinkButton className="sell-tickets-btn" url="/sellers/login" text="SELL TICKETS"/>}
        </nav>
    )
}
