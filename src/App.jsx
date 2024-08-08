import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { useSelector } from 'react-redux';

function App() {
    const todos = useSelector(state => state.todos);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter todos based on searchTerm
    const filteredTodos = todos ? todos.filter(todo =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    return (
        <div className="App">
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <AddTodo />
            <Todos todos={filteredTodos} />
        </div>
    );
}

export default App;
