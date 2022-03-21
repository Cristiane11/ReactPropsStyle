import React from 'react';
import photoGrid from './images/photoGrid.png';

function Main() {
  return (
    <section className="sectionGrid">
     
        <img src={photoGrid} className="imageGrid" alt="mainImage" />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </section>
  );
}

export default Main;
