import React, { Component } from 'react';
import Home from './Components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Preop from './Components/Preop';
import Postop from './Components/Postop';
import Insurance from './Components/Insurance';
import Personal from './Components/Personal';
import Login from './Components/Login';
import Medications from './Components/Medications';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          {/* <Route exact path="/" component={Home}/>
          <Route exact path="/preop" component={Preop}/>
          <Route exact path="/postop" component={Postop} />
          <Route exact path="/insurance" component={Insurance} />
          <Route exact path="/personal" component={Personal} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/medications" component={Medications} /> */}
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
