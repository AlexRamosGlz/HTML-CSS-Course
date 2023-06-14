import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter, Routes } from 'react-router-dom';
import SideBar from './pages/sideBar/sideBar.components';
import './App.css';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SideBar />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
