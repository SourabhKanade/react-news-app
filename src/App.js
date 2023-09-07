import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import "./index.css";
import LoadingBar from "react-top-loading-bar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              content="Business"
              country="in"
              category="Business"
            />
          }
        ></Route>
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              content="Entertainment"
              country="in"
              category="Entertainment"
            />
          }
        ></Route>
        <Route
          path="/politics"
          element={
            <News
              setProgress={setProgress}
              key="politics"
              content="Politics"
              country="in"
              category="Politics"
            />
          }
        ></Route>
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              key="sports"
              content="Sports"
              country="in"
              category="Sports"
            />
          }
        ></Route>
        <Route
          path="/health"
          element={
            <News
              setProgress={setProgress}
              key="health"
              content="Health"
              country="in"
              category="Health"
            />
          }
        ></Route>
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              key="technology"
              content="Technology"
              country="in"
              category="Technology"
            />
          }
        ></Route>
      </Routes>
    </>
  );
};
export default App;
