import React, { useState } from 'react';
import { X } from 'lucide-react';

import { skills } from './SkillsData'
import { getStyles } from './Styles';



const Skills = ({ theme }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  
  const styles = getStyles(theme);
  
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>Skills & Expertise</h2>
      </header>

      <div style={styles.grid}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={styles.skillCard}
            className="skill-card"
            onClick={() => setSelectedSkill(skill)}
          >
            <h3 style={styles.skillName}>{skill.name}</h3>
            <p style={styles.skillLevel}>{skill.level}</p>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div style={styles.modal} onClick={() => setSelectedSkill(null)}>
          <div 
            style={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
            className="modal-content"
          >
            <button
              style={styles.closeButton}
              onClick={() => setSelectedSkill(null)}
            >
              <X size={24} />
            </button>

            <h3 style={styles.modalTitle}>{selectedSkill.name}</h3>
            <p style={styles.modalLevel}>{selectedSkill.level}</p>
            
            <p style={styles.description}>
              {selectedSkill.description}
            </p>

            <ul style={styles.detailsList}>
              {selectedSkill.details.map((detail, index) => (
                <li key={index} style={styles.detailItem}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;