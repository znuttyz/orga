import React, { Component } from 'react';
import { Header, Title, Albumx3, Footer, Breadcrumb } from './elements';

class Product extends Component {

	render() {
		return (
			<div>
				<Header />

				<Breadcrumb />

				<div className="container">
					<Title name="BATH & BODY" />
					<p className="desc">We carefully selected only natural and organic product for our customer.</p>
				</div>

				<div className="container">
					<Albumx3 />
					<Albumx3 />
					<Albumx3 />					
				</div>
				<br/>
				<Footer />
			</div>
		);
	}
}

export default Product;