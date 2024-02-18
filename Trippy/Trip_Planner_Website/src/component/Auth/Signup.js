import React, { useState } from "react";
import "./AuthPage.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/user/signup", {
      username,
      email,
      phoneNo,
      gender,
      dateOfBirth,
      address,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="phoneNo">Phone Number:</label>
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNo(e.target.value)}
        />

        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
        />

        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="text"
          placeholder="Date of Birth"
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
        <p>
          Have an Account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
