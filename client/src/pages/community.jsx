import React from 'react';
import '../styles/community.css';
import PS from "../assets/PS.jpg";
import ACES from "../assets/ACES.jpg";
import BS from "../assets/BS.jpg";
import CE from "../assets/CE.jpg";
import EE from "../assets/EE.jpg";
import HM from "../assets/HM.jpg";
import IT from "../assets/IT.jpg";
import JBEA from "../assets/JBEA.jpg";
import JPIA from "../assets/JPIA.jpg";
import JPSME from "../assets/JPSME.jpg";
import MARINE from "../assets/Marine.jpg";

const Community = () => {
  const departments = [
    { name: 'WIT - Philippine Society of Information Technology Students', imgSrc: IT, link: 'https://web.facebook.com/wititdepartment' },
    { name: 'WIT - Junior Philippine Society of Mechanical Engineering', imgSrc: JPSME, link: 'https://web.facebook.com/jpsmeWIT?_rdc=1&_rdr#' },
    { name: 'WIT - Philippine Institute of Civil Engineers', imgSrc: CE, link: 'https://web.facebook.com/profile.php?id=100094618186524&_rdc=1&_rdr#' },
    { name: 'WIT - Institute of Integrated Electrical Engineers', imgSrc: EE, link: 'https://web.facebook.com/profile.php?id=100063736640024&_rdc=1&_rdr#' },
    { name: 'WIT - Association of Computer Engineering Students', imgSrc: ACES, link: 'https://web.facebook.com/CompEWIT?_rdc=1&_rdr#' },
    { name: 'WIT - Hospitality Management', imgSrc: HM, link: 'https://web.facebook.com/profile.php?id=100086582104841&_rdc=1&_rdr#' },
    { name: 'WIT - Junior Philippine Institute of Accountants', imgSrc: JPIA, link: 'https://web.facebook.com/JPIA.WITchapter?_rdc=1&_rdr#' },
    { name: 'WIT - Political Science Students Republic', imgSrc: PS, link: 'https://web.facebook.com/PSSRofWIT?_rdc=1&_rdr#' },
    { name: 'WIT - Biological Society', imgSrc: BS, link: 'https://web.facebook.com/WITBsBio?_rdc=1&_rdr#' },
    { name: 'WIT - College of Maritime Education', imgSrc: MARINE, link: 'https://web.facebook.com/wit.marino?_rdc=1&_rdr#' },
    { name: 'WIT - Business Administration', imgSrc: JBEA, link: 'https://web.facebook.com/witxjbea?_rdc=1&_rdr#' },
  ];

  return (
    <div className="community-container">
      <h1>Departments</h1>
      <div className="department-grid">
        {departments.map((dept, index) => (
          <a href={dept.link} className="department-card" key={index} target="_blank" rel="noopener noreferrer">
            <img src={dept.imgSrc} alt={dept.name} />
            <p>{dept.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Community;