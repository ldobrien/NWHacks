import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './home.css'

class HomeScreen extends Component {
  defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '5rem', height: '5rem' },
  borderColor: 'text.primary',
};
  render() {
      return (
         <div id="homebox" className="black-text">
                <p>Total Cost of Entry: </p>
                <p>Total Cost to Date:</p>
        </div>
  );
};
  }

  export default HomeScreen;

  