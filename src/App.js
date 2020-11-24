import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/about";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Portfolio from "./Components/portfolio";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path={["/", "/about"]} component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
