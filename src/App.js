import React, {Component} from 'react';
import NavBar from './components/navbar/NavBar';
import Banner from "./components/banner/Banner";
import Pricetable from "./components/pricetable/Pricetable";
import axios from "axios";

class App extends Component {
	state = {
		repos: null
	}
	getFood = (e) => {
			e.preventDefault();
			const food = e.target.elements.foodName.value;
			if (food){
				axios.get(`https://api.github.com/users/${food}`)
				.then((res) => {
					const repos = res.data.public_repos;
					this.setState({repos: repos});
				})
			}
			else return;
	}
	render(){
		return(
		    <React.Fragment>
		    	<NavBar getFood={this.getFood}/>
		    	<Banner />
		        <Pricetable supermarket='woolies' />
		        <Pricetable supermarket='aldi' />
		    </React.Fragment>
		);
	}
}
export default App;
