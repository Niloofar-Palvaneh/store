import React, { useEffect, useState } from 'react'
import { todos } from './todo.types'
interface EditTodoModalProps extends todos {
    setIsShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function EditTodoModal({ title, setIsShowEditModal }: EditTodoModalProps) {
    const [editableTodo, setEditableTodo] = useState<string>("")
    useEffect(() => {
        setEditableTodo(title)
    }, [])
    const changetodoValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditableTodo(e.target.value)
    }
    const clodeEditModalHandler = () => {
        setIsShowEditModal(false);
    }
    return (
        <div className='absolute w-full h-screen bg-[#a9acb178] z-50 top-0 left-0 flex items-center justify-center backdrop-blur-sm'>
            <div className='w-[70%] border bg-white p-4 rounded shadow'>
                <div className='flex items-center justify-between mb-4'>
                    <p>EDIT TODO</p>
                </div>
                <input className='border w-full bg-gray-100 p-1 rounded my-4 '
                value={editableTodo} onChange={(e) => changetodoValue(e)} type="text" />
                <div className='grid grid-cols-2 gap-2'>
                    <button className='bg-red-600 text-white rounded p-1' onClick={clodeEditModalHandler}>close</button>
                    <button className='bg-green-600 text-white rounded p-1'>edit</button>
                </div>
            </div>
        </div>
    )
}

export default EditTodoModal