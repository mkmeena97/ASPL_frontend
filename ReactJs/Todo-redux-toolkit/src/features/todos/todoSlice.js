import { createSlice } from '@reduxjs/toolkit';
import {
  addTodo,
  toggleComplete,
  deleteTodo,
  updateTodo,
  markNotified,
  setFilter,
  markInProgress,
  setStatusFilter,
  setDateFilter,
  setSearchFilter
} from './todoReducers';

const initialState = {
  todos: [],
  filters: {
    status: 'all',  
    date: 'all',
    search: '',
  },
};



const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo,
    deleteTodo,
    updateTodo,
    toggleComplete,
    markNotified,
    markInProgress,
    setFilter,
    setStatusFilter,
    setDateFilter,
    setSearchFilter
  },
});

export const {
  addTodo: addTodoAction,
  toggleComplete: toggleCompleteAction,
  deleteTodo: deleteTodoAction,
  updateTodo: updateTodoAction,
  markNotified: markNotifiedAction,
  setFilter:setFilterAction,
  markInProgress:markInProgressAction,
  setStatusFilter: setStatusFilterAction,
  setDateFilter: setDateFilterAction,
  setSearchFilter: setSearchFilterAction
} = todoSlice.actions;

export default todoSlice.reducer;
