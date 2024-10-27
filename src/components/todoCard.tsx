import React from 'react'
import { todos } from './todo.types'

const TodoCard = (props : todos) => {
    return (
        <div className='bg-gray-100 p-2 rounded border flex items-center justify-between'>
            <div className='flex gap-2'>
                <button className='bg-red-600 text-white p-1 rounded'>remove</button>
                <button className='bg-blue-600 text-white p-1 rounded'>edit</button>
                <button className='bg-green-600 text-white p-1 rounded'>
                    {props.isCompleted ? "✅" : "👌"}
                </button>
            </div>
            <div>
                <h2>
                  {props.title}
                </h2>
            </div>
        </div>
    )
}

export default TodoCard