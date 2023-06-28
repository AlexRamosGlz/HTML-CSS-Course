import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter, Routes } from 'react-router-dom';
import SideBar from './pages/sideBar/sideBar.components';
import './App.css';
import { createRoot } from 'react-dom/client';
import { openNav } from './util/navigationSlice';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from "./store/store"

const App = () => {

  const dispatch = useDispatch();
  const { openNavigation } = useSelector(state => state.navigation)

  const handleOpen = () => {

    dispatch(openNav());
  }

  return (

    <div className='container'>
      <SideBar openNav={openNavigation} onClick={handleOpen} />
      <div className='content'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea debitis eaque id quae omnis, a, corrupti dolorem inventore aliquid laborum, officia architecto! Harum, pariatur omnis beatae alias corrupti numquam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, mollitia eum molestias minima quam aliquid perspiciatis earum quibusdam aspernatur nisi atque nostrum ducimus dolorem esse inventore necessitatibus cupiditate, consectetur sapiente.</p>
      </div>
    </div>

  )
}

export default App;
