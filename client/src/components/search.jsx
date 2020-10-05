import React, { Component, useContext, useEffect, useState } from "react";

import SearchResults from "./newSearchResult";
import { searchGuides } from "../api/index";
import { AppContext } from "../context/appContext";

// import { ListItemAvatar } from '@material-ui/core';

const Search = (props) => {
  const appContext = useContext(AppContext);
  const [state, setState] = useState({
    items: [],
    country: "",
    city: "",
    cost: "",
    language: "" /*להוסיף שיהיה מערך */,
    searchResult: [],
  });

  const changeHandler = (event) => {
    // let name = event.target.name;
    // let value = event.target.value
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  const getSearchResult = async () => {
    const { language, country, city, cost } = state;
    const response = await searchGuides(
      country.trim().toLowerCase(),
      language.trim().toLowerCase(),
      city.trim().toLowerCase(),
      cost.trim().toLowerCase()
     
    );
    console.log( country.trim().toLowerCase())
    const guides = response.data.data;

    appContext.setState({ filterItems: guides });
    if (props.history) {
      props.history.push("/guides/listGuides");
    }
  };

  const sortByCost = () => {
    appContext.state.filterItems.sort((a, b) => a.cost.localeCompare(b.cost));
    // appContext.state.filterItems.sort((a, b) => Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0);
    appContext.setState({ filterItems: appContext.state.filterItems });
  };

  const { filterItems } = state;
  return (
    <div className="searchContainer">
      <section className="search-sec">
        <div className="container">
          <form action="#" method="post" novalidate="novalidate">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <input
                      type="text"
                      name="country"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="Country"
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <input
                      type="text"
                      name="city"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="City"
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <input
                      type="text"
                      name="cost"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      placeholder="Cost"
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <select
                      name="language"
                      onChange={changeHandler}
                      className="form-control search-slt"
                      id="exampleFormControlSelect1"
                    >
                      <option>Select Language</option>
                      <option>spanish</option>
                      <option>hebrew</option>
                      <option>english</option>
                      <option>french</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <button
                      type="button"
                      onClick={getSearchResult}
                      className="btn btn-danger wrn-btn"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="result-sort">
        {appContext.state.filterItems.length != 0 ? (
          <hgroup class="mb20">
            <h1>Search Results</h1>
            <h2 class="lead">
              <strong class="text-danger">
                {appContext.state.filterItems.length}
              </strong>{" "}
              results were found{" "}
            </h2>
          </hgroup>
        ) : (
          ""
        )}
        {appContext.state.filterItems.length != 0 ? (
          <div>
            <button type="button" onClick={sortByCost} className="sortBtn">
              Price lowest first
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      {props.showResult &&
        appContext.state.filterItems &&
        appContext.state.filterItems.map((item, index) => (
          <div className="results" key={index}>
            <SearchResults
              pic={item.pic}
              first_name={item.first_name}
              last_name={item.last_name}
              cost={item.cost}
              country={item.country}
              city={item.city}

              // to="/"
            />
          </div>
        ))}
    </div>
  );
};
export default Search;
