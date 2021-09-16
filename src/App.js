import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import "./index.css";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress} />
        <Switch>
          {/* <Route path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route>
          <Route path="/about"><News setProgress={setProgress} apiKey={apiKey} key="about" pageSize={pageSize} country="in" category="about"/></Route> */}
          <Route path="/business"><News setProgress={setProgress} apiKey={apiKey} key="about" pageSize={pageSize} country="in" category="Business" /></Route>
          <Route path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="Entertainment" /></Route>
          <Route path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="General" /></Route>
          <Route path="/Sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="Sports" /></Route>
          <Route path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="Health" /></Route>
          <Route path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="Technology" /></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;