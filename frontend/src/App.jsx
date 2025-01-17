import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import { Todos } from './components/Todos';

const App = () => {
	const url = 'http://localhost:3000/api/files';

	const [todos, setTodos] = useState([]);

	const getTodos = async () => {
		const response = await fetch(url + '/canciones');
		const todos = await response.json();
		setTodos(todos);
	};

	useEffect(() => {
		getTodos();
	}, []);

	const addTodo = async (title) => {
		const response = await fetch(url + '/canciones', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title }),
		});
		const todo = await response.json();
		setTodos([...todos, todo]);
	};

	const removeTodo = async (id) => {
		const response = await fetch(`${url}/canciones/${id}`, {
			method: 'DELETE',
		});
		if (response.status !== 200) {
			return alert('Something went wrong');
		}
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const updateTodo = async (id) => {
		const response = await fetch(`${url}/canciones/${id}`, {
			method: 'PUT',
		});
		if (response.status !== 200) {
			return alert('Something went wrong');
		}
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.done = !todo.done;
				}
				return todo;
			})
		);
	};

	return (
		<div className="container">
			<h1 className="">E-Sueño</h1>
			<TodoForm addTodo={addTodo} />
			<Todos
				todos={todos}
				removeTodo={removeTodo}
				updateTodo={updateTodo}
			/>
		</div>
	);
};
export default App;
