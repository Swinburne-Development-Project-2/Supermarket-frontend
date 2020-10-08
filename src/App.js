import React, { Component } from 'react';
import LogInPage from './components/login/LogInPage';
import SignUpPage from './components/signup/SignUpPage';
import PriceCompare from './components/pricecompare/PriceCompare';
import { 
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

class App extends Component {
	render() {
		return(
		    <Router>
				<div>
					<Switch>
						<Route path="/home">
							<PriceCompare />
						</Route>
						<Route path="/signup">
							<SignUpPage />
						</Route>
						<Route path="/">
							<LogInPage />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}
export default App;
