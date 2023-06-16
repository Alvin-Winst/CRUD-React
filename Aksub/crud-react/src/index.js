import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Add from './add';
import Navbar from './components/navbar/navbar';
import { AppProvider } from './context/appContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <Add />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <React.StrictMode>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1>CRUD React</h1>
      </div>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppProvider>
);