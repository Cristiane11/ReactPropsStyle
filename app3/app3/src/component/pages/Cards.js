import React from 'react';
import katie from '../images/katie.png';
import star from '../images/star.png';

function Card() {
  return (
    <section className="card">
        <button>SOLD OUT</button>
        <img src={katie} className="cardImage" alt="cardImage" />
        <div className='stats'>
            <img src={star} className="star" /><h3> 5.00</h3>
            <span>5.0</span>
            <span>(6) .</span>
            <span>usa</span>    
        </div>
        <p>Life Lessons with Katie Zaferes</p>
       <p>From $136</p>
    </section>
  );
}

export default Card;
