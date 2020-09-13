import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

class TodoList extends Component {
	constructor(props) {
		// Вызываем конструктор родителя
		super(props);
		// Добавляем объект со свойством items (данные введенные пользователем)
		this.state = {
			items: []
		};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	// Метод обработчик добавления
	addItem(e) {
		var itemArray = this.state.items;
		if(this._inputElement.value!== "") {
			itemArray.unshift({
				text: this._inputElement.value,
				key: Date.now()
			});

			this.setState({
				items: itemArray
			});

			this._inputElement.value = "";
		}
		console.log(itemArray);
		e.preventDefault();
	}

	// Метод обработчик удаления
	deleteItem(key) {
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key!==key);
		});
		this.setState({
			items: filteredItems
		});
	}

	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input type="text" placeholder="Введите задачу" ref={ (a) => this._inputElement = a}></input>
						<button type="submit">Добавить</button>
					</form>
				</div>
				<TodoItems entries={this.state.items} delete={this.deleteItem}/>
			</div>	
		);
	}
}

export default TodoList;