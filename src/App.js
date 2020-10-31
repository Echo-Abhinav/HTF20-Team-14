import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className= "app">
      <Sidebar />
    </div>
  );
}

export default App;
