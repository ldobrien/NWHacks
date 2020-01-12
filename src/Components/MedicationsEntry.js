import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMedication } from "../store/actions/projectActions";

class MedicationsEntry extends Component {
    state = {
        name: null,
        price: 0,
        msp: 0,
        otherCoverage: 0,
        totalCost: this.props.medicationCosts.totalCost,
        totalToDate: this.props.medicationCosts.totalToDate,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var total = this.state.price - this.state.msp - this.state.otherCoverage;
        var totalToDate = total + this.state.totalToDate
        this.setState({
            totalCost: total,
            totalToDate: totalToDate
        })
        this.props.addMedication(this.state);
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        console.log(this.props.medicationCosts)
      return <div className="black-text">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Cost</h5>
            <div className="input-field">
                <label>Medication Name</label>
                <input type="text" id="name" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label>Price</label>
                <input type="number" id="price" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label>MSP Coverage</label>
                <input type="number" id="msp" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label>Other Coverage</label>
                <input type="number" id="otherCoverage" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn">Submit</button>
            </div>
        </form>
        <div className="black-text">
                <p>Total Cost of Entry: {this.state.totalCost}</p>
                <p>Total Cost to Date: {this.state.totalToDate}</p>
            </div>

        </div>
    }
  }

  const mapStatetoProps = (state) => {
    return {
        medicationCosts: state.project.medicationCosts
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        addMedication: (med) => dispatch(addMedication(med))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(MedicationsEntry)