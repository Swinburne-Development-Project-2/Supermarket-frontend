import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/banner";
import Pricetable from "./components/pricetable/Pricetable";
import Pricetable2 from "./components/pricetable/Pricetable2";
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
