import React from 'react';
import logo from './logo.svg';
import userSlice from './features/counter/userSlice';
import appSlice from './features/counter/appSlice';
import './App.css';
import Chat from "./Chat"
import { selectUser} from './features/counter.userSlice'

function App() {
  const user = userSelector()
  return (
    <dev className="app">
      {user ?
  );
}

export default App;
