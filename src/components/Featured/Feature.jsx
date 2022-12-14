import React from 'react'
import "./Feature.css";

const Feature = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
      <img
        src="https://odishabytes.com/wp-content/uploads/2022/01/Bhubaneswar.jpeg"
        alt=""
        className="featuredImg"
      />
      <div className="featuredTitles">
        <h1>Bhubaneshwar</h1>
        <h2>1200 properties</h2>
      </div>
    </div>
    
    <div className="featuredItem">
      <img
        src="https://img.atlasobscura.com/txlE_UFn3Ve4hAPSAhaSj0wZtWNM8WrAcSOiWf5P_lQ/rs:fill:580:580:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy85Y2I5/OTU3YS00YjFiLTQ0/OWItOTA1My00ZTg4/OTQwNzM2MzdhNTdm/NzA5OGVlYTQ0ZWFh/ZmRfRUg5NkNSLmpw/Zw.jpg"
        alt=""
        className="featuredImg"
      />
      <div className="featuredTitles">
        <h1>Puri</h1>
        <h2>350 properties</h2>
      </div>
    </div>
    <div className="featuredItem">
      <img
        src="https://cuttackheritage.com/wp-content/uploads/2020/05/cuttack-596x430-1.jpg"
        alt=""
        className="featuredImg"
      />
      <div className="featuredTitles">
        <h1>Cuttack</h1>
        <h2>199 properties</h2>
      </div>
    </div>
  </div>
  );
};

export default Feature