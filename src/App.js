import logo from './logo.svg';
import React from 'react';
import LoginComponent from './components/Login';
import TodoApp from './components/TodoApp';
import './App.css';


function App () {
  
    return (
      <div className="App">
          <LoginComponent />
          <TodoApp />
      </div>
    );
}


export default App;

