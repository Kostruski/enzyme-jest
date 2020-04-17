import React from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './App.scss';

function App() {
  const texts = {
    title: 'Title',
    desc: 'Click the button to render posts',
  };
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline texts= {texts} />
      </section>
    </div>
  );
}

export default App;
