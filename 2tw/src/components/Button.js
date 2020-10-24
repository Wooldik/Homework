import { computeHeadingLevel } from '@testing-library/react';
import React, { Component } from 'react';

export default class Button extends Component {
	state = {
		textButton: `${this.props.textValue}`
	}


	render() {
		return (<>
			<button onClick={() => {
				this.props.btnTextClick(this.state.textButton)
			}}>{this.props.textValue === '' ? "Click" : this.props.textValue}</button>
		</>)
	}
}