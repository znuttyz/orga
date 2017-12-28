import React from 'react';

const Nav = () => {

	return (
		<ul className="navigation">
			<li className="body-dropdown">
				<a>BATH & BODY</a>
				<div className="body-drop">
					<p>Body 1</p>
					<p>Body 2</p>
					<p>Body 3</p>
				</div>
			</li>
  			<li><a>LIPS BALM</a></li>
		</ul>
	);
}

export { Nav }

