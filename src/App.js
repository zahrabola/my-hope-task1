///import logo from './logo.svg';
import './App.css';
import TodoContainer from './Components/TodoContainer';
import Todolist from './Components/Todolist';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       Todo App
      </header>
    <TodoContainer />
    </div>
  );
}

export default App;
