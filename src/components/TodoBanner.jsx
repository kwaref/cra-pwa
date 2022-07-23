import React from 'react'

export const TodoBanner = ({ todoItems }) => {
	return (
		<h4 className='bg-blue-600 text-white text-center p-2'>
			Karel's To Do List ({todoItems.filter(t => !t.done).length} items to do)
		</h4>
	)
}
