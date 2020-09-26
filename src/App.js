import React, {Component} from 'react';
import './App.css';
import SearchButton from './components/SearchButton';
import NavBar from './components/NavBar';

class App extends Component {
	render(){
		return(
		    <React.Fragment>
		    	<NavBar/>
		    	<SearchButton/>
		    </React.Fragment>
		);
	}
}

export default App;
