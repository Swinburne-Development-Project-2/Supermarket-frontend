import React, { Component } from 'react';
import ProductTable from "../productTable/ProductTable";
import './Catalogue.css';
import fakeData from './catalogue.json';
import Axios from 'axios';

class Catalogue extends Component {
	state = {
		productAddedToCart: [],
		catalogueData: '',
	}

	componentDidMount() {
		this.getCatalogueData();
	}

	addToCart = (productName) => {
		let productAddedToCart = [...this.state.productAddedToCart];
		productAddedToCart.push(productName);
		this.setState({ productAddedToCart });
		this.props.addProductToCart(productName);
	}

	getCatalogueData = () => {
		Axios.get('http://localhost:8080/catalogue')
			.then((response) => {
				const catalogueData = response.data;
				console.log('test get catalogue data ', catalogueData);
				this.setState({ catalogueData });
			})
			.catch((error) => console.log('Something went wrong. Please try again later: ', error));
	}

	render() {
		const { productAddedToCart, catalogueData } = this.state;
		const { role } = this.props;
		return(
		    <div>
				<div class="pb-2 mt-4 mb-2 catalogue-title-page">
					Catalogue
				</div>
				<ProductTable
					addProductToCart={this.addToCart}
					addedProducts={productAddedToCart}
					data={catalogueData.products}
					role={role}
				/>
				<div className="toCheckOut">
                	<button onClick={this.props.onCheckoutClick} type="submit" className="btn btn-primary">Check out</button>
            	</div>
			</div>
		);
	}
}
export default Catalogue;