import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

import './App.css';

function App() {
  return (
      <div className="App">
        <Navigation></Navigation>
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
      </div>
  );
}

export default App;
