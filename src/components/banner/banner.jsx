import React, { Component } from "react";
import "./Banner.css";
import SearchBox from "../SearchBar/SearchBox";
import SearchButton from "../SearchBar/SearchButton";

class Banner extends Component {
  render() {
    return (
      <div className="hero-image">
        <SearchBox />
        <SearchButton />
      </div>
    );
  }
}

export default Banner;
