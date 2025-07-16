import { nanoid } from '@reduxjs/toolkit';

export const addTodo = (state, action) => {
  const { title, description, dueDate } = action.payload;
    state.todos.push({
    id: nanoid(),
    title,
    description,
    dueDate,
    status: 'pending',
    createdAt: new Date().toISOString(),
    lastNotifiedAt: null,
    });
};

export const toggleComplete = (state, action) => {
  const todo = state.todos.find((t) => t.id === action.payload);
  if (todo && todo.status !== 'completed') {
    todo.status = 'completed';
  }
};


export const deleteTodo = (state, action) => {
  return state.todos.filter((t) => t.id !== action.payload);
};

export const updateTodo = (state, action) => {
  const { id, title, description, dueDate } = action.payload;
  const todo = state.todos.find((t) => t.id === id);
  if (todo) {
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
  }
};

export const setFilter = (state, action) => {
    state.todos.filter = action.payload;
};

export const markNotified = (state, action) => {
  const todo = state.todos.find((t) => t.id === action.payload);
  if (todo) {
    todo.notified = true;
  }
};

export const markInProgress = (state, action) => {
  const todo = state.todos.find((t) => t.id === action.payload);
  if (todo) {
    todo.status = 'in-progress';
  }
};

//Filters
export const setStatusFilter = (state, action) => {
  state.filters.status = action.payload;
};

export const setDateFilter = (state, action) => {
  state.filters.date = action.payload;
};

export const setSearchFilter = (state, action) => {
  state.filters.search = action.payload.toLowerCase();
};
