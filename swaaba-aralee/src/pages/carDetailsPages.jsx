import React from 'react';
import CarDetail from '../components/carDetail';
import './CarDetailsPage.css';

const CarDetailsPage = ({ match }) => {
  const carId = match.params.id;
  const car = {
    id: carId,
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    price: 25000,
    image: 'https://example.com/toyota-camry.jpg',
    description: 'Detailed description of the car goes here.'
  };

  return (
    <div className="car-details-page">
      <CarDetail car={car} />
    </div>
  );
};

export default CarDetailsPage;
