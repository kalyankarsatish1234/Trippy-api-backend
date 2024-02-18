import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
// Import your Login component
import the_trip from "../../images/the_trip.png";
import MyBiz from "../../images/MyBiz.jpg";
import mytrip2 from "../../images/mytrip2.jpg";
import user1 from "../../images/user1.jpg";


import "./Header.css";

function Header() {
  const logo = window.location.origin + "/the_trip.png";
  const mybiz = window.location.origin + "/MyBiz.jpg";
  const travellug = window.location.origin + "/mytrip2.jpg";
  

  return (
    <div className="header-div">
      <div className="header-main" id="Header">
        <div className="trippy_icon">
          <Link to="/App" style={{ color: "white", textDecoration: "none" }}>
            {" "}
            <img
              className="header-img-2"
              src={the_trip}
              alt="List Your Property"
              width="30"
              height="30"
            />
          </Link>

          {/* <div className="Trippy_home"><Link to="/App">Trippy</Link></div> */}
          <Link to="/App" style={{ color: "white", textDecoration: "none" }}>
            <div className="header-Trippy">Trippy</div>
          </Link>
        </div>
        <div className="header-mybiz" style={{ marginRight: "-70px" }}>
          <Link to="https://mybiz.makemytrip.com/">
            {" "}
            <img
              className="header-img-2"
              src={MyBiz}
              alt="mybiz"
              width="30"
              height="30"
              style={{ paddingRight: "5px" }}
            />
          </Link>
          <div>
            <div className="header-mybiz-1">
              <Link
                to="https://mybiz.makemytrip.com/"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Introducing myBiz
              </Link>
            </div>
            <div className="header-mybiz-2">Business Travel Solution</div>
          </div>
        </div>
        <div className="header-mytrips" style={{ marginLeft: "50px" }}>
          <Link to="/login">
            <img
              src={mytrip2}
              alt="mybiz"
              width="30"
              height="30"
              style={{ paddingRight: "5px" }}
            />
          </Link>
          <div>
            <div className="header-mytrips-1">
              <Link
                to="/Login"
                style={{ color: "white", textDecoration: "none" }}
              >
               
                MyTrips
              </Link>
            </div>
            <div className="header-mytrips-2">Manage your bookings</div>
          </div>
        </div>
        <div className="header-login">
          {/* Replace <Link> tag with <Link> */}
          {/* <Link to="/Login" style={{ color: "white", textDecoration: "none" }}> */}
          <div className="header-Login">
            <Link to="/Login" style={{ color: "white", textDecoration: "none" }}>
              
              <img
              src={user1}
              
              width="30"
              height="30"
              style={{ paddingRight: "5px" }}
            />
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* Define Routes for Login component */}
      {/* <Routes>
        <Route>
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default Header;
