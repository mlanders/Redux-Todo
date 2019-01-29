import { SUBMIT_TODO, DELETE_TODO, UPDATE_COMPLETED } from '../actions';

const initialState = {
	todos: [
		{ id: 1, value: 'Walk the dog 1.', completed: false },
		{ id: 2, value: 'Walk the dog 2.', completed: false },
		{ id: 3, value: 'Walk the dog 3.', completed: false },
	],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SUBMIT_TODO:
			return { ...state, todos: [...state.todos, action.payload] };

		case DELETE_TODO:
			return { ...state, todos: action.payload };
		case UPDATE_COMPLETED:
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.payload
						? { ...todo, completed: !todo.completed }
						: todo
				),
			};
		default:
			return state;
	}
};
