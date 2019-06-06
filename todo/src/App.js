import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';

// importing Route from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Route path="/" component={TodoContainer} />
    </div>
  );
}

export default App;
