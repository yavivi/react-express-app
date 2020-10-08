// import React, { Component } from 'react';
// import Modal from 'react-awesome-modal';
// import './css/madol.css';
// import { Carousel } from 'react-bootstrap'


// export default class Examples extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visible: false
//         }
//     }

//     openModal() {
//         this.setState({
//             visible: true
//         });
//     }

//     closeModal() {
//         this.setState({
//             visible: false
//         });
//     }

//     render() {


//         return (
//             <section>
//                 {/* <input type="button" value="Open" onClick={() => this.openModal()} /> */}
//                 {/* <img src={this.props.src}  onClick={() => this.openModal()} /> */}
//                 <h5 className='clickOpen' onClick={() => this.openModal()}>{this.props.name} </h5>

//                 <Modal visible={this.state.visible} width="980" height="600" effect="fadeInUp" onClickAway={() => this.closeModal()}>
//                 {/* <a className="buttonClose" href="javascript:void(0);" onClick={() => this.closeModal()}>x</a> */}

//                     <div className="guideModal">


//                         <div className="userInformation">
//                             <div className="left">
//                                 {/* <img src={this.props.src} height="300px" width="300px" /> */}
//                                 <Carousel >

//                                     <Carousel.Item>
//                                         <img
//                                             src={this.props.src}
//                                             alt="EMEYE"
//                                             className="imgCarusel"
//                                         />
//                                         <div class="carousel-caption">
//                                             <h3 > {this.props.name + ' '}
//                                                 {'from' + ' ' + this.props.country}
//                                             </h3>
//                                             {/* <p>Third text</p> */}
//                                         </div>

//                                     </Carousel.Item>
//                                     <Carousel.Item>
//                                         <img
//                                             src={this.props.src}
//                                             alt="Third slide"
//                                             className="imgCarusel"

//                                         />
//                                         <div class="carousel-caption">
//                                             <h3 >Slight mask</h3>
//                                             {/* <p>Third text</p> */}
//                                         </div>
//                                     </Carousel.Item>
//                                     <Carousel.Item>
//                                         <img
//                                             src={this.props.src}
//                                             alt="Third slide"
//                                             className="imgCarusel"

//                                         />
//                                         <div class="carousel-caption">
//                                             <h3 >Slight mask</h3>
//                                             {/* <p>Third text</p> */}
//                                         </div>
//                                     </Carousel.Item>
//                                     <Carousel.Item>
//                                         <img
//                                             src={this.props.src}
//                                             className="imgCarusel"

//                                         />
//                                         <div class="carousel-caption">
//                                             <h3 >Slight mask</h3>
//                                             {/* <p>Third text</p> */}
//                                         </div>

//                                     </Carousel.Item>

//                                 </Carousel>

//                             </div>
//                             <div className="right">

//                                 <div>
//                                     {this.props.name + ' '}
//                                     {'from' + ' ' + this.props.country}
//                                 </div>
//                                 <div>
//                                     { this.props.com }
//                                 </div>

//                                 <p className="summary">

//                                     summary:{this.props.summary}

//                                 </p>
//                                 <ul className="imp">
//                                     <li>
//                                         {'the languge i know:' + ' ' + this.props.lang}
//                                     </li>
//                                     <li>
//                                         {'cost per day:' + ' ' + this.props.cost + '$'}
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="comments">
//                             <div className="addComment">
//                                 <h6>
//                                     enterComment:
//                                 </h6>
//                                 <textarea className="newComment" /><br />
//                                 <button type="button" class="btn btn-outline-primary">sendComment</button>

//                                 {/* <button className="addCommentBtn" type="button" value="sendComment"/> */}
//                             </div>
//                             <ul className="commentList">
//                                 <li className="comment">
//                                     amazing guide, avi the best guide ever!!!
//                                 </li>
//                             </ul>

//                         </div>


//                     </div>

//                 </Modal>
//             </section>
//         );
//     }
// }