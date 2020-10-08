import React, { Component } from "react";
import styles from './SearchBox.module.css';

class SearchBox extends Component {
  render() {
    return (
      <input type="text" id="fname" name="fname" className={styles.searchBox}></input>
    );
  }
}

export default SearchBox;
