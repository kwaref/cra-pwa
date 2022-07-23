import React from 'react'

export const VisibilityControl = ({ isChecked, onChange, description }) => {
	return (
		<div className='flex w-full px-2 bg-gray-400'>
			<div className='flex w-full h-10 justify-center items-center'>
				<input
					className='rounded
						border-gray-300
						text-blue-600
						focus:border-indigo-300
						focus:ring
						focus:ring-offset-0
						focus:ring-blue-300
						cursor-pointer'
					type='checkbox'
					checked={isChecked}
					onChange={onChange}
				/>
				<label className='ml-2 fw-bold'>Hide completed tasks</label>
			</div>
		</div>
	)
}
