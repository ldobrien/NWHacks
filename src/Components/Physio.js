import React, { Component } from 'react';

class Physio extends Component {
    state = {
        name: null,
        price: 0,
        msp: 0,
        otherCoverage: 0,
        totalCost: 0,
        totalToDate: 0,
        sessions: 0,
        totalSessions: 0,
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
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
      return <div>
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
                <label>Number of Sessions</label>
                <input type="number" id="sessions" onChange={this.handleChange}/>
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

  export default Physio;