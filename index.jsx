import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Button from './components/Button/Button'
import Badge from './components/Badge/Badge';

function App() {
  return (
    <>
      <h1>Your components go here</h1>
      <div className="badge-container">
        <Badge shape='pill' color='red'>
          <p>Badge</p>
        </Badge>
        <Badge  color='yellow'>
          <p>Badge</p>
        </Badge>
        <Badge  color='pink' shape='pill'>
          <p>Badge</p>
        </Badge>
        <Badge  color='indigo' shape='square'>
          <p>Badge</p>
        </Badge>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
