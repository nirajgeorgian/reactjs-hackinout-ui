import React from 'react'
const Banner = props => (
  <div className="banner">
    <svg width="85" height="85" id="rect1">
      <rect x="10" y="10" width="60" height="60" stroke="rgb(255,99,71)" fill="transparent" strokeWidth="15"/>
    </svg>
    <svg width="85" height="85" id="rect2">
      <rect x="10" y="10" width="25" height="25" stroke="rgb(30,144,255)" fill="transparent" strokeWidth="12"/>
    </svg>
    <svg width="85" height="85" id="rect3">
      <rect x="10" y="10" width="20" height="20" fill="rgba(255,0,0,0.7)"/>
    </svg>
    <svg width="45" height="45" id="rect4">
      <rect x="10" y="10" width="25" height="25" stroke="rgb(250,128,114)" fill="transparent" strokeWidth="12"/>
    </svg>
    <h1>30</h1>
    <h2>HOURS</h2>
    <h3 id="dodo">OF ...</h3>
    <div className="lower">
      <h3>DESIGNING / BUILDING / CODING / HACKING</h3>
      <h4>NETWORKING / FRIENDS / MENTORS / COMPETITIONS</h4>
      <h5>COFFEE / TEA / GREEN TEA / FOOD / SNACKS / SWAGS / T-SHIRTS</h5>
      <h6>SUPER FAST INTERNET / TALKS / DID WE MENTION GREEN TEA? / PRIZES /BRAND NEW APIs</h6>
      <h6 id="line">AND / A / WHOLE / LOT / MORE</h6>
    </div>
  </div>
)

export default Banner
