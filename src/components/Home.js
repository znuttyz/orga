import React, { Component } from 'react';
import { Banner, Title, Albumx3, Albumx4, Footer, Header } from './elements';

class Home extends Component {


	render() {
		return (
			<div>

				<Header />

				<Banner source="./assets/img/banner1.jpg"/>

				<div className="container">
					<Title name="Our Products" />
					<p className="desc">We care about our ingredients. We source only the finest Organic and Fair Trade Certified Ingredients to formulate our products. Not only are they better for you, they are better for the people producing them and the planet we live on.</p>
				</div>

				<div className="container">
					<Albumx3 />
				</div>

				<div className="container">
					<Title name="BONN Moments" />
					<p className="desc">Follow us on&nbsp;
						<a className="socialLink" target="_blank" href="www.instagram.com/znuttyz">Instagram</a> and&nbsp;
						<a className="socialLink" target="_blank" href="www.facebook.com/nuttapon.phannurat">Facebook</a>
					</p>
				</div>

				<div className="container">
					<Albumx4 />
				</div>

				<Footer />

			</div>
		);
	}
}

export default Home;

// <h1 className="logoHeader">BONN ORGANIC.</h1>
// <img src="./assets/img/logo1.png" alt="logo" style={{height: '90px'}}/>
// <img src="./assets/img/logo2.png" alt="logo" style={{height: '60px', paddingTop: '13px'}}/>
// <img src="./assets/img/bonn-logo2.png" alt="logo" style={{height: '75px', paddingTop: '8px'}}/>