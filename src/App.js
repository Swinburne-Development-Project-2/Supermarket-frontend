import React, { Component } from 'react';
import LogInForm from './components/login/LogInForm';
import SignUpForm from './components/signup/SignUpForm';
import PriceCompare from './components/pricecompare/PriceCompare';

class App extends Component {
	state = {
		userLoggedIn: false,
		isOnSignUpPage: false,
		isOnLogInPage: true,
		firstName: '',
		lastName: '',
	}

	componentDidMount() {
		const firstName = localStorage.getItem('firstName');
		const lastName = localStorage.getItem('lastName');
		if (firstName && lastName) {
			this.setState({ 
				firstName, 
				lastName, 
				userLoggedIn: true, 
				isOnLogInPage: false, 
				isOnSignUpPage: false 
			});
		} else {
			this.setState({ 
				userLoggedIn: false, 
				isOnLogInPage: true, 
				isOnSignUpPage: false 
			});
		}
	}

	redirectToHome = (firstName, lastName) => {
		this.setState({ 
			firstName, 
			lastName, 
			userLoggedIn: true, 
			isOnLogInPage: false, 
			isOnSignUpPage: false 
		});
		localStorage.setItem('firstName', firstName);
		localStorage.setItem('lastName', lastName);
	}

	redirectToSignUpPage = () => {
		localStorage.removeItem('firstName');
		localStorage.removeItem('lastName');
		this.setState({ 
			userLoggedIn: false, 
			isOnLogInPage: false, 
			isOnSignUpPage: true, 
		});
	}

	redirectToLogInPage = () => {
		localStorage.removeItem('firstName');
		localStorage.removeItem('lastName');
		this.setState({ 
			firstName: '',
			lastName: '',
			userLoggedIn: false, 
			isOnLogInPage: true, 
			isOnSignUpPage: false, 
		});
	}

	render() {
		const { 
			userLoggedIn, 
			firstName, 
			lastName, 
			isOnSignUpPage, 
			isOnLogInPage 
		} = this.state;

		return(
			<div>
				{userLoggedIn && 
					<PriceCompare 
						firstName={firstName}
						lastName={lastName} 
						onLogOut={this.redirectToLogInPage}
						/>}
				{isOnSignUpPage && 
					<SignUpForm 
						redirectToHome={this.redirectToHome}
						redirectToLogInPage={this.redirectToLogInPage}
					/>}
				{isOnLogInPage && 
					<LogInForm 
						redirectToHome={this.redirectToHome} 
						redirectToSignUpPage={this.redirectToSignUpPage}
					/>}
			</div>
		);
	}
}
export default App;
