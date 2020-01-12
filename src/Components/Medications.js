import React, { Component } from 'react';
import { connect } from "react-redux";
import './Medications.css'

class Medications extends Component {

    render() {
      var medList = []
      if(this.props.medicationCosts) {
        this.props.medicationCosts.name.forEach(element => {
          medList.push(<div id="medList" key={medList.length }><h5 id="element">{element}</h5></div>)
        });
      }

      return <div>{medList}</div>;
    }
  }

const mapStatetoProps = (state) => {
    return {
        medicationCosts: state.project.medicationCosts
    }
}

export default connect(mapStatetoProps)(Medications)