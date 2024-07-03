import React from 'react';
import './WhatWeDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShieldAlt, faBriefcase, faHeartbeat, faHandPeace, faGlobe, faGraduationCap } from '@fortawesome/free-solid-svg-icons'; 

const iconStyle = {
  backgroundColor: 'rgb(225, 178, 23)',
  padding: '10px',
  borderRadius: '50%',
  marginRight: '10px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const WhatWeDo = () => {
  return (
    <div className="do-container">
      <h2>What We Do</h2>
      <p>Most of the projects, programs and activities undertaken by the organization generally</p>
      <p>associated with efforts in People with Special Needs programs.</p>
      <div className="do-sections">
        <div className="do-section">
          <span style={iconStyle}>
            <FontAwesomeIcon icon={faShieldAlt} size="lg" />
          </span>
          <h5>Social Protection Interventions for People with Special Needs (PWSNs)</h5>
          <p>The social protection program focuses on providing support to people with special needs and adolescent girls and young women.</p>
          <button>READ MORE</button>
        </div>
        <div className="do-section">
          <span style={iconStyle}>
            <FontAwesomeIcon icon={faBriefcase} size="lg" />
          </span>
          <h5>Economic Empowerment Related Activities</h5>
          <p>The economic empowerment program aims to provide people with the opportunities and resources they need to achieve sustainable growth and success.</p>
          <button>READ MORE</button>
        </div>        
        <div className="do-section">
          <span style={iconStyle}>
            <FontAwesomeIcon icon={faHeartbeat} size="lg" />
          </span>
          <h5>Improving Health</h5>
          <p>The health program focuses on improving access to quality healthcare for all.</p>
          <button>READ MORE</button>
        </div>        
        <div className="do-section">
          <span style={iconStyle}>
            <FontAwesomeIcon icon={faHandPeace} size="lg" />
          </span>
          <h5>Actions to End Violence Against Women and Children (VAWC)</h5>
          <p>The goal of this program is to create a safer and more just world for women and children by addressing and ending violence against them.</p>
          <button>READ MORE</button>
        </div>        
        <div className="do-section">
          <span style={iconStyle}>
            <FontAwesomeIcon icon={faGlobe} size="lg" />
          </span>
          <h5>Preventing Human Trafficking</h5>
          <p>The human trafficking prevention program works to protect the vulnerable and ensure their rights are respected</p>
          <button>READ MORE</button>
        </div>        
        <div className="do-section">
          <span style={iconStyle}>
            <FontAwesomeIcon icon={faGraduationCap} size="lg" />
          </span>
          <h5>Improving Education</h5>
          <p>The education program aims to transform lives through learning and development.</p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
