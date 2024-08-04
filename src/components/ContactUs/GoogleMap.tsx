"use client";

import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="map-area">
        <div className="container">
          <iframe src="https://www.google.com/maps/place/704+El+Monte+Rd,+El+Cajon,+CA+92020,+USA/@32.8043053,-116.9787714,17z/data=!3m1!4b1!4m6!3m5!1s0x80d9582ea844093d:0xf2a90e64c1954fdb!8m2!3d32.8043053!4d-116.9787714!16s%2Fg%2F11c25psndy?entry=ttu"></iframe>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
