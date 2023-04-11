import React from "react";
import "./Home.scss";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import loginImg from "../../assets/login.svg";

const Home = () => {
  return (
    <div>
      <section className="container hero">
        <div className="hero-text">
          <h2>Mern Stack Authentication System</h2>
          <p>Authentication and Authorization using MERN stack.</p>
          <p>
            Implemented User Registration, Login, Password Reset, Social Login,
            User Permission, Email Notification, etc.
          </p>
          <div className="hero-buttons --flex-start">
            <button className="--btn --btn-danger">Register</button>
            <button className="--btn --btn-primary">Login</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={loginImg} alt="Auth" />
        </div>
      </section>
    </div>
  );
};

export default Home;
