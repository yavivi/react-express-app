import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage, LoginPage, PublishTicket, SellerDashboard, TicketManagement, SignupPage } from './pages';

function App() {
    return <div>
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/sellers/login" exact component={LoginPage} />
                <Route path="/sellers/signup" exact component={SignupPage} />
                <Route path="/sellers/dashboard" exact component={SellerDashboard} />
                <Route path="/sellers/publish-ticket" exact component={PublishTicket} />
                <Route path="/sellers/ticket/:id/management" exact component={TicketManagement} />
            </Switch>
        </Router>
    </div>
}

export default App;