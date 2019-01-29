import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit_todo, delete_todo, update_completed } from './actions';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: {
				value: '',
				completed: false,
				id: '',
			},
		};
	}
	handleChange = e => {
		e.preventDefault();
		this.setState({
			todo: {
				...this.state.todo,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const newTodo = {
			id: Date.now(),
			value: this.state.todo.value,
			completed: false,
		};
		this.props.submit_todo(newTodo);
	};

	handleDelete = (e, id) => {
		e.preventDefault();
		let filtered = this.props.todos.filter(items => items.id !== id);
		this.props.delete_todo(filtered);
	};

	handleCompleted = (e, id) => {
		e.preventDefault();

		this.props.update_completed(id);
	};

	render() {
		return (
			<div className="App">
				<form>
					<input
						name="value"
						value={this.state.todo.value}
						placeholder="Todo"
						onChange={this.handleChange}
					/>
					<button onClick={e => this.handleSubmit(e)}>Submit</button>
				</form>
				<Todos
					handleCompleted={this.handleCompleted}
					handleDelete={this.handleDelete}
					todos={this.props.todos}
				/>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		todos: state.todos,
	};
};

export default connect(
	mapStateToProps,
	{ submit_todo, delete_todo, update_completed }
)(App);
