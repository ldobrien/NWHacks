import React, { Component } from 'react';

class Calendar extends Component {
  
    render() {
      console.log("Calendar")
      return(<div><div className="black-text">
        <h4 >Calendar</h4>
        </div>
        <div className="janCalendar-image">
            <img src={require("../images/janCalendar.png")} alt={"Icon"}/>
             </div>
        </div>
        );
    }
  }

  export default Calendar;