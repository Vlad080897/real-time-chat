import React, { useState } from 'react';
import './App.css';
import AppRoutes from './components/AppRoutes';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
