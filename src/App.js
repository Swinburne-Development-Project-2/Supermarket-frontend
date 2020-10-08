import React, {Component} from 'react';
import NavBar from './components/navbar/NavBar';
import Banner from "./components/banner/Banner";
import Pricetable from "./components/pricetable/Pricetable";
import SearchBar from './components/search/SearchBar';

class App extends Component {
	state = {
		priceData: {
			woolies: [],
			aldi: [],
		},
	}

	setPriceData = (data) => {
		this.setState({ priceData: data });
	}

	render(){
		const { priceData } = this.state;
		return(
		    <React.Fragment>
		    	<NavBar getFood={this.getFood}/>
		    	<Banner />
				<SearchBar handlePriceData={this.setPriceData} />
		        <Pricetable supermarket='woolies' data={priceData.woolies} />
		        <Pricetable supermarket='aldi' data={priceData.aldi} />
		    </React.Fragment>
		);
	}
}
export default App;
