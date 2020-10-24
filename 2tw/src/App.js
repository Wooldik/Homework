import React, { Component } from 'react';
import Button from './components/Button'
export default class App extends Component {
	state = {
		isHeaderShown: false,
		header: '',
		inputValue: ''
	}

	textInput = ({ target }) => {
		this.setState({
			inputValue: target.value
		})

	}
	onButton = () => {
		this.setState({
			isHeaderShown: !this.isHeaderShown
		})
	}

	textButton = (text) => {
		this.setState({
			header: text
		})
	}


	render() {
		return (<>
			<h1>{this.state.header}</h1>
			<input type="text" onChange={this.textInput}></input>
			<Button btnTextClick={this.textButton} textValue={this.state.inputValue} />
		</>)
	}
}

// 1. Создать инпут (текст)
// 2. Создать кнопку (отдельный компонент (отдельный джс файл))
// 3. Когда пишем текст в инпуте, этот текст появляется на названии кнопки
// 4. При нажатии на кнопку в главном компоненте должен появится <h1></h1> с текстом взятым из кнопки


