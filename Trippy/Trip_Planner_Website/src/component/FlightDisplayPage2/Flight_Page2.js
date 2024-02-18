import React, { useState } from "react";
import "./Flight_Page2.css";
import Show_Flights from "./Show_Flights";
import Flight_Filter from "./Flight_Filter";

export default function Flight_Page2() {

  const flights = [
    {
      flightId: "6E762",
      airlines: "Indigo",
      DateOfDeparture: "2024-02-20",
      departure: "Mumbai",
      departureTime: "06:05",
      arrival: "Delhi",
      arrivalTime: "08:05",
      timeTaken: "02:00",
      nonStop: 0,
      price: 8000,
    },
    {
      flightId: "AI102",
      airlines: "Air India",
      DateOfDeparture: "2024-02-22",
      departure: "Delhi",
      departureTime: "09:30",
      arrival: "Bangalore",
      arrivalTime: "11:45",
      timeTaken: "02:15",
      nonStop: 1,
      price: 13500,
    },
    {
      flightId: "SG511",
      airlines: "SpiceJet",
      DateOfDeparture: "2024-04-21",
      departure: "Bangalore",
      departureTime: "12:10",
      arrival: "Kolkata",
      arrivalTime: "14:20",
      timeTaken: "02:10",
      nonStop: 0,
      price: 12000,
    },
    {
      flightId: "9W512",
      airlines: "Jet Airways",
      DateOfDeparture: "2024-02-20",
      departure: "Kolkata",
      departureTime: "10:20",
      arrival: "Chennai",
      arrivalTime: "12:30",
      timeTaken: "02:10",
      nonStop: 1,
      price: 18000,
    },
    {
      flightId: "AI204",
      airlines: "Air India",
      DateOfDeparture: "2024-02-20",
      departure: "Chennai",
      departureTime: "14:45",
      arrival: "Hyderabad",
      arrivalTime: "16:20",
      timeTaken: "01:35",
      nonStop: 0,
      price: 6700,
    },
    {
      flightId: "6E721",
      airlines: "Indigo",
      DateOfDeparture: "2024-02-21",
      departure: "Hyderabad",
      departureTime: "07:30",
      arrival: "Mumbai",
      arrivalTime: "09:45",
      timeTaken: "02:15",
      nonStop: 1,
      price: 7200,
    },
    {
      flightId: "SG208",
      airlines: "SpiceJet",
      DateOfDeparture: "2024-02-21",
      departure: "Mumbai",
      departureTime: "11:15",
      arrival: "Bangalore",
      arrivalTime: "13:30",
      timeTaken: "02:15",
      nonStop: 0,
      price: 7100,
    },
    {
      flightId: "AI319",
      airlines: "Air India",
      DateOfDeparture: "2024-02-22",
      departure: "Bangalore",
      departureTime: "08:00",
      arrival: "Delhi",
      arrivalTime: "10:30",
      timeTaken: "02:30",
      nonStop: 0,
      price: 7900,
    },
    {
      flightId: "6E820",
      airlines: "Indigo",
      DateOfDeparture: "2024-02-22",
      departure: "Delhi",
      departureTime: "13:45",
      arrival: "Chennai",
      arrivalTime: "16:00",
      timeTaken: "02:15",
      nonStop: 1,
      price: 7600,
    },
    {
      flightId: "AI512",
      airlines: "Air India",
      DateOfDeparture: "2024-02-22",
      departure: "Chennai",
      departureTime: "17:30",
      arrival: "Kolkata",
      arrivalTime: "19:40",
      timeTaken: "02:10",
      nonStop: 0,
      price: 7300,
    },
    {
      flightId: "SG675",
      airlines: "SpiceJet",
      DateOfDeparture: "2024-02-21",
      departure: "Kolkata",
      departureTime: "08:20",
      arrival: "Hyderabad",
      arrivalTime: "10:40",
      timeTaken: "02:20",
      nonStop: 1,
      price: 7100,
    },
    {
      flightId: "9W101",
      airlines: "Jet Airways",
      DateOfDeparture: "2024-02-21",
      departure: "Hyderabad",
      departureTime: "12:00",
      arrival: "Mumbai",
      arrivalTime: "14:20",
      timeTaken: "02:20",
      nonStop: 0,
      price: 7400,
    },
    {
      flightId: "6E401",
      airlines: "Indigo",
      DateOfDeparture: "2024-02-20",
      departure: "Mumbai",
      departureTime: "16:30",
      arrival: "Delhi",
      arrivalTime: "18:45",
      timeTaken: "02:15",
      nonStop: 0,
      price: 6800,
    },
    {
      flightId: "AI902",
      airlines: "Air India",
      DateOfDeparture: "2024-02-20",
      departure: "Delhi",
      departureTime: "20:00",
      arrival: "Bangalore",
      arrivalTime: "22:20",
      timeTaken: "02:20",
      nonStop: 1,
      price: 7200,
    },
  ];


  const [filterByAirline, setFilterByAirline] = useState([]);
  const [filterByStops, setFilterByStops] = useState([]);
  const [filterByDepartureTime, setFilterByDepartureTime] = useState([]);
  const [filterByArrivalTime, setFilterByArrivalTime] = useState([]);
  const [filterByPrice, setFilterByPrice] = useState([]);
  const [flightClearFilter, setflightClearFilter] = useState([0]);

  const getClearFilterArrayFunction = (flights) =>{
    setflightClearFilter([...flights])
  }

  const getFilterByAirlineFunction = (filterVal) => {
    setFilterByAirline([...filterVal]);
  };
  const getFilterByStopsFunction = (filterVal) => {
    setFilterByStops([...filterVal]);
  };
  const getFilterByDepartureTimeFunction = (filterVal) => {
    setFilterByDepartureTime([...filterVal]);
  };
  const getFilterByArrivalTimeFunction = (filterVal) => {
    setFilterByArrivalTime([...filterVal]);
  };
  const getFilterByPriceFunction = (filterVal) => {
    setFilterByPrice([...filterVal]);
  };

  

  return (
    <div className="flight_page2_container">
      <div className="flight_filter_container">
        <h3>Fliter</h3>
        <Flight_Filter
          getClearFilterArrayFunction={getClearFilterArrayFunction}
          getFilterByAirlineFunction={getFilterByAirlineFunction}
          getFilterByStopsFunction={getFilterByStopsFunction}
          getFilterByDepartureTimeFunction={getFilterByDepartureTimeFunction}
          getFilterByArrivalTimeFunction={getFilterByArrivalTimeFunction}
          getFilterByPriceFunction={getFilterByPriceFunction}
        />
      </div>
      <div className="flight_details_display_container">
        <h3>Available Flights</h3>
        <Show_Flights
          flightsArray={flights}
          flightClearFilter={flightClearFilter}
          filterByAirline={filterByAirline}
          filterByStops={filterByStops}
          filterByDepartureTime={filterByDepartureTime}
          filterByArrivalTime={filterByArrivalTime}
          filterByPrice={filterByPrice}
        />
      </div>
    </div>
  );
}
