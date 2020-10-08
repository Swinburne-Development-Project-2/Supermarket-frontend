import React, { Component } from "react";
import styles from './SearchBar.module.css';
import axios from "axios";
import fakeData from '../../contract/frontend-backend-contract.json';

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
        console.log("test keyword search ", this.state.keyword);

        // Temporarily commented out, using fake data for now
        
        // axios.get(`http://localhost:3001/home/search/${this.state.keyword}`)
        //     .then(response => this.props.handlePriceData(response));

        this.props.handlePriceData(fakeData);
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
