import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'

class Personal extends Component {
    render() {
      return (
          <div>
              <h1>Personal</h1>
              <div className="row">
                  <div className="col s12 m7">
                      <div className="card">
                          <div className="card-image">
                              <img src="src/images/female.png" alt={"Test"}></img>
                          </div>
                          <div className="card-content">
                              <p>Client Name</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
    }
  }

  export default Personal;