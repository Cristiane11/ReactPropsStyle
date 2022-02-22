import React from 'react';
import katie from '../images/katie.png';
import star from '../images/star.png';

function Card() {
  return (
    <section className="card">
        <button>SOLD OUT</button>
        <img src={katie} className="cardImage" alt="cardImage" />
        <div className='stats'>
            <img src={star} className="star" />
            <span>5.0</span>
            <span className='gray'>(6) • </span>
            <span className='gray'>USA</span>    
        </div>
        <p>Life Lessons with Katie Zaferes</p>
       <p><span className="bold">From $136</span>/Person</p>
    </section>
  );
}

export default Card;
