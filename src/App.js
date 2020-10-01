import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from "./components/banner";

class App extends Component {
	render(){
		return(
		    <React.Fragment>
		    	<NavBar/>
		    	<Banner/>
		    </React.Fragment>
		);
	}
}

export default App;
