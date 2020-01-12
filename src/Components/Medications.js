import React, { Component } from 'react';
import { connect } from "react-redux";

class Medications extends Component {

    
    render() {
      var medList = []
      if(this.props.medicationCosts) {
        this.props.medicationCosts.name.forEach(element => {
          medList.push(<div key={medList.length}>{element}</div>)
        });
      }

      return <div className="black-text">{medList}</div>;
    }
  }

const mapStatetoProps = (state) => {
    return {
        medicationCosts: state.project.medicationCosts
    }
}

export default connect(mapStatetoProps)(Medications)