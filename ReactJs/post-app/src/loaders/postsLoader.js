import { redirect } from 'react-router-dom';

const API_BASE = 'http://localhost:5000/api';

export async function postsLoader() {
  const token = localStorage.getItem('token');
  if (!token) return redirect('/login');

  const response = await fetch(`${API_BASE}/posts`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) throw new Error('Failed to fetch posts');

  const posts = await response.json();
  return { posts };
}
