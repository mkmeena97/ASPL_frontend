import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markNotifiedAction } from './todoSlice';

const NotificationService = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    // Ask for permission once
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
      Notification.requestPermission();
    }

    const now = new Date();

    todos.forEach((todo) => {
    const due = new Date(todo.dueDate);
    const now = new Date();
    const hoursDiff = (due - now) / (1000 * 60 * 60);

    if (
        todo.status !== 'completed' &&
        hoursDiff <= 24 &&
        hoursDiff >= 0 &&
        Notification.permission === 'granted'
    ) {
        const last = todo.lastNotifiedAt ? new Date(todo.lastNotifiedAt) : null;
        const hoursSinceLast = last ? (now - last) / (1000 * 60 * 60) : Infinity;

        if (hoursSinceLast >= 1) {
        new Notification('⏰ Task Reminder', {
            body: `${todo.title} is due at ${due.toLocaleString()}`,
        });

        dispatch(markNotifiedAction({ id: todo.id, timestamp: now.toISOString() }));
        }
    }
    });

  }, [todos, dispatch]);

  return null; // this component doesn't render anything
};

export default NotificationService;
