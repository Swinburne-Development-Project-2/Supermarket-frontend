import React, { Component } from 'react';
import LogInForm from './components/login/LogInForm';
import SignUpForm from './components/signup/SignUpForm';
import Catalogue from './components/catalogue/Catalogue';
import NavBar from './components/navbar/NavBar';
import Axios from 'axios';
class App extends Component {
	state = {
		userLoggedIn: false,
		isOnSignUpPage: false,
		isOnLogInPage: true,
		email: '',
		role: '',
		shoppingCart: []
	}

	componentDidMount() {
		const email = localStorage.getItem('email');
		let role;
		if (email) {
			if (email === 'test.admin@hotmail.com') {
				role = 'admin';
			} else {
				role = 'customer'
			}
			this.setState({ 
				role,
				email, 
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

	redirectToHome = (email) => {
		console.log("test email ", email);
		let role;
		if (email === 'test.admin@hotmail.com') {
			role = 'admin';
		} else {
			role = 'customer'
		}
		this.setState({ 
			role,
			email, 
			userLoggedIn: true, 
			isOnLogInPage: false, 
			isOnSignUpPage: false 
		});
		localStorage.setItem('email', email);
	}

	redirectToSignUpPage = () => {
		localStorage.removeItem('email');
		this.setState({ 
			userLoggedIn: false, 
			isOnLogInPage: false, 
			isOnSignUpPage: true, 
		});
	}

	redirectToLogInPage = () => {
		localStorage.removeItem('email');
		this.setState({ 
			email: '',
			userLoggedIn: false, 
			isOnLogInPage: true, 
			isOnSignUpPage: false, 
		});
	}

	addProductToCart = (productName) => {
		const { email, shoppingCart } = this.state;
		console.log('test product name ', productName);
		console.log('test shoppingCart ', shoppingCart)
		if (shoppingCart.length === 0) {
			console.log("test empty cart");
			Axios.post('http://localhost:8080/cart', {
				email,
				productName,
				quantity: 1
			})
			.then((response) => {
				Axios.get(`http://localhost:8080/cart?email=${email}`)
					.then((res) => {
						console.log('test created a new cart ', res.data);
						this.setState({ shoppingCart: res.data});
					})
			})
			.catch((error) => console.log('Something went wrong. Please try again later: ', error));
		} else {
			Axios.put('http://localhost:8080/cart', {
				email,
				productName,
				quantity: 1
			})
			.then((response) => {
				Axios.get(`http://localhost:8080/cart?email=${email}`)
					.then((res) => {
						console.log('test add new item to cart ', res.data);
						this.setState({ shoppingCart: res.data});
					})
			})
			.catch((error) => console.log('Something went wrong. Please try again later: ', error));
		}
	}

	render() {
		const { 
			userLoggedIn, 
			email, 
			isOnSignUpPage, 
			isOnLogInPage,
			role,
		} = this.state;

		return(
			<div>
				{userLoggedIn && 
					<NavBar role={role} email={email} onLogOut={this.redirectToLogInPage}/>}
				{userLoggedIn && 
					<Catalogue 
						role={role}
						onLogOut={this.redirectToLogInPage}
						addProductToCart={this.addProductToCart}
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
