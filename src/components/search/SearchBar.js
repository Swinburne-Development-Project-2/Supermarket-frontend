import React, { Component } from "react";
import styles from './SearchBar.module.css';
import axios from "axios";

class SearchBar extends Component {
    state = {
        keyword: '',
    }

    handleKeywordChange = event => {
        const keyword = event.target.value;
        this.setState({ keyword });
    }

    handleEnter = event => 
        event.keyCode === 13 && this.handleSearch(event);

    handleSearch = event => {
        event.preventDefault();
        let startTime = Date.now();
        axios
            .get(`http://localhost:3001/home/search/${this.state.keyword}`)
            .then(response => {
                this.props.handlePriceData(response.data);
                let endTime = Date.now();
                let timeDiff = endTime - startTime;
                const message = `End to end - Time taken from searching to getting results on the UI: ${timeDiff}ms`;
                axios.post(`http://localhost:3001/home/discord`, {
                    message
                });
            });
    }

    render() {
        return (
            <div>
                <input 
                    id="keyword" 
                    name="keyword" 
                    className={styles.searchBox} 
                    placeholder="i.e beef, pork, etc"
                    onChange={this.handleKeywordChange}
                    onKeyDown={this.handleEnter}
                />
                <button 
                    type="submit" 
                    className={styles.searchButton} 
                    onClick={this.handleSearch}
                >
                    Search
                </button>
            </div>
        );
    }
}

export default SearchBar;
