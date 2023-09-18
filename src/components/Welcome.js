import React from 'react';
import './Welcome.css'; 

const Welcome = () => {
  return (
    <div>
    <div className="welcome">
      <h1>Welcome to My Portfolio</h1>
      <p>
        I am an expert in <span className="highlight">Web Development</span> with a passion for{' '}
        <span className="highlight">Frontend Technologies</span>. Explore my favorite personalities, cities,
        tourist spots, and feel free to get in touch with me.
      </p>
      <p>
        Here you can check my favorite personalities, cities and tourist spots.
      </p>
    </div>
    <div className='embed'>
    <h4>My Favorite Song</h4>
    <iframe width="400px" src="https://www.youtube.com/embed/gsRaNokBRcQ?si=GpcIn1gbwkPirwB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
  );
}

export default Welcome;
