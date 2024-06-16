import React from 'react';
import CarList from '../components/carList';
import './Home.css';

const Home = () => {
  const cars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2021,
      price: 25000,
      image: 'https://example.com/toyota-camry.jpg'
    },
    // Add more car objects here
  ];

  return (
    <div className="home">
      <h1>Welcome to Swaaba Aralee</h1>
      <CarList cars={cars} />
    </div>
  );
};

export default Home;
