import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './css/madol.css';
import { Carousel } from 'react-bootstrap';
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CommentGroup from './CommentGroup'
import emailjs from 'emailjs-com';
import { BiChevronRightCircle } from "react-icons/bi";
import { FaChevronCircleRight } from "react-icons/fa";






export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_p9f7z4g', e.target, 'user_De4KSXDiwzq0OzlXZsrxy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {


        return (

            <section>
                {/* <input type="button" value="Open" onClick={() => this.openModal()} /> */}
                <img className='cards_item_img' alt='Click' src={this.props.src} onClick={() => this.openModal()} width="180px"
                    height="160px" />
                <h5 className='clickOpen' onClick={() => this.openModal()}>{this.props.text} </h5>
                {/* <img src={this.props.src} height="300px" width="300px" /> */}

                <h2>
                    {/* A tour of the State of  {this.props.country}  and its cities */}
                </h2>
                {/* {<a className="buttonClose" href="javascript:void(0);" onClick={() => this.closeModal()}>x</a>} */}

                <Modal className="modal" visible={this.state.visible} width="95%" height="100%" effect="fadeInUp" onClickAway={() => this.closeModal()}>


                    <div className="guideModal">
                        <div className="title">
                            <h1>{this.props.text}</h1>
                        </div>
                        <div className="CityCounStar">
                            <div className="CityCoun">
                                <h4>{this.props.city + ',' + ' ' + this.props.country}</h4>
                            </div>
                            <ul >
                                <li>
                                    <div className="rating">
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                    </div>
                                </li>
                            </ul>
                        </div>


                        <div className="userInformation">
                            <div className="left">

                                <Carousel >

                                    <Carousel.Item>
                                        <img
                                            src={this.props.src}
                                            alt="EMEYE"
                                            className="imgCarusel"
                                        />
                                        <div class="carousel-caption">
                                            <h3 > {this.props.name + ' '}
                                                {'from' + ' ' + this.props.country}
                                            </h3>
                                        </div>
                                        <div>
                                        </div>

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            src={this.props.src}
                                            alt="Third slide"
                                            className="imgCarusel"

                                        />
                                        <div class="carousel-caption">
                                            <h3 >Slight mask</h3>
                                            {/* <p>Third text</p> */}
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            src={this.props.src}
                                            alt="Third slide"
                                            className="imgCarusel"

                                        />
                                        <div class="carousel-caption">
                                            <h3 >Slight mask</h3>
                                            {/* <p>Third text</p> */}
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            src={this.props.src}
                                            className="imgCarusel"
                                        />
                                        <div class="carousel-caption">
                                            <h3 >Slight mask</h3>
                                            {/* <p>Third text</p> */}
                                        </div>

                                    </Carousel.Item>

                                </Carousel>

                                <br></br>
                                <div className="allExperience">
                                    <div className="Experience">

                                        <FaChevronCircleRight /> Experience: {this.props.Experience}
                                    </div>
                                    <div className="Experience">
                                        <FaChevronCircleRight />  7:00AM- 18:00PM
                                   </div>
                                    <div className="policy">
                                        <FaChevronCircleRight />  <Link to='/country'>Cancellation policy</Link>
                                    </div>
                                </div>

                            </div>

                            <div className="right">
                                <div className="summary">
                                    <h4> About Me</h4>
                                    {this.props.summary}

                                    {/* <h3>{this.props.cost + '.00' + '$'} </h3> */}
                                </div>


                                <div className="dateLangBook">
                                    <div className="date">
                                        <div>
                                            StartDate
                                           <input
                                                type="date"
                                                name="date"
                                                className="form-control search-slt"
                                                placeholder=""
                                            />
                                        </div>
                                        <div>
                                            EndDate
                                        <input
                                                type="date"
                                                name="date"
                                                className="form-control search-slt"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="Tourists">
                                            Tourists
                                      <input
                                                type="number"
                                                name="sum"
                                                className="form-control search-slt"
                                                placeholder=""
                                            />

                                        </div>
                                        <div className="price">
                                          Total Amount {this.props.cost}
                                        </div>

                                    </div>


                                    {/* <h4>From:{this.props.country}</h4>
                                        <br></br>
                                        <h4>Cost:{this.props.cost}</h4> */}
                                </div>
                                <div className="dateLang" >
                                    {this.props.lang}
                                </div>
                            </div>
                            {/* <div className="borderBook">

                            </div> */}
                            {/* <div className="media">
                                <h2>share:</h2>
                                <Link to='#'><FiInstagram /></Link>
                                <Link to='#'> <FaFacebook /></Link>

                            </div> */}

                            {/* <div className="comment">
                                <table >
                                    Comments:{' ' + this.props.com + ' '}
                                     {this.props.date} 
                                    <CommentGroup />
                                </table>
                            </div> */}
                            <br></br>
                            <p >
                                {/* <form className="contact-form" onSubmit={this.sendEmail}>
                                    <input type="hidden" name="contact_number" />
                                    <input type="hidden" name="user_name" value={this.props.name} />
                                    <input type="hidden" name="Country" value={this.props.Country} />
                                    <input type="hidden" name="cost" value={this.props.cost} />
                                    <input type="hidden" name="phone" value={this.props.phone} />
                                    <input type="hidden" name="user_email" value={this.props.email} />
                                    <input type="hidden" name="message" value={this.props.summary} />

                                    <button className="button" type="submit" value="I Want Him">I Want Him</button>

                                </form> */}

                            </p>

                        </div>
                        {/* <div className="book">
                            <Link to='#' className="text">Book Now</Link>
                        </div> */}

                    </div>*/

                </Modal>
            </section>
        );
    }
}
{/* <div className="comments">
<div className="addComment">
    <h6>
        enterComment:
    </h6>
    <textarea className="newComment" /><br />
    <button type="button" class="btn btn-outline-primary">sendComment</button>

    {<button className="addCommentBtn" type="button" value="sendComment"/> }
</div>
<ul className="commentList">
    <li className="comment">
        amazing guide, avi the best guide ever!!!
    </li>
</ul>

</div> } */}