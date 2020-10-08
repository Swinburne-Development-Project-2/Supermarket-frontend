import React, {Component} from 'react';
import styles from './SearchBar.module.css';
import axios from "axios";

class SearchBar extends Component{
	state = {
		keyword: '',
	}

	handleKeywordChange = event => {
		const keyword = event.target.value;
		this.setState({keyword});
	}

	handleEnter = event => {
		event.keyCode == 13 && this.handleSearch(event);
	}

	handleSearch = event => {
		// Axios http get request
		event.preventDefault();
		// Request for data from the database with an entered keyword
		axios.get(`https://localhost:3001/home/search/${this.state.keyword}`)
		// with the response from database, call props to pass the response (will be used to set the state in App.js)
			.then(response => this.props.handlePriceData(response));
	}

	render(){
		return(
			<div>
				<input
					id="keyword"
					name="keyword"
					className={styles.searchBox}
					placeholder="i.e beef, pork, etc"
					onChange={this.handleKeywordChange}
					onKeyDown={this.handleEnter}
				/>
				<button type="submit" className={styles.searchButton} onclick={this.handleSearch}>
					Search
				</button>
			</div>
		);
	}
}

export default SearchBar;