import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import ListTodo from './components/ListTodo/ListTodo';

function App() {
  return (
    <div className="App">
      <h1>Create your Tasks</h1>
      <ListTodo />
      <AddTodo />
    </div>
  );
}

export default App;