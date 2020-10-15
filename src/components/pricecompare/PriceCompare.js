import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import Banner from "../banner/Banner";
import Pricetable from "../pricetable/Pricetable";
import SearchBar from '../search/SearchBar';

class PriceCompare extends Component {
	state = {
		priceData: {
			woolies: [],
			aldi: [],
		},
	}

	setPriceData = (data) => {
		this.setState({ priceData: data });
	}

	render() {
		const { priceData } = this.state;
		const { firstName, lastName } = this.props;
		return(
		    <div>
		    	<NavBar firstName={firstName} lastName={lastName} onLogOut={this.props.onLogOut}/>
		    	<Banner />
				<SearchBar handlePriceData={this.setPriceData} />
		        <Pricetable supermarket='woolies' data={priceData.woolies} />
		        <Pricetable supermarket='aldi' data={priceData.aldi} />
			</div>
		);
	}
}
export default PriceCompare;