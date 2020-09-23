import React, { Component } from 'react';
import Search from '../../comps/Search'

// import CarousalPictures from '../compsPicture/picture1';
// import CarousalPictures2 from '../compsPicture/picture2';
// import CarousalPictures3 from '../compsPicture/picture3';

class Home extends Component {
    state = {
        firstName: '',
        email: ''
    }
    render() {
        return (
            <div>
                <div className="title">
                    let's Tour Together
                </div>
                <Search />
                {/* <div className="pic">
                    {/* <CarousalPictures></CarousalPictures>
                    <CarousalPictures2></CarousalPictures2>
                    <CarousalPictures3></CarousalPictures3> */}
                {/* </div> */}
            </div>
        );
    };
};
export default Home;