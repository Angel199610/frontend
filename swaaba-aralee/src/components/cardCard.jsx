import React from 'react';
import './CarCard.css';

const CarCard = ({ car }) => (
  <div className="car-card">
    <img src={car.image} alt={car.model} />
    <h2>{car.make} {car.model}</h2>
    <p>{car.year}</p>
    <p>${car.price}</p>
    <a href={`/cars/${car.id}`}>View Details</a>
  </div>
);

export default CarCard;
