import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import { connect } from "react-redux";
import { addMedOp } from "../store/actions/projectActions";
import TextField from '@material-ui/core/TextField';

class MedicationsOp extends Component {
  state = {
    name: null,
    startDate: "2017-05-24T10:30",
    endDate: "2017-05-24T10:30",
    frequency: null,
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value,
    })
  }

  handleStartTimeChange = (e) => {
    this.setState({
      startDate: e.target.value,
    })
  }

  handleEndTimeChange = (e) => {
    this.setState({
      endDate: e.target.value,
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addMedOp(this.state)
  }

  render() {
    let meds = [];
    if(this.props.medications){
      this.props.medications.forEach(elem => {
        meds.push(<div className="black-text" key={meds.length}>
        <p>Name: {elem.name}</p>
        <p>Start Date: {elem.startDate}</p>
        <p>End Date: {elem.endDate}</p>
        <p>Frequency: {elem.frequency}</p>
        </div>)
      })
    }
    return (
        <div>
          <form onSubmit={this.handleSubmit} className="white">
            <div className="input-field">
              <label>Medication Name</label>
              <input type="text" id="name" onChange={this.handleChange}/>
            </div>
            <TextField
                onChange={this.handleStartTimeChange}
                id="datetime-local"
                label="Start Date"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className="textField"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                onChange={this.handleEndTimeChange}
                id="datetime-local"
                label="End Date"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className="textField"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <div className="input-field">
              <label>Frequency</label>
              <input type="text" id="frequency" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn" onClick={this.handleSubmit}>+ Add Medication</button>
            </div>
          </form>
          {meds}
        </div>

    );
};
  }
  const mapStatetoProps = (state) => {
    return {
      medications: state.project.medications
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        addMedOp: (exercise) => dispatch(addMedOp(exercise))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(MedicationsOp);


