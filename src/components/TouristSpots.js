import React from 'react';
import './TouristSpots.css';

const touristSpotsData = [
  {
    name: 'Swat Valley',
    imageSrc: 'Swat.jpg',
    intro: 'This stunning valley in the Khyber Pakhtunkhwa province of Pakistan is something straight out of a fairy tale.',
  },
  {
    name: 'Boyun Village',
    imageSrc: 'Boyun.jpg',
    intro: 'Boyun, also known as Green Top, is a short drive or manageable up-hill walk from Kalam town. When you finally reached the pinnacle, you’ll be rewarded with a panorama of one of the most vast and beautiful villages I’ve ever seen – along with sweeping views of the valley below. Boyun is an easy day trip from Kalam.',
  },
  {
    name: 'Hunza Valley',
    imageSrc: 'Hunza.jpg',
    intro: 'If you live in Pakistan – or have read anything about the country – it’s almost certain you’ve come across the name Hunza. Don’t let the word ‘valley’ confuse you, though – Hunza is actually a massive district made up of numerous valleys and villages.',
  },
  {
    name: 'Attabad Lake',
    imageSrc: 'Attabad.jpg',
    intro: 'A lake that doesn’t look real… Even when you’re standing right in front of it. Attabad was born out of tragedy when a massive landslide occurred in 2010. The flow of the Hunza River was blocked, and the now-famous lake was created in its wake. Its bright-blue turquoise waters make the it one of the most beautiful places in Pakistan.',
  },
  // Add more tourist spots here
];

function TouristSpots() {
  return (
    <div className="tourist-spots">
      <h2>My Favorite Tourist Spots</h2>
      <div className="spot-list">
        {touristSpotsData.map((spot, index) => (
          <div key={index} className="spot">
            <img src={spot.imageSrc} alt={spot.name} />
            <h3>{spot.name}</h3>
            <p>{spot.intro}</p>
            {/* Add optional YouTube video here */}
          </div>
        ))}
      </div>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gsRaNokBRcQ?si=GpcIn1gbwkPirwB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default TouristSpots;
