import Axios from 'axios';
import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import * as style from "./Search.module.css";

class Search extends Component {
    state = {
        country: '',
        city: '',
        cost: '',
        start_date: '',
        end_date: '',
        Language: '',   /*להוסיף שיהיה מערך */
        searchResult: []
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }

    getSearchResult = (event) => {
        event.preventDefault();
        Axios.get("http://localhost:3001/api",
            { params: this.state })
            .then(response => { console.log(response); this.setState({ searchResult: response.body }) })
    }

    render() {

        return (
            <div className={style.searchContainer}>
                <Form onSubmit={this.getSearchResult}>
                        <FormControl name="country" type="text" onChange={this.changeHandler} placeholder="country" />
                        <FormControl name="city" type="text" onChange={this.changeHandler} placeholder="city" />
                        <FormControl name="cost" type="number" onChange={this.changeHandler} placeholder="pric" />
                        <FormControl name="start_date" type="date" onChange={this.changeHandler} placeholder="staratDate" />
                        <FormControl name="end_date" type="date" onChange={this.changeHandler} placeholder="endDate" />
                        <FormControl name="Language" type="text" onChange={this.changeHandler} placeholder="Language" />
                        <Button type="submit" /*href={'/allguides'} */>Search</Button>
                </Form>
               
            </div>

        );
    }

}
export default Search;