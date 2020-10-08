import React, { Component } from "react";
import styles from './SearchButton.module.css';

class SearchButton extends Component {
  render() {
    return (
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
    );
  }
}

export default SearchButton;
