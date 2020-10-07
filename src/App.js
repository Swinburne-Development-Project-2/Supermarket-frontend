import React, {Component} from 'react';
import './App.css';
import SearchButton from './components/SearchButton';
import NavBar from './components/NavBar';
import Banner from "./components/banner";
import Pricetable from "./components/Pricetable";
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
		    	{/* This part is for http get request
		    	<SearchButton/>
		    	{this.state.repos ? <p>Number of repos: {this.state.repos}</p> : <p>Please enter a name</p>}*/}
		    	<Banner />
		        <Pricetable logo='woolworthlogo' />
		        <Pricetable logo='aldilogo' />
		    </React.Fragment>
		);
	}
}
export default App;
