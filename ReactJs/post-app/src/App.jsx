import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posts, { loader as postsLoader } from './pages/Posts';
import PostDetail, { loader as postDetailLoader } from './pages/PostDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import NewPost from './pages/NewPage';
import EditPost, { loader as editPostLoader } from './pages/EditPost';
import Profile, { loader as profileLoader } from './pages/Profile';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorPage from './components/ErrorPage';
import { lazy, Suspense } from 'react';

// Lazy load About page
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
            path: ':postId/edit',
            element: <EditPost />,
            loader: editPostLoader,
          },
          {
            path: ':postId',
            element: <PostDetail />,
            loader: postDetailLoader,
          },
        ],
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
      },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        path: 'profile',
        element: <Profile />,
        loader: profileLoader,
      },
      {
        path: 'settings',
        element: <Settings />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
