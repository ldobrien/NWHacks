import React, { Component } from 'react';
import { addPhysio } from "../store/actions/projectActions";
import { connect } from "react-redux";

class Physio extends Component {
    state = {
        name: null,
        price: 0,
        msp: 0,
        otherCoverage: 0,
        totalCost: 0,
        totalToDate: this.props.physio.totalCost || 0,
        sessions: 0,
        totalSessions: this.props.physio.totalSessions || 0,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var total = this.state.price - this.state.msp - this.state.otherCoverage;
        var totalToDate = total + this.state.totalToDate;
        var totalSess = Number(this.state.totalSessions) + Number(this.state.sessions);
        this.setState({
            totalCost: total,
            totalToDate: totalToDate,
            totalSessions: totalSess
        })
        this.props.addPhysio({totalCost: totalToDate, totalSessions: totalSess})
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
      return <div className="black-text">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Cost</h5>
            <div className="input-field">
                <input type="text" id="name" onChange={this.handleChange} placeholder="Physiotherapist Name"/>
            </div>
            <div className="input-field">
                <input type="number" id="price" onChange={this.handleChange} placeholder="Price"/>
            </div>
            <div className="input-field">
                <input type="number" id="msp" onChange={this.handleChange} placeholder="MSP Coverage"/>
            </div>
            <div className="input-field">
                <input type="number" id="otherCoverage" onChange={this.handleChange} placeholder="Other Coverage"/>
            </div>
            <div className="input-field">
                <input type="number" id="sessions" onChange={this.handleChange} placeholder="Number of Sessions"/>
            </div>
            <div className="input-field">
                <button className="btn">Submit</button>
            </div>
        </form>
        <div>
                <p>Total Cost of Entry: {this.state.totalCost}</p>
                <p>Total Cost to Date: {this.state.totalToDate}</p>
                <p>Total Number of Sessions: {this.state.totalSessions}</p>
            </div>

        </div>
    }
  }

  const mapStatetoProps = (state) => {
    return {
        physio: state.project.physio
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        addPhysio: (med) => dispatch(addPhysio(med))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Physio)
//   export default Physio;
