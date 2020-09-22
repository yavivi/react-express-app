import React from 'react';

// class SellTickets extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         username: '',
//         age: null,
//       };
//     }
//     myChangeHandler = (event) => {
//       let nam = event.target.name;
//       let val = event.target.value;
//       if (nam === "age") {
//         if (!Number(val)) {
//           alert("Your age must be a number");
//         }
//       }
//       this.setState({[nam]: val});
//     }
//     render() {
//       return (
//         <form>
//         <h1>Hello {this.state.username} {this.state.age}</h1>
//         <p>Enter your name:</p>
//         <input
//           type='text'
//           name='username'
//           onChange={this.myChangeHandler}
//         />
//         <p>Enter your age:</p>
//         <input
//           type='text'
//           name='age'
//           onChange={this.myChangeHandler}
//         />
//         </form>
//       );
//     }
//   }
  

function SellTickets() {

    // <form >
    //     <h1 Sell Tickets></h1>
    //     <label>Category </label>
    //     <input> </input>
    // </form>
    return (
        <form action="" method="" >
            <h1>Sell Tickets</h1>


            <p>Category</p>
            <input
                type="text"
            />

            <p>Event Name</p>
            <input
                type="text"
            />

            <p>Description (optional)</p>
            <input
                type="text"
            />

            <p>Location</p>
            <input
                type="text"
            />

            <p>Location</p>
            <input
                type="text"
            />

            <p>Select Date</p>
            <input
                type="text"
            />

            <p>Select Hour</p>
            <input
                type="text"
            />

            <p>How much you want to get paid per ticket?</p>
            <input
                type="text"
            />

            <p>Number of Tickets</p>
            <input
                type="text"
            />
            <br />
            <br />
            <input type='submit' value='Publish Now'/>

            {/* <button type="submit" value="Submit">Submit</button> </br> */}
        </form >
    )


}

export default SellTickets;