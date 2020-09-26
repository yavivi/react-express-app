
import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


import { searchGuides } from '../api/index';
// import { ListItemAvatar } from '@material-ui/core';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            items: [],
            filterItems: [],
            country: '',
            city: '',
            cost: '',
            language: '',   /*להוסיף שיהיה מערך */
            searchResult: []

        }

    };

    changeHandler = (event) => {
        // let name = event.target.name;
        // let value = event.target.value
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }



    getSearchResult = async () => {
        const { language, country, city, cost } = this.state;
        console.log('look here',language, country, city, cost )
        const response = await searchGuides(country, language, city, cost);
        const guides = response.data.data;
        this.setState({ filterItems: guides })
    }


    render() {
        const { filterItems } = this.state;
        return (
            <div>
                <section className="search-sec">
                    <div className="container">
                        <form action="#" method="post" novalidate="novalidate">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">

                                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">

                                            <input type="text" name="country" onChange={this.changeHandler} className="form-control search-slt" placeholder="country" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                            <input type="text" name="city" onChange={this.changeHandler} className="form-control search-slt" placeholder="City" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                            <input type="text" name="cost" onChange={this.changeHandler} className="form-control search-slt" placeholder="cost" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                            <select name="language" onChange={this.changeHandler} className="form-control search-slt" id="exampleFormControlSelect1">
                                                <option>Select Language</option>
                                                <option>Spanish</option>
                                                <option>Hebrew </option>
                                                <option>English</option>

                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                            <button type="button" onClick={this.getSearchResult} className="btn btn-danger wrn-btn">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <div>
                    {filterItems && filterItems.map((item) => (
                        <div>
                            {item.first_name}
                            {item.last_name}
                            {item.country}
                            {item.city}
                            {item.cost}
                        </div>
                    ))}
                </div>

            </div>

            //         <div>
            //                  <Form >
            //                         <FormControl name="country" type="text" onChange={this.changeHandler} placeholder="country" />
            //          <FormControl name="city" type="text" onChange={this.changeHandler} placeholder="city" />
            //         <FormControl name="cost" type="text" pattern="[0-9]*" onChange={this.changeHandler} placeholder="price" />
            //         <FormControl name="language" type="text" onChange={this.changeHandler} placeholder="Language" />
            //         <Button onClick={this.getSearchResult}>Search</Button>
            //     </Form>
            //     <div>
            //                         {filterItems && filterItems.map((item) => (
            //             <div>
            //                {item.first_name}
            //                {item.last_name}
            //             {item.country}
            //                 {item.city}
            //                 {item.cost}
            //             </div>
            //         ))}
            //     </div> 

            //   </div> 

        );
    }

}
export default Search;