import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { addAppointment } from "../store/actions/projectActions";

class PhysioOp extends Component {
    state ={
        time: "2017-05-24T10:30",
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
            <p>Location: {element.location}</p>
            <p>Time:{element.time}</p>
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
                        defaultValue="2017-05-24T10:30"
                        className="textField"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <input type="text" onChange={this.handleChange} name="Location" placeholder="Location"/>
                    <button type="submit"> Add </button>
                </form>
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
export default connect(mapStatetoProps, mapDispatchtoProps)(PhysioOp);
  