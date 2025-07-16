import React, { useState } from 'react';
import Header from './components/Header';
import AddTodo from './features/todos/AddTodo';
import TodoList from './features/todos/TodoList';
import NotificationService from './features/todos/NotificationService';
import FilterBar from './components/FilterBar';

const App = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
      <Header />

      <h2 className="text-center fw-bold text-primary my-4">
        Task Table
      </h2>

      <div className="container mt-4">
        <button 
          className="btn btn-sm btn-outline-primary mb-3"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Close' : 'Add New Task'}
        </button>

        {showAddForm && <AddTodo />}

        <FilterBar />
        <TodoList />
      </div>

      <NotificationService />
    </div>
  );
};

export default App;
