import React from 'react';
import './CarDetail.css';

const CarDetail = ({ car }) => (
  <div className="car-detail">
    <img src={car.image} alt={car.model} />
    <h2>{car.make} {car.model}</h2>
    <p>{car.year}</p>
    <p>${car.price}</p>
    <p>{car.description}</p>
  </div>
);

export default CarDetail;
