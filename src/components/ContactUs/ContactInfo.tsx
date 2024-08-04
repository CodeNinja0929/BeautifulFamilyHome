"use client";

import React from "react";

// Social Links
const socialLinksData = [
  {
    id: "1",
    icon: "ri-facebook-line",
    link: "https://www.facebook.com/",
  },
  {
    id: "2",
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/",
  },
  {
    id: "3",
    icon: "ri-twitter-line",
    link: "https://www.twitter.com/",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <>
      <ul className="contact-info-list">
        <li>
          <span>ADDRESS</span>
          704 El Monte Rd, El Cajon, CA 92020
        </li>

        <li>
          <span>CONTACT</span>
          <a href="mailto:helltraz@gmail.com">colinrico872@gmail.com</a>
          <a href="tel:15551234567">+1 (801) 783-1906</a>
        </li>

        <li>
          <span>SOCIAL MEDIA</span>

          {socialLinksData && (
            <ul className="social">
              {socialLinksData &&
                socialLinksData.map((value, i) => (
                  <li key={i}>
                    <a href={value.link} target="_blank">
                      <i className={value.icon}></i>
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default ContactInfo;
