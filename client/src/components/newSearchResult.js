import React from "react";
import "../components/css/searchResult.css";
import { AiOutlineGlobal, AiFillDatabase } from 'react-icons/ai';
import Modal from '../../src/components/profileGaide'



export default function SearchResults(props) {
  // const classes = useStyles();

  return (
    <div class="container">
      <section class="col-xs-12 col-sm-6 col-md-12">
        <div class="singleResult">
          <article class="search-result row">
            <div class="col-xs-12 col-sm-12 col-md-3">
              <Modal text={props.first_name + ' ' + props.last_name} src={props.pic} country={props.country} cost={props.cost} com={props.com}
                date={props.date} summary={props.summary} city={props.city} Experience={props.Experience} Language={props.Language} />

              {/* </a> */}
            </div>

            <div class="col-xs-12 col-sm-12 col-md-9 excerpet">
              <div className="info">
                {/* <h4>
                {/* {props.first_name + " " + props.last_name}  */}
                {/* <a href="Modal" title="">
                  </a> */}
                {/* </h4> */}
                <div >
                  <ul >
                    <li>
                    
                      <div class="rating">
                      <h3>:Rating</h3>
                      <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <span>

                  Summary:

              </span>
                <div>{props.summary}</div>

                <div className="ex-la-minediv">


                  <div className="ex-la">
                    <ul>

                      <li><AiFillDatabase /> Experience:</li>

                      <li>{props.Experience}</li>
                    </ul>
                  </div>

                  <div className="ex-la A">
                    <ul>

                      <li><AiOutlineGlobal />Language:</li>

                      <li>{props.Language}</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>


            <span class="clearfix borda"></span>
          </article>
        </div>
      </section>
    </div>
  );
}
