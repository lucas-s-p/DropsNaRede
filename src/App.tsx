import './App.css';
import React from 'react';
import Home from './app/home';
import { routes } from './data';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
