import React, { Component } from 'react';

class Medications extends Component {
    state = {
        name: null,
        price: null,
        msp: null,
        otherCoverage: null,
        totalCost: 0,
        totalToDate: 0,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state) // TODO
        // this.props.signIn(this.state);
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
                <input type="text" id="price" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label>MSP Coverage</label>
                <input type="text" id="msp" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label>Other Coverage</label>
                <input type="text" id="otherCoverage" onChange={this.handleChange}/>
            </div>
        </form>
        <div>
                <p>Total Cost: {this.state.totalCost}</p>
                <p>Total Cost to Date: {this.state.totalToDate}</p>
            </div>

        </div>
    }
  }

  export default Medications;