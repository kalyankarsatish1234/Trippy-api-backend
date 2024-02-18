import React, { useState, useEffect } from 'react';

const FareSummary = ({ flightInfo }) => {
  const [totalFare, setTotalFare] = useState(100); // Replace with your actual total fare
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // Assuming flightInfo contains the necessary information
    // Update totalFare based on flight information
    // You can replace this logic with your own based on flightInfo
    setTotalFare(calculateTotalFare(flightInfo));
  }, [flightInfo]);

  const calculateTotalFare = (flightInfo) => {
    // Implement your logic to calculate total fare based on flightInfo
    // For example, you can sum up ticket prices, taxes, etc.
    // This is just a placeholder, replace it with your actual logic
    return flightInfo ? flightInfo.ticketPrice + flightInfo.tax : 0;
  };

  const calculateFinalAmount = () => {
    return totalFare - totalFare * discount;
  };

  return (
    <div className='faresummary'>
      <h2>Fare Summary</h2>
      <p>Total Fare: Rs.{totalFare}</p>
      <p>Discount: {discount * 100}%</p>
      <p>Final Amount: Rs.{calculateFinalAmount()}</p>
    </div>
  );
};

export default FareSummary;
