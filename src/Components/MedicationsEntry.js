import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMedication } from "../store/actions/projectActions";

class MedicationsEntry extends Component {
    state = {
        name: null,
        price: 0,
        msp: 0,
        otherCoverage: 0,
        totalCost: this.props.medicationCosts.totalCost || 0,
        totalToDate: this.props.medicationCosts.totalToDate || 0,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var total = this.state.price - this.state.msp - this.state.otherCoverage;
        var totalToDate = total + this.state.totalToDate
        console.log(this.state)
        console.log("total ",total)
        this.setState({
            totalCost: total,
            totalToDate: totalToDate
        })
        this.props.addMedication({name: this.state.name, totalCost: total, totalToDate});
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
                <input type="text" id="name" onChange={this.handleChange} placeholder="Medication Name"/>
            </div>
            <div className="input-field">
                <input type="number" id="price" onChange={this.handleChange} placeholder="Price"/>
            </div>
            <div className="input-field">
                <input type="number" id="msp" onChange={this.handleChange} placeholder= "MSP Coverage"/>
            </div>
            <div className="input-field">
                <input type="number" id="otherCoverage" onChange={this.handleChange} placeholder="Other Coverage"/>
            </div>
            <div className="input-field">
                <button className="btn">Submit</button>
            </div>
        </form>
        <div className="black-text">
                <p>Total Cost of Entry: {this.props.medicationCosts.totalCost}</p>
                <p>Total Cost to Date: {this.props.medicationCosts.totalToDate}</p>
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
