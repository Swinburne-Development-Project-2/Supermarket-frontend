import React, { Component } from "react";
import "./Banner.css";
import InputBar from "./inputbar";
import SearchButton from "./SearchButton";
class Banner extends Component {
  render() {
    return (
      <div className="hero-image">
        <div>
          <div>
            <InputBar />
            <SearchButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
