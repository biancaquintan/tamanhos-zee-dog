import React from 'react';
import './App.css';
import Chart from './components/chart/Chart';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App sizechart">
      <Chart 
        language="PT"
        title="TÁ COM DÚVIDA NO TAMANHO?"
        sub="RELAXA QUE A GENTE TE AJUDA!"
      />
      <Chart 
        language="EN"
        title="NOT SURE ABOUT THE SIZE?"
        sub="NO WORRIES, WE'LL HELP YOU!"
      />
      <Footer/>
    </div>
  );
}

export default App;
