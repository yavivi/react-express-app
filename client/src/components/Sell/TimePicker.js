// import React, { Component } from 'react'
// import Timepicker from 'react-timepicker';
// import 'react-datepicker/dist/react-datepicker.css';


// class Time extends Component {
//     constructor() {
//         super()
//         this.state = {

//             time: "",
//         }
//     }

//     componentDidMount() {
//         document.addEventListener('DOMContentLoaded', ()=> {
//             var elems = document.querySelectorAll('.timepicker');
//             var instances = M.Timepicker.init(elems, options);
//           });
//     }
//     render() {
//         return (
//             <div className="row">
//                 <div className="input-filed col s12">
//                 <input type="text" class="timepicker"/>
//                     <label htmlFor="time" className="active">
//                         Time
//                     </label>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Time
import React, { useState } from "react";
import { KeyboardTimePicker } from "@material-ui/pickers";

function KeyboardTimePickerExample() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <KeyboardTimePicker
      label="Masked timepicker"
      placeholder="08:00 AM"
      mask="__:__ _M"
      value={selectedDate}
      onChange={date => handleDateChange(date)}
    />
  );
}

export default KeyboardTimePickerExample;
