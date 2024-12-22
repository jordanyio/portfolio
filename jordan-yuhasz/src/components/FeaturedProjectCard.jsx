// FeaturedProjectCard.jsx
import React from 'react';
import { Github, Link as LinkIcon } from 'lucide-react';
import YouTubePlayer from './YouTubePlayer';

import './Portfolio.css'

const FeaturedProjectCard = ({ project, style }) => {
    const {
      title,
      description,
      technologies,
      videoUrl,
      videoStartTime = 0,
      videoEndTime = 30
    } = project;
  
    return (
        <div className="project-card featured-project-card" style={style.projectCard}>
        <h3 className="project-title">{title}</h3>
        <div className="tech-stack">
          {technologies.map((tech, i) => (
            <span key={i} className="tech-tag" style={style.techTag}>  
              {tech}
            </span>
          ))}
        </div>
        <div className="video-container">
          <YouTubePlayer 
            videoUrl={videoUrl}
            startTime={videoStartTime}
            endTime={videoEndTime}
          />
        </div>
        <p className="project-description" style={style.textLight}>
          {description}
        </p>
      </div>
    );
  };

export default FeaturedProjectCard;