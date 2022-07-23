/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
// import './App.css'
import { TodoCreator } from './components/TodoCreator'
import { TodoBanner } from './components/TodoBanner'
import { TodoList } from './components/TodoList'
import { VisibilityControl } from './components/VisibilityControl'
import useLocalStorage from './hooks/useLocalStorage'

const App = () => {
	const [todoItems, setTodoItems] = useLocalStorage('todos', [
		{ action: 'Buy Flowers', done: false },
		{ action: 'Get Shoes', done: false },
		{ action: 'Collect Tickets', done: true },
		{ action: 'Call Joe', done: false },
	])

	const [newItemText, setNewItemText] = useState('')
	const [hideCompleted, setHideCompleted] = useState(false)

	const filteredItems = () =>
		hideCompleted ? todoItems.filter(item => !item.done) : todoItems

	const updateNewTextValue = event => setNewItemText(event.target.value)

	const createNewTodo = () => {
		if (newItemText) {
			if (!todoItems.find(item => item.action === newItemText)) {
				setTodoItems([...todoItems, { action: newItemText, done: false }])
				setNewItemText('')
			}
		}
	}

	const toggleTodo = todo => {
		setTodoItems(
			todoItems.map(item =>
				item.action === todo.action ? { ...item, done: !item.done } : item,
			),
		)
	}

	const handleChange = () => {
		setHideCompleted(!hideCompleted)
	}

	return (
		<div>
			<TodoBanner todoItems={todoItems} />
			<TodoList todoItems={filteredItems()} toggleTodo={toggleTodo} />
			<TodoCreator
				newItemText={newItemText}
				updateNewTextValue={updateNewTextValue}
				createNewTodo={createNewTodo}
			/>
			<VisibilityControl isChecked={hideCompleted} onChange={handleChange} />
		</div>
	)
}

export default App
