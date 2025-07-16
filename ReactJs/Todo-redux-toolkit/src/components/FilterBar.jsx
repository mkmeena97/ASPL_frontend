import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setStatusFilterAction,
  setDateFilterAction,
  setSearchFilterAction,
} from '../features/todos/todoSlice';

const FilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.todos.filters);

  return (
    <div className="mb-4 d-flex flex-wrap gap-3 align-items-end">
      {/* Status Filter */}
      <div>
        <label className="form-label">Status</label>
        <select
          className="form-select"
          value={filters.status}
          onChange={(e) => dispatch(setStatusFilterAction(e.target.value))}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="overdue">Overdue</option>
        </select>
      </div>

      {/* Date Filter */}
      <div>
        <label className="form-label">Due Date</label>
        <select
          className="form-select"
          value={filters.date}
          onChange={(e) => dispatch(setDateFilterAction(e.target.value))}
        >
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="this-week">This Week</option>
        </select>
      </div>

      {/* Search Filter */}
      <div className="flex-grow-1">
        <label className="form-label">Search</label>
        <input
          type="text"
          className="form-control"
          placeholder="Search by title..."
          value={filters.search}
          onChange={(e) => dispatch(setSearchFilterAction(e.target.value))}
        />
      </div>
    </div>
  );
};

export default FilterBar;
