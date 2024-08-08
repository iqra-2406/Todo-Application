import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../features/t0Do/todoSlice';
import Pagination from './Pagination';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function Todos({ todos }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  // Ensure todos is defined
  const filteredTodos = todos || [];

  const handleEdit = (todo) => {
    setEditMode(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    dispatch(editTodo({
      id,
      text: editText
    }));
    setEditMode(null);
    setEditText('');
  };

  const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);
  const currentTodos = filteredTodos.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="p-4">
      <div className="text-2xl font-bold mb-4">Todos</div>
      <ul className="list-none">
        {currentTodos.length === 0 ? (
          <div>No todos available</div>
        ) : (
          currentTodos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-gray-800 px-4 py-2 rounded text-white"
              key={todo.id}
            >
              {editMode === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="bg-gray-700 text-white rounded border border-gray-600 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="ml-2 px-4 py-2 bg-indigo-500 rounded text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                <div>{todo.text}</div>
                <div className="flex space-x-4">
                  <FaEdit 
                    onClick={() => handleEdit(todo)} 
                    className="fill-green-500 cursor-pointer hover:text-blue-600 transition-colors"
                    size={24} 
                  />
                  <RiDeleteBin6Line 
                    onClick={() => dispatch(removeTodo(todo.id))} 
                    className="fill-rose-600 cursor-pointer hover:text-red-600 transition-colors"
                    size={24} 
                  />
                </div>
              </>
              )}
            </li>
          ))
        )}
      </ul>
      <Pagination setPage={setPage} page={page} totalPages={totalPages} />
    </div>
  );
}

export default Todos;
