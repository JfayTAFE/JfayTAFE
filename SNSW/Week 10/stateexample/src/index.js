import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TaskOne from './TaskOne';
import TaskTwo from './TaskTwo';
import TaskThree from './TaskThree';

reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render

(
  <React.StrictMode>
    <TaskOne />
    <TaskTwo />
    <TaskThree />
  </React.StrictMode>
);