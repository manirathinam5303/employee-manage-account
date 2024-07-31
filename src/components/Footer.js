import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footers_1">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h1>Products</h1>
            <a href="#"><p>Cloths</p></a>
            <a href="#"><p>Electronics</p></a>
            <a href="#"><p>Rings</p></a>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h1>Community</h1>
            <a href="#"><p>Developer</p></a>
            <a href="#"><p>Agencies</p></a>
            <a href="#"><p>Events</p></a>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h1>Help</h1>
            <a href="#"><p>Contact Us</p></a>
            <a href="#"><p>Help Center</p></a>
            <a href="#"><p>Sales Talk</p></a>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h1>Company</h1>
            <a href="#"><p>Our Story</p></a>
            <a href="#"><p>Career</p></a>
            <a href="#"><p>News Room</p></a>
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: 'white' }} />
    </div>
  );
};

export default Footer;
