// import React from 'react';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import "./index.css";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 9
  
  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render(){
  return (
    <div>
    <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress} />
      <Switch>
          {/* <Route path="/general"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
          <Route path="/about"><News setProgress={this.setProgress} key="about" pageSize={this.pageSize} country="in" category="General"/></Route> */}
          <Route path="/business"><News setProgress={this.setProgress} key="about" pageSize={this.pageSize} country="in" category="Business"/></Route>
          <Route path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/></Route>
          <Route path="/general"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="General"/></Route>
          <Route path="/Sports"><News setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country="in" category="Sports"/></Route>
          <Route path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="Health"/></Route>
          <Route path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="Technology"/></Route>
          </Switch>
      </Router>
    </div>
    );
   }
}