import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Button from './components/Button/Button'
import Badge from './components/Badge/Badge';
import Banner from './components/Banner/Banner';
import Card from './components/Cards/Card';

function App() {
  return (
    <div className='main-container'>
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
      <div className="banner-container">
        <Banner status='success'>
          <p>Congratss</p>
        </Banner>
        <Banner status='error'>
        </Banner>
        <Banner status='warning'>
          <p>Oh no somethings gone wrong</p>
        </Banner>
        <Banner status='neutral'>
          <p>You got an update!!</p>
        </Banner>
      </div>
      <div className="cards-container">
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
