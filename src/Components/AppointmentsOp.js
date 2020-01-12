import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { addAppointment } from "../store/actions/projectActions";

class AppointmentsOp extends Component {
    state ={
        time: "2020-01-12T13:30",
        location: null,
        // frequency: null,
    }

    handleChange = (e) => {
        this.setState({
            location: e.target.value,
        })
    }

    handleTimeChange = (e) => {
        this.setState({
            time: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addAppointment(this.state)
    }

  render() {
      let appts = []
      if(this.props.appointments){
        this.props.appointments.forEach(element => {
            appts.push(<div key={appts.length} className="black-text">
                <div className="card">
                    <div className="card-content">
                        <p>Location: {element.location}</p>
                        <p>Time:{element.time}</p>
                    </div>
                </div>
        </div>)
        })
      }
      return (
         <div>
             <form onSubmit={this.handleSubmit}>
                    <TextField
                        onChange={this.handleTimeChange}
                        id="datetime-local"
                        label="Next appointment"
                        type="datetime-local"
                        defaultValue="2020-01-12T13:30"
                        className="textField"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <input type="text" onChange={this.handleChange} name="Location" placeholder="Location"/>
                 <button className="btn" type="submit"> + Add Appointment</button>
                </form>
             <br />
             <br />
                {appts}
        </div>
  );
};
}

const mapStatetoProps = (state) => {
    return {
        appointments: state.project.appointments
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        addAppointment: (appt) => dispatch(addAppointment(appt))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AppointmentsOp);
