import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SideBar from './pages/sideBar/sideBar.components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <SideBar />
      <div className='content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, mollitia eum molestias minima quam aliquid perspiciatis earum quibusdam aspernatur nisi atque nostrum ducimus dolorem esse inventore necessitatibus cupiditate, consectetur sapiente.</div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
