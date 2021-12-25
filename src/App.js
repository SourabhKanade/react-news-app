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
          <Route path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" content="Business" pageSize={pageSize} country="in" category="business" /></Route>
          <Route path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" content="Entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" content="General" pageSize={pageSize} country="in" category="general" /></Route>
          <Route path="/Sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" content="Sports" pageSize={pageSize} country="in" category="sports" /></Route>
          <Route path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" content="Health" pageSize={pageSize} country="in" category="health" /></Route>
          <Route path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" content="Technology" pageSize={pageSize} country="in" category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;