import React from 'react'

export const TodoRow = ({ todo, toggleTodo }) => {
	return (
		<div className='flex flex-row justify-between items-center' key={todo.action}>
			<div className='flex flex-col'>{todo.action}</div>
			<div className='flex flex-col'>
				<input
					type='checkbox'
					checked={todo.done}
					className='rounded
					border-gray-300
					text-blue-600
					focus:border-indigo-300
					focus:ring
					focus:ring-offset-0
					focus:ring-blue-300
					cursor-pointer'
					onChange={() => toggleTodo(todo)}
				/>
			</div>
		</div>
	)
}
