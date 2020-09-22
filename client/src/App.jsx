import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage, LoginPage, PublishTicket, SellerDashboard, TicketManagement, SignupPage } from './pages';

function App() {
    return <div>
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/seller/login" exact component={LoginPage} />
                <Route path="/seller/signup" exact component={SignupPage} />
                <Route path="/seller/dashboard" exact component={SellerDashboard} />
                <Route path="/seller/publish-ticket" exact component={PublishTicket} />
                <Route path="/seller/ticket/:id/management" exact component={TicketManagement} />
            </Switch>
        </Router>
    </div>
}

export default App;