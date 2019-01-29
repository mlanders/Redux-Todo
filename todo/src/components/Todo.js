import React from 'react';

function Todo(props) {
	return (
		<h1
			onClick={e => props.handleCompleted(e, props.todo.id)}
			className={props.todo.completed ? 'completed' : null}>
			{props.todo.value}
		</h1>
	);
}

export default Todo;
