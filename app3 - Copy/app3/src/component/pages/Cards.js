import React from 'react';
import star from './images/star.png';

function Card (props) {
  return (
    <section className="card">
        <img src={`../images/${props.img}`} className="cardImage" alt="cardImage" />
        <div className='stats'>
            //<img src={star} className="star" />
            <span>{props.stats.rating}</span>
            <span className='gray'>({props.stats.reviewCount}) • </span>
            <span className='gray'>{props.location}</span>    
        </div>
        <p>Life Lessons with Katie Zaferes</p>
       <p><span className="bold">From ${props.price}</span>/Person</p>
    </section>
  );
}

export default Card;

