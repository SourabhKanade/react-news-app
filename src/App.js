import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Switch>
          {/* <Route path="/general"><News key="general" News pageSize={9} country="in" category="general"/></Route>
          <Route path="/about"><News key="about" News pageSize={9} country="in" category="General"/></Route> */}
          <Route path="/business"><News key="about" News pageSize={9} country="in" category="Business"/></Route>
          <Route path="/entertainment"><News key="entertainment" News pageSize={9} country="in" category="Entertainment"/></Route>
          <Route path="/general"><News key="general" News pageSize={9} country="in" category="General"/></Route>
          <Route path="/Sports"><News key="Sports" News pageSize={9} country="in" category="Sports"/></Route>
          <Route path="/health"><News key="health" News pageSize={9} country="in" category="Health"/></Route>
          <Route path="/technology"><News key="technology" News pageSize={9} country="in" category="Technology"/></Route>
          </Switch>
      </Router>
    </div>
    );
}