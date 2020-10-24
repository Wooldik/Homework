import React, { Component } from 'react';
import Button from './components/Button'
export default class App extends Component {
	// state = {

	// }


	render() {
		return (<>
			<h1></h1>
			<input type="text"></input>
			<Button />
		</>)
	}
}

// 1. Создать инпут (текст)
// 2. Создать кнопку (отдельный компонент (отдельный джс файл))
// 3. Когда пишем текст в инпуте, этот текст появляется на названии кнопки
// 4. При нажатии на кнопку в главном компоненте должен появится <h1></h1> с текстом взятым из кнопки


