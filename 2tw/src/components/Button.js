import { computeHeadingLevel } from '@testing-library/react';
import React, { Component } from 'react';

export default class Button extends Component {

	render() {
		return (<>
			<button onClick={() => {
				this.props.btnTextClick(this.props.textValue);
			}}>{this.props.textValue === '' ? "Click" : this.props.textValue}</button>
		</>)
	}
}