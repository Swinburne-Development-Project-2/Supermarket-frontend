import React, { Component } from 'react';
import ProductTable from "../productTable/ProductTable";
import './Catalogue.css';
import fakeData from './catalogue.json';

class Catalogue extends Component {
	state = {
		products: fakeData.products
	}

	setPriceData = (data) => {
		this.setState({ priceData: data });
	}

	render() {
		const { products } = this.state;
		const { role } = this.props;
		return(
		    <div>
				<div class="pb-2 mt-4 mb-2 catalogue-title-page">
					Catalogue
				</div>
				<ProductTable addProductToCart={this.props.addProductToCart} data={products} role={role} />
			</div>
		);
	}
}
export default Catalogue;