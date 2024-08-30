import './App.css';
import React from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Resume from './pages/Resume';
import { AuthProvider } from './Context/authContext';
import ProtectedRoute from './auth/ProtectedRoute';


function App() {
  const Router = createBrowserRouter([
    {
      path:'/login',
      element: (
        <>
        <Login />
        </>
      )
    },
    {
      path:'/signup',
      element:(
        <>
        <Signup />
        </>
      )
    },
    {
      path:'/',
      element:(
        <ProtectedRoute>
        <Resume />
        </ProtectedRoute>
      )
    }
  ])
  return (
    <>
    <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
    </>
  );
}

export default App;
