import React from 'react';
import './App.scss';
import Header from "./site/header/Header";
import HomePage from "./site/pages/home/HomePage";

export default function App() {
  return (
    <div className="App">
        <Header />
        <HomePage />
    </div>
  );
}
