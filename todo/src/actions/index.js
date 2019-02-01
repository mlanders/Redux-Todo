export const SUBMIT_TODO = 'SUBMIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_COMPLETED = 'UPDATE_COMPLETED';

export const submit_todo = payload => {
	return {
		type: SUBMIT_TODO,
		payload,
	};
};

export const delete_todo = payload => {
	return {
		type: DELETE_TODO,
		payload,
	};
};

export const update_completed = payload => {
	return {
		type: UPDATE_COMPLETED,
		payload,
	};
};
