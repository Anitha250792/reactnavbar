import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home" className="section home">
        <h1>Home Section</h1>
        <p>Welcome to our React site! Scroll down to explore the sections.</p>
        <div className="cards">
          <div className="card">Feature 1</div>
          <div className="card">Feature 2</div>
          <div className="card">Feature 3</div>
        </div>
      </section>

      <section id="about" className="section about">
        <h1>About Us</h1>
        <p>We create amazing web experiences with React and CSS.</p>
        <div className="cards">
          <div className="card">Our Mission</div>
          <div className="card">Our Vision</div>
        </div>
      </section>

      <section id="services" className="section services">
        <h1>Our Services</h1>
        <p>Web development, UI/UX design, and React applications.</p>
        <div className="cards">
          <div className="card">Web Development</div>
          <div className="card">UI/UX Design</div>
          <div className="card">Mobile Apps</div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h1>Contact Us</h1>
        <p>Email: contact@mybrand.com | Phone: +123-456-7890</p>
        <div className="cards">
          <div className="card">Location: USA</div>
          <div className="card">Support: 24/7</div>
        </div>
      </section>
    </div>
  );
}

export default App;
