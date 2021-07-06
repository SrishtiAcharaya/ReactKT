import React from 'react';

const Rules = () => {
  return (
    <div className='main-content'>
      <h1>Rules</h1>
      <h4>Only call hooks at the top level</h4>
      <p>-Don't call hooks inside loops, conditional or nested functions</p>
      <h4>Only call hooks from React function</h4>
      <p>-Call them from withing react functional components and not from any regular javascript functions </p>
    </div>
  );
};

export default Rules;