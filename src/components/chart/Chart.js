import React from 'react';
import './Chart.css';
import btnPT from './../../images/button-pt.png';

const Chart = (props) => {
  return (
    <section className={props.language}>
      <div className="center">
        <p className="text">{props.language}</p>
        <h2 className="title">{props.title}</h2>
        <p className="text">{props.sub}</p>
        <button className="btn"><img src={btnPT} alt="Click aqui" className="img-btn" /></button>
      </div>
    </section>
  );
}

export default Chart;
