import React from 'react';
import './Community.css';

const Community = () => {
  const departments = [
    { name: 'WT - Philippine Society of Information Technology Students', imgSrc: 'link_to_image1' },
    { name: 'WT - Junior Philippine Society of Mechanical Engineering', imgSrc: 'link_to_image2' },
    { name: 'WT - Philippine Institute of Civil Engineers', imgSrc: 'link_to_image3' },
    { name: 'WT - Institute of Integrated Electrical Engineers', imgSrc: 'link_to_image4' },
    { name: 'WT - Association of Computer Engineering Students', imgSrc: 'link_to_image5' },
    { name: 'WT - Hospitality Management', imgSrc: 'link_to_image6' },
    { name: 'WT - Junior Philippine Institute of Accountants', imgSrc: 'link_to_image7' },
    { name: 'WT - Political Science Students Republic', imgSrc: 'link_to_image8' },
    { name: 'WT - Biological Society', imgSrc: 'link_to_image9' },
    { name: 'WT - College of Maritime Education', imgSrc: 'link_to_image10' },
    { name: 'WT - Business Administration', imgSrc: 'link_to_image11' },
    { name: 'WT - Consolidation of Recognized Engineering Departmental Organization', imgSrc: 'link_to_image12' }
  ];

  return (
    <div className="community-container">
      <h1>Departments</h1>
      <div className="department-grid">
        {departments.map((dept, index) => (
          <div className="department-card" key={index}>
            <img src={dept.imgSrc} alt={dept.name} />
            <p>{dept.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;