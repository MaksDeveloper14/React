import React, {Component} from "react";

class TodoItems extends Component {
	constructor(props) {
		super(props);
		this.createTasks = this.createTasks.bind(this);
	}

	// Метод удаления
	delete(key) {
		this.props.delete(key);
	}
	
	// Создать задачи
	createTasks(item) {
		return <li key={item.key} onClick={ () => this.delete(item.key)}>{item.text }</li>
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);
		return (
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
};

export default TodoItems;