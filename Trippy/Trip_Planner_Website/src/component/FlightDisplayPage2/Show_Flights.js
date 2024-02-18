import React, { useEffect, useState } from "react";
import "./Show_Flights.css";
import airlines_logo from "../../images/airlines_icon.png";
import { Link } from "react-router-dom";

export default function Show_Flights(props) {
  const [filteredFlightsArray, setFilteredFlightsArray] = useState([
    ...props.flightsArray,
  ]);
  const applyFilters = () => {
    setFilteredFlightsArray(
      props.flightsArray
        .filter((flight) => {
          return functionToFilterByAirlines(flight);
        })
        .filter((flight) => {
          return functionToFilterByStops(flight);
        })
        .filter((flight) => {
          return functionToFilterByDepartureTime(flight);
        })
        .filter((flight) => {
          return functionToFilterByArrivalTime(flight);
        })
        .filter((flight) => {
          return functionToFilterByPrice(flight);
        })
    );
  };

  useEffect(() => {
    applyFilters();
    console.log("In use Effect");
  }, [props]);

  // Tke onClick
  useEffect(() => {
    setFilteredFlightsArray([...props.flightsArray]);
  }, [props.flightClearFilter]);

  const functionToFilterByAirlines = (flight) => {
    if (props.filterByAirline.length > 0)
      return props.filterByAirline.includes(flight.airlines);
    return true;
  };

  const functionToFilterByStops = (flight) => {
    if (props.filterByStops.length > 0)
      return props.filterByStops.includes(flight.nonStop);
    return true;
  };

  // Define a function to convert "departure_X" values into time ranges
  function getTimeRange(departureOption) {
    switch (departureOption) {
      case "departure_1":
      case "arrival_1":
        return { start: "00:00", end: "06:00" };
      case "departure_2":
      case "arrival_2":
        return { start: "06:00", end: "12:00" };
      case "departure_3":
      case "arrival_3":
        return { start: "12:00", end: "18:00" };
      case "departure_4":
      case "arrival_4":
        return { start: "18:00", end: "24:00" };
      default:
        return null; // Handle invalid departure options
    }
  }

  // Function to check if a time is between two other times
  function isBetween(time, startTime, endTime) {
    return time >= startTime && time < endTime;
  }

  const functionToFilterByDepartureTime = (flight) => {
    if (props.filterByDepartureTime.length > 0) {
      // Iterate through each selected departure time option
      for (const departureOption of props.filterByDepartureTime) {
        // Get the corresponding time range for the current departure option
        const { start, end } = getTimeRange(departureOption);
        if (!start || !end) continue; // Skip invalid options
        // Check if the flight's departure time falls within the current time range
        if (isBetween(flight.departureTime, start, end)) {
          return true; // Include flight if it falls within the time range
        }
      }
      return false;
    }
    return true;
  };

  const functionToFilterByArrivalTime = (flight) => {
    if (props.filterByArrivalTime.length > 0) {
      // Iterate through each selected arrival time option
      for (const arrivalOption of props.filterByArrivalTime) {
        // Get the corresponding time range for the current arrival option
        const { start, end } = getTimeRange(arrivalOption);
        if (!start || !end) continue; // Skip invalid options

        // Check if the flight's arrival time falls within the current time range
        if (isBetween(flight.arrivalTime, start, end)) {
          return true; // Include flight if it falls within the time range
        }
      }
      return false;
    }
    return true;
  };

  // Define a function to convert "price_X" values into price ranges
  function getPriceRange(option) {
    switch (option) {
      case "price_1":
        return { min: 0, max: 5000 };
      case "price_2":
        return { min: 5000, max: 10000 };
      case "price_3":
        return { min: 10000, max: 15000 };
      case "price_4":
        return { min: 15000, max: Infinity }; // No upper limit for price_4
      default:
        return null; // Handle invalid options
    }
  }

  const functionToFilterByPrice = (flight) => {
    if (props.filterByPrice.length > 0) {
      // Iterate through each selected price option
      for (const priceOption of props.filterByPrice) {
        // Get the corresponding price range for the current option
        const { min, max } = getPriceRange(priceOption);
        if (!min || !max) continue; // Skip invalid options

        // Check if the flight's price falls within the current price range
        if (flight.price >= min && flight.price < max) {
          return true; // Include flight if its price falls within the range
        }
      }
      return false; // Exclude flight if it doesn't match any selected range
    }
    return true;
  };

  return (
    <>
      {filteredFlightsArray.map((flight) => (
        <div className="show_flight_details">
          <div className="airlines_logo_flight_id">
            <div className="airlines_logo">
              <img src={airlines_logo} alt="Airlines Logo"></img>
            </div>
            <div className="airlines_name_id">
              <h5>{flight.airlines}</h5>
              <p>{flight.flightId}</p>
            </div>
          </div>
          <div className="flight_time">
            <div className="departure">
              <h5>{flight.departureTime}</h5>
              <p>{flight.departure}</p>
            </div>
            <div className="time_taken">
              <h5>{flight.timeTaken}</h5>
              <hr></hr>
              <p>{flight.nonStop === 0 ? "Non Stop" : "1 Stop"}</p>
            </div>
            <div className="arrival">
              <h5>{flight.arrivalTime}</h5>
              <p>{flight.arrival}</p>
            </div>
          </div>
          <div className="flight_price">
            <div className="flight_price_value">
              <h5>{flight.price} Rs</h5>
              <p>per adult</p>
            </div>

            <div className="book_button">
              <Link to="/summary">
                <button type="button" class="btn btn-primary">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
