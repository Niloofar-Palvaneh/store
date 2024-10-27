"use client"
import React, { useState } from 'react';
import TodoCard from './todoCard';
import { todos } from './todo.types';

const TodoWrapper: React.FC = () => {
    // Initialize allTodos as an array of todos
    const [allTodos, setAllTodos] = useState<todos[]>([]);
    const [newTodoTitle, setNewTodoTitle] = useState<string>("");

    const setNewTodoTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoTitle(e.target.value);
    };

    const addTodoHandler = () => {
        if (newTodoTitle.trim() === "") return;
        const newTodo = {
            id: Math.floor(Math.random() * 1000) + 1,
            title: newTodoTitle,
            isCompleted: false
        };
        setAllTodos(prevTodos => [...prevTodos, newTodo]);
        setNewTodoTitle("");
    };
    const changeTodoStatusHandler = (id: number) => {
        const updatedTodos = allTodos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setAllTodos(updatedTodos)
    }
    return (
        <div className='p-12'>
            <div>
                <h1>TODO LIST</h1>
                <input
                    value={newTodoTitle}
                    onChange={setNewTodoTitleHandler}
                    type="text"
                    placeholder='You can add a todo'
                />
                <button className='border-2 p-2' onClick={addTodoHandler}>Add</button>
            </div>
            <div className='grid grid-cols-1 gap-2'>
                {allTodos.map(todo => (
                    <div onClick={() => changeTodoStatusHandler(todo.id)}>
                        <TodoCard key={todo.id} {...todo} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoWrapper;