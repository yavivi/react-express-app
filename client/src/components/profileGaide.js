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
                <h4 className='clickOpen' onClick={() => this.openModal()}>{this.props.text} </h4>
                {/* <img src={this.props.src} height="300px" width="300px" /> */}

                <h2>
                    {/* A tour of the State of  {this.props.country}  and its cities */}
                </h2>
                {/* {<a className="buttonClose" href="javascript:void(0);" onClick={() => this.closeModal()}>x</a>} */}

                <Modal className="modal" visible={this.state.visible} width="95%" height="100%" effect="fadeInUp" onClickAway={() => this.closeModal()}>


                    <div className="guideModal" >
                        <div className="title" >
                            <h1>{this.props.text}</h1>
                        </div>
                        
                        <div className="CityCounStar">
                            <div className="CityCoun">
                                <h6>{this.props.city + ',' + ' ' + this.props.country}</h6>
                            </div>
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
                                <div className="putRating">
                                    <ul >
                                        Click to rate:
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

                                    <div className="comment">
                                        <table >
                                            Comments:{' ' + this.props.com + ' '}
                                            {/* {this.props.date} */}
                                            <CommentGroup />
                                        </table>

                                    </div>
                                </div>

                            </div>

                            <div className="right">
                                <div className="summary">
                                    <h3> About Me</h3>
                                    <br></br>
                                    {this.props.summary}
                                    <br></br>
                                    <br></br>
                                    I speak the languages: {this.props.Language}

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


                                <div className="dateLangBook" >
                                    <div className="date" >
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
                                                min="0"
                                            />

                                        </div>
                                        <div >
                                            Phone:
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-control search-slt"
                                            />
                                        </div>
                                        <br></br>
                                        <div className="price">
                                            <h5>Total Amount {this.props.cost}</h5>
                                        </div>
                                        <br></br>
                                        <input
                                            type="submit"
                                            name="submit"
                                            className="form-control search-slt1"
                                            value="Book Now"
                                            color="blue"
                                        />
                                        <br></br>
                                        <p >
                                            <form className="contact-form" onSubmit={this.sendEmail}>
                                                <input type="hidden" name="contact_number" />
                                                <input type="hidden" name="user_name" value={this.props.name} />
                                                <input type="hidden" name="Country" value={this.props.Country} />
                                                <input type="hidden" name="cost" value={this.props.cost} />
                                                <input type="hidden" name="phone" value={this.props.phone} />
                                                <input type="hidden" name="user_email" value={this.props.email} />
                                                <input type="hidden" name="message" value={this.props.summary} />

                                                <button className="button" type="submit" value="I Want Him">I Want Him</button>

                                            </form>

                                        </p>
                                        <div className="borderBook">
                                        </div>
                                        <br></br>
                                        <div className="media">
                                            <h4>share:</h4>
                                            <Link to='#'><FiInstagram /></Link>
                                            <Link to='#'> <FaFacebook /></Link>

                                        </div>

                                    </div>


                                    {/* <h4>From:{this.props.country}</h4>
                                        <br></br>
                                        <h4>Cost:{this.props.cost}</h4> */}
                                </div>

                            </div>


                            {/* <div className="comment">
                                <table >
                                    Comments:{' ' + this.props.com + ' '}
                                     {this.props.date} 
                                    <CommentGroup />
                                </table>
                            </div> */}
                            <br></br>


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