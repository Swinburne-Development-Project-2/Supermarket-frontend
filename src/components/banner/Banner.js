import React, { Component } from "react";
import SearchBox from "../search/SearchBox";
import SearchButton from "../search/SearchButton";
import styles from './Banner.module.css';

class Banner extends Component {
  render() {
    return (
    	<div>
    		<div className={styles.banner}>
      		</div>
        	<SearchBox />
        	<SearchButton />
      	</div>
    );
  }
}

export default Banner;
