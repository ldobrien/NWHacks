import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'


class MedicationsOp extends Component {
  constructor() {
    super();
    this.state = {
      formVisible: false,
      medicationVisible: false
    };
    this.showForm = this.showForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showForm() {
    this.setState( state => (this.state.formVisible = true))
  }

  handleSubmit(){
    this.setState( state => (this.state.medicationVisible = true))
  }

  render() {
    let meds = [];
    return (
        <div>
          <form onSubmit={
            meds.push()
          } className="white">
            <div className="input-field">
              <label>Medication Name</label>
              <input type="text" id="name" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label>Start Date</label>
              <input type="text" id="price" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label>End Date</label>
              <input type="text" id="msp" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label>Frequency</label>
              <input type="text" id="otherCoverage" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn" onClick={this.showForm}>+ Add Medication</button>
            </div>
          </form>
        </div>

    );
};
  }

  export default MedicationsOp;

