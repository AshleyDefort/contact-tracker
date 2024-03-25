import React from 'react';
import Root, {loader as rootLoader, action as rootAction} from './routes/root';
import Contact, {loader as contactLoader,action as contactAction } from './routes/contact';
import EditContact, {action as editAction} from './routes/edit';
import ErrorPage from './error-page';
import ReactDOM from 'react-dom/client';
import Index from './routes/index';
import {action as destroyAction} from './routes/destroy';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [{
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: "/contacts/:id",
          element: <Contact />,
          loader: contactLoader,
          action: contactAction,
        },
        {
          path: "/contacts/:id/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction,
        },
        {
          path: "/contacts/:id/destroy",
          action: destroyAction,
          errorElement: <div>Oops! There was an error.</div>,
        },
      ]
    }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
