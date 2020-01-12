import React, { Component } from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import './Medications.css'

class Medications extends Component {

    render() {
      var medList = []
      if(this.props.medicationCosts) {
        this.props.medicationCosts.name.forEach(element => {
          medList.push(<div id="medList" key={medList.length }>
              <div className="card">
                  <Box display="flex" alignItems="center">
                      <LocalPharmacyIcon/>
                      <LocalPharmacyIcon color="disabled" fontSize="large"/>
                      <LocalPharmacyIcon/>
                      <div className="card-content">
                          <h6 style={{color: "black"}} id="element">{element}</h6>
                      </div>
                  </Box>
              </div>
          </div>)
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
