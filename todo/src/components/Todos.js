import React from 'react';
import Todo from './Todo';

function Todos(props) {
	return props.todos.map(todo => (
		<div className="todoRow">
			<Todo
				handleCompleted={props.handleCompleted}
				key={todo.id}
				todo={todo}
			/>
			<button onClick={e => props.handleDelete(e, todo.id)}>
				Delete
			</button>
		</div>
	));
}

export default Todos;
