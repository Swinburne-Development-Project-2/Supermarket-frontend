import React, { Component } from "react";
import "./Banner.css";
import InputBar from "./inputbar";
import SearchButton from "./SearchButton";

class Banner extends Component {
  render() {
    return (
      <div className="hero-image">
        <InputBar />
        <SearchButton />
      </div>
    );
  }
}

export default Banner;
