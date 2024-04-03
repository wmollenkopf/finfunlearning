import React from 'react';
import './SplashPage.css';
// Import images
import catImage from './icons8-cat-96.png';
import crabImage from './icons8-crab-96.png';
import dragonImage from './icons8-dragon-96.png';
import ladybugImage from './icons8-ladybug-96.png';
import mooseImage from './icons8-moose-96.png';
import narwhalImage from './icons8-narwhal-96.png';
import tigerImage from './icons8-tiger-96.png';
import turtleImage from './icons8-turtle-96.png';

const schools = [
    // Use imported images
    { id: 1, name: 'The Cats', imageUrl: catImage },
    { id: 2, name: 'The Crabs', imageUrl: crabImage },
    { id: 3, name: 'The Dragons', imageUrl: dragonImage },
    // { id: 4, name: 'The Ladybugs', imageUrl: ladybugImage },
    { id: 5, name: 'The Mooses', imageUrl: mooseImage },
    { id: 6, name: 'The Narwhals', imageUrl: narwhalImage },
    { id: 7, name: 'The Tigers', imageUrl: tigerImage },
    { id: 8, name: 'The Turtles', imageUrl: turtleImage },
];


const SplashPage = () => {
  return (
    <div className="splash-page">
      <header className="header">
        <h1>Welcome to our Learning and Fintech Platform</h1>
        <p>Empowering you to learn and explore the world of finance and technology.</p>
      </header>
      <div className="main-content">
        <div className="feature-section">
          <h2>Learn Something New</h2>
          <p>Discover a wide range of courses, tutorials, and resources to expand your knowledge.</p>
        </div>
        <div className="feature-section">
          <h2>Explore Fintech</h2>
          <p>Stay updated with the latest trends and innovations in the fintech industry.</p>
        </div>
      </div>
      <div className="schools-section">
        <h2>Schools Using Our Platform</h2>
        <div className="school-grid">
          {schools.map(school => (
            <div key={school.id} className="school-tile">
              <img src={school.imageUrl} alt={school.name} />
              <p>{school.name}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 FinFunLearning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SplashPage;
