import React, { Component } from "react";
import "./Banner.css";
import InputBar from "./inputbar";
import SearchButton from "./SearchButton";

class Banner extends Component {
  render() {
    return (
    	<div>
    		<div className="hero-image">
      		</div>
        	<InputBar />
        	<SearchButton />
      	</div>
    );
  }
}

export default Banner;
