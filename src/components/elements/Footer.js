import React from 'react';

const Footer = () => {
	return (
		<div className="pageBreak">
			<div className="footer">

				<div className="footerContainer">
					<img src="./assets/img/logo2.png" width="130"/>
				</div>

				<div className="footerContainer">
					<div className="footerIcon">
						<a href="https://www.facebook.com/nuttapon.phannurat" target="_blank"><img src="./assets/img/icon/fb.jpeg"/></a>
					</div>
					<div className="footerIcon">
						<a href="https://www.instagram.com/znuttyz" target="_blank"><img src="./assets/img/icon/ig.jpeg"/></a>
					</div>

					<div className="footerIcon">
						<a href="mailto:n.phannurat@gmail.com"><img src="./assets/img/icon/mail.jpg"/></a>
					</div>
				</div>

				<div className="footerContainer">
					<ul className="footerNav">
						<li><a>CONTACT</a></li>
						<li><a>ABOUT</a></li>
						<li><a>TERMS</a></li>
						<li><a>PRIVACY</a></li>
					</ul>
				</div>

				<div className="footerContainer">
					<p>&copy; BONN Organic. All Rights Reserved.</p>
				</div>

			</div>
		</div>
	);
}

export { Footer }