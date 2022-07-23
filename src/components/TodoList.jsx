import React from 'react'
import { TodoRow } from './TodoRow'

export const TodoList = ({ todoItems, toggleTodo }) => {
	return (
		<div className='flex flex-col px-4 py-4'>
			<div className='flex flex-row justify-between'>
				<div className='flex flex-col font-bold'>Task</div>
				<div className='flex flex-col font-bold'>Done</div>
			</div>
			{todoItems.map(t => {
				return <TodoRow todo={t} toggleTodo={toggleTodo} key={t.action} />
			})}
		</div>
	)
}
