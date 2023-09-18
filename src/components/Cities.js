import React from 'react';
import './Cities.css'; 

const citiesData = [
  {
    name: 'Kashmir',
    imageSrc: 'Kashmir.jpeg',
    intro: 'Kashmir is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term "Kashmir" denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range.',
  },
  {
    name: 'Faisalabad',
    imageSrc: 'Faisalabad.jpg',
    intro: 'Faisalabad, formerly known as Lyallpur, is the second largest city and industrial centre of the Pakistani province of Punjab. It is the third largest city in Pakistan, with a population of over 3.7 million. It is situated in the north-east of the country, lying between the plains of the Ravi and Chenab River.',
  },
 
];

function Cities() {
  return (
    <div className="cities">
      <h2>My Favorite Cities</h2>
      <div className="city-list">
        {citiesData.map((city, index) => (
          <div key={index} className="city">
            <img src={city.imageSrc} alt={city.name} />
            <h3>{city.name}</h3>
            <p>{city.intro}</p>
            {/* Add optional YouTube video here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;
