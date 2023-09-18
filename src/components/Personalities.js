import React from 'react';
import './Personalities.css'; 

const personalitiesData = [
  {
    name: 'Imran Khan',
    imageSrc: 'imran khan.jpeg',
    intro: 'Imran Ahmad Khan Niazi is a Pakistani former cricketer and politician who served as the 22nd prime minister of Pakistan from August 2018 until April 2022. He is the founder and chairman of the political party Pakistan Tehreek-e-Insaf. Born to a Niazi Pashtun family in Lahore, Khan graduated from Keble College, Oxford..',
  },
  {
    name: 'Hafiz Saeed',
    imageSrc: 'Saeed.jpg',
    intro: 'Hafiz Muhammad Saeed is a Pakistani Islamist who co-founded Lashkar-e-Taiba, a Pakistan-based Islamist militant organization that is designated as a terrorist group by the United Nations Security Council, India, the United States, the United Kingdom, the European Union, Australia, and Russia..',
  },
  
];

function Personalities() {
  return (
    <div className="personalities">
      <h2>My Favorite Personalities</h2>
      <div className="personality-list">
        {personalitiesData.map((personality, index) => (
          <div key={index} className="personality">
            <img src={personality.imageSrc} alt={personality.name} />
            <h3>{personality.name}</h3>
            <p>{personality.intro}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personalities;
