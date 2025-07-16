
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from './todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Title is required');
      return;
    }

    if (!dueDate) {
      alert('Due date is required');
      return;
    }

    const adjustedDueDate = new Date(dueDate);
    adjustedDueDate.setHours(23, 59, 59, 999)

    dispatch(
      addTodoAction({
        title,
        description,
        dueDate:adjustedDueDate.toISOString(),
      })
    );

    // Reset form
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div className="card my-4">
      <div className="card-header bg-primary text-white">Add New Task</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title *</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="2"
              placeholder="Enter optional description"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Due Date *</label>
            <input
              type="date"
              className="form-control"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
