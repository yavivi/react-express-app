import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../components/css/searchResult.css";

export default function SearchResults(props) {
  // const classes = useStyles();

  return (
    <div class="container">
      <section class="col-xs-12 col-sm-6 col-md-12">
        <article class="search-result row">
          <div class="col-xs-12 col-sm-12 col-md-3">
            <a href="#" title="Lorem ipsum" class="thumbnail">
              <img
                width="250px"
                height="300px"
                src={props.pic}
                // "http://lorempixel.com/250/140/people"
                alt="Lorem ipsum"
              />
            </a>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-2">
            <ul class="meta-search">
              <li>
                <i class="glyphicon glyphicon-calendar"></i>{" "}
                <div class="rating">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-7 excerpet">
            <h3>
              <a href="#" title="">
                {props.first_name + " " + props.last_name}
              </a>
            </h3>
            <ul>
              <li>Country:{props.country}</li>
              <li>City:{props.city}</li>
              <li>Cost:{props.cost}</li>
            </ul>
            <span class="plus">
              <a href="#" title="Lorem ipsum">
                <i class="glyphicon glyphicon-plus"></i>
              </a>
            </span>
          </div>
          <span class="clearfix borda"></span>
        </article>

        {/* 


        <article class="search-result row">
          <div class="col-xs-12 col-sm-12 col-md-3">
            <a href="#" title="Lorem ipsum" class="thumbnail">
              <img src="http://lorempixel.com/250/140/food" alt="Lorem ipsum" />
            </a>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-2">
            <ul class="meta-search">
              <li>
                <i class="glyphicon glyphicon-calendar"></i>{" "}
                <span>02/13/2014</span>
              </li>
              <li>
                <i class="glyphicon glyphicon-time"></i> <span>8:32 pm</span>
              </li>
              <li>
                <i class="glyphicon glyphicon-tags"></i> <span>Food</span>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-7">
            <h3>
              <a href="#" title="">
                Voluptatem, exercitationem, suscipit, distinctio
              </a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, exercitationem, suscipit, distinctio, qui sapiente
              aspernatur molestiae non corporis magni sit sequi iusto debitis
              delectus doloremque.
            </p>
            <span class="plus">
              <a href="#" title="Lorem ipsum">
                <i class="glyphicon glyphicon-plus"></i>
              </a>
            </span>
          </div>
          <span class="clearfix borda"></span>
        </article>

        <article class="search-result row">
          <div class="col-xs-12 col-sm-12 col-md-3">
            <a href="#" title="Lorem ipsum" class="thumbnail">
              <img
                src="http://lorempixel.com/250/140/sports"
                alt="Lorem ipsum"
              />
            </a>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-2">
            <ul class="meta-search">
              <li>
                <i class="glyphicon glyphicon-calendar"></i>{" "}
                <span>01/11/2014</span>
              </li>
              <li>
                <i class="glyphicon glyphicon-time"></i> <span>10:13 am</span>
              </li>
              <li>
                <i class="glyphicon glyphicon-tags"></i> <span>Sport</span>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-7">
            <h3>
              <a href="#" title="">
                Voluptatem, exercitationem, suscipit, distinctio
              </a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, exercitationem, suscipit, distinctio, qui sapiente
              aspernatur molestiae non corporis magni sit sequi iusto debitis
              delectus doloremque.
            </p>
            <span class="plus">
              <a href="#" title="Lorem ipsum">
                <i class="glyphicon glyphicon-plus"></i>
              </a>
            </span>
          </div>
          <span class="clearfix border"></span>
        </article> */}
      </section>
    </div>
  );
}
