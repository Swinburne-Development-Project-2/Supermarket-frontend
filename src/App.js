import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/banner";
import Pricetable from "./components/Pricetable";
import Pricetable2 from "./components/Pricetable2";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Banner />
        <Pricetable />
        <Pricetable2 />
      </React.Fragment>
    );
  }
}

export default App;
