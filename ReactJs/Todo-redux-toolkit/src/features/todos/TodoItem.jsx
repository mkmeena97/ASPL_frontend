import React from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleCompleteAction,
  deleteTodoAction,
  markInProgressAction,
} from './todoSlice';

const TodoItem = ({ todo, onEdit }) => {
  const dispatch = useDispatch();

  const isOverdue = () => {
    const now = new Date();
    const due = new Date(todo.dueDate);
    return todo.status !== 'completed' && due < now;
  };

  const renderStatusBadge = () => {
    if (isOverdue()) return <span className="badge bg-danger">Overdue</span>;
    if (todo.status === 'completed') return <span className="badge bg-success">Completed</span>;
    if (todo.status === 'in-progress') return <span className="badge bg-warning text-dark">In Progress</span>;
    return <span className="badge bg-secondary">Pending</span>;
  };

  return (
    <tr className={todo.status === 'completed' ? 'table-success' : ''}>
      <td>{todo.title}</td>
      <td>{todo.description || '-'}</td>
      <td>{new Date(todo.dueDate).toLocaleString()}</td>
      <td>{renderStatusBadge()}</td>
      <td className="d-flex gap-1 flex-wrap">
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => dispatch(toggleCompleteAction(todo.id))}
          disabled={todo.status === 'completed'}
        >
          Complete
        </button>
        <button
          className="btn btn-sm btn-outline-warning"
          onClick={() => dispatch(markInProgressAction(todo.id))}
        >
          In-Progress
        </button>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => onEdit(todo)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => dispatch(deleteTodoAction(todo.id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
