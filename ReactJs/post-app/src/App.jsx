
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import { lazy, Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorPage from './components/ErrorPage';
import db  from './utils/db'
import auth from './utils/auth'
import NewPost from './pages/NewPage';

// Lazy-loaded route
const About = lazy(() => import('./pages/About'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'posts',
        children: [
          { index: true, element: <Posts />, loader: postsLoader },
          { path: 'new', element: <NewPost /> }, 
          {
            path: ':postId',
            element: <PostDetail />,
            loader: postDetailLoader
          }
        ]
      },
      { 
        path: 'about',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        )
      },
      { path: 'login', element: <Login /> },
      { 
        path: 'profile',
        element: <Profile />,
        loader: protectedLoader // Auth check
      },
      { 
        path: 'settings',
        element: <Settings />,
        errorElement: <ErrorPage /> // Custom error boundary
      }
    ]
  }
]);

// Data loading functions
async function postsLoader() {
  const posts = await db.getPosts();
  return { posts };
}

async function postDetailLoader({ params }) {
  const post = await db.getPost(Number(params.postId));
  if (!post) throw new Error('Post not found');
  return { post };
}

async function protectedLoader() {
  const user = await auth.getCurrentUser();
  if (!user) throw redirect('/login');
  return { user };
}

export default function App() {
  return <RouterProvider router={router} />;
}