import React, { useState } from 'react'
import { todos } from './todo.types'
import EditTodoModal from './editTodoModal'
const TodoCard = (props: todos) => {
    const [isShowEditModal, setIsShowEditModal] = useState<boolean>(false)
    const showEditModalHandler = () => {
        setIsShowEditModal(true)
    }
    return (
        <>
            <div className='bg-gray-100 p-2 rounded border flex items-center justify-between'>
                <div className='flex gap-2'>
                    <button className='bg-red-600 text-white p-1 rounded z-40'>remove</button>
                    <button className='bg-blue-600 text-white p-1 rounded z-40' onClick={showEditModalHandler}>edit</button>
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
            {isShowEditModal && <EditTodoModal {...props} setIsShowEditModal={setIsShowEditModal} />}
        </>
    )
}
export default TodoCard