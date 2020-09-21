import React,{ Component } from 'react';
import Searchs from '../comps/sreach'
// import CarousalPictures from '../compsPicture/picture1';
// import CarousalPictures2 from '../compsPicture/picture2';
// import CarousalPictures3 from '../compsPicture/picture3';

class Home extends Component{
    render(){
        return (
            <div>
                <Searchs></Searchs>
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