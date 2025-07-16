import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditTodo from './EditTodo';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [editingTodo, setEditingTodo] = useState(null);

  const todos = useSelector((state) => {
    const { todos, filters } = state.todos;
    const now = new Date();

    return todos.filter((todo) => {
      if (filters.status !== 'all') {
        if (filters.status === 'overdue') {
          const due = new Date(todo.dueDate);
          if (!(todo.status !== 'completed' && due < now)) return false;
        } else if (todo.status !== filters.status) {
          return false;
        }
      }

      const due = new Date(todo.dueDate);
      if (filters.date === 'today') {
        const isToday =
          due.getDate() === now.getDate() &&
          due.getMonth() === now.getMonth() &&
          due.getFullYear() === now.getFullYear();
        if (!isToday) return false;
      } else if (filters.date === 'tomorrow') {
        const tomorrow = new Date();
        tomorrow.setDate(now.getDate() + 1);
        if (
          due.getDate() !== tomorrow.getDate() ||
          due.getMonth() !== tomorrow.getMonth() ||
          due.getFullYear() !== tomorrow.getFullYear()
        )
          return false;
      } else if (filters.date === 'this-week') {
        const endOfWeek = new Date();
        endOfWeek.setDate(now.getDate() + (7 - now.getDay()));
        endOfWeek.setHours(23, 59, 59, 999);
        if (due < now || due > endOfWeek) return false;
      }

      if (
        filters.search &&
        !todo.title.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  });

  return (
    <div className="mt-4">
      <h4 className="mb-3">Tasks</h4>

      {todos.length === 0 ? (
        <p className="text-muted">No tasks to show for this filter.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onEdit={setEditingTodo} />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingTodo && (
        <EditTodo
          todo={editingTodo}
          onClose={() => setEditingTodo(null)}
        />
      )}
    </div>
  );
};

export default TodoList;
