import React from 'react';

const Title = ({name}) => {
	return (
		<div className="titleContainer">
			<div className="titleHeader">{name}</div>
			<div className="titleUnderline"></div>
		</div>
	);
}

export { Title }