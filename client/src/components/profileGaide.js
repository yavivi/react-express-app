import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './css/madol.css';
import { Carousel } from 'react-bootstrap';
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CommentGroup from './CommentGroup'
import emailjs from 'emailjs-com';



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
                {/* <img src={this.props.src}  onClick={() => this.openModal()} /> */}
                <h5 className='clickOpen' onClick={() => this.openModal()}>{this.props.name} </h5>

                <Modal className="modal" visible={this.state.visible} width="95%" height="100%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    {/* <img src={this.props.src} height="300px" width="300px" /> */}
                    <h2>
                        {/* A tour of the State of  {this.props.country}  and its cities */}
                    </h2>
                    {/* { <a className="buttonClose" href="javascript:void(0);" onClick={() => this.closeModal()}>x</a>} */}
                    <div className="guideModal">


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

                            </div>
                            <div className="right">
                                <div className="dateLangBook">
                                    <div className="dateLang" >
                                        {this.props.lang}
                                    </div>
                                    <div >
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
                                            {/* <Link to='#'>Book Now</Link> */}
                                        </p>
                                        <h3>{this.props.cost + '.00' + '$'} </h3>
                                    </div>

                                </div>

                                <div className="media">
                                    <h2>share:</h2>
                                    <Link to='#'><FiInstagram /></Link>
                                    <Link to='#'> <FaFacebook /></Link>

                                </div>
                                <div>

                                </div>

                            </div>

                            <div className="summary">

                                {this.props.summary}
                            </div>
                            <div className="comment">
                                <table >
                                    Comments:{' ' + this.props.com + ' '}
                                    {/* {this.props.date} */}
                                    <CommentGroup />
                                </table>
                            </div>

                        </div>

                    </div>

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