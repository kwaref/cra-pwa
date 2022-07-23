import React from 'react'

export const TodoCreator = ({
	newItemText,
	updateNewTextValue,
	createNewTodo,
}) => {
	return (
		<div className='flex w-full px-2'>
			<div className='my-1 flex flex-row w-full'>
				<input
					className='w-full mr-2 px-2 border border-gray-200 rounded focus:ring focus:outline-0 '
					value={newItemText}
					onChange={updateNewTextValue}
				/>
				<button
					className='bg-blue-600 mx-1 rounded-md py-2 px-3 text-white focus:ring'
					onClick={createNewTodo}
				>
					Add
				</button>
			</div>
		</div>
	)
}
