import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { countOfActiveTask } from '../api/DataRetriveApi';

const WelcomeComponent = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const [count,setCount] = useState()

  useEffect(
    ()=>refreshCount(),[]
  )
  function refreshCount(){
    countOfActiveTask()
  .then(
    response =>{
      setCount(response.data)
    }
  )}

  return (
    <div className='container'>
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to TaskTraker Admin Dashboard</h1>
      <p className="welcome-message">
        It's {dateString}. Get ready to manage Tasks,happy coding.
      </p>
      <div className="dashboard-info">
        <span>
          Active Tasks: <span className="highlight">{count}</span>
        </span>
      </div>
      <div>
        <div>
        <Link to='/tasks'>Manage Active Tasks</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WelcomeComponent;
