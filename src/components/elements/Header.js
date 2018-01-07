import React from 'react';
import { Nav, Nav2 } from './';

const Header = () => {

	return (
		<div className="headerContainer">
			<div className="headerBox">
				<Nav/>
			</div>
			<div className="headerBox">
				<a href="/"><img src="./assets/img/bonn-logo.png" alt="logo" style={{height: '75px', paddingTop: '6px', cursor: 'pointer'}}/></a>
			</div>
			<div className="headerBox">
				<Nav2/>
			</div>
		</div>
	);
}

export { Header };