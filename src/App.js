import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "../src/components/about";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Portfolio from "./components/portfolio";

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
