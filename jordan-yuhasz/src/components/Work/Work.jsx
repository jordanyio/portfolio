import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, PlayCircle } from 'lucide-react';
import { projects } from './data';
import { getStyles } from './styles';
import PDFViewer from './PDFViewer';

const Work = ({ theme }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = getStyles(theme, isMobile);

  const YouTubePlayer = ({ videoUrl, startTime, endTime }) => {
    const extractVideoId = (url) => {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[7].length === 11) ? match[7] : false;
    };

    const videoId = extractVideoId(videoUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${startTime}&end=${endTime}&autoplay=0`;

    return (
      <div style={styles.videoContainer}>
        <iframe
          style={styles.iframe}
          src={embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };

  const NotebookViewer = ({ notebookUrl }) => {
    const [pdfError, setPdfError] = useState(false);

    if (!notebookUrl || pdfError) {
      return null;
    }

    return (
      <div style={styles.notebookContainer}>
        <PDFViewer 
          file={notebookUrl} 
          theme={theme} 
          onError={() => setPdfError(true)}
          isMobile={isMobile}
        />
      </div>
    );
  };

  const ProjectCard = ({ project }) => (
    <div 
      style={{
        ...styles.card,
        ...(project.featured ? styles.featuredCard : {})
      }}
    >
      {project.featured && project.videoUrl && (
        <YouTubePlayer 
          videoUrl={project.videoUrl}
          startTime={project.videoStartTime}
          endTime={project.videoEndTime}
        />
      )}
      
      {project.featured && project.type === 'notebook' && project.notebookUrl && (
        <NotebookViewer notebookUrl={project.notebookUrl} />
      )}
      
      <h3 style={styles.cardTitle}>{project.title}</h3>
      <p style={styles.cardDescription}>{project.description}</p>
      
      <div style={styles.techContainer}>
        {project.technologies.map((tech, index) => (
          <span key={index} style={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>
      
      <div style={styles.linksContainer}>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <ExternalLink size={isMobile ? 16 : 18} />
            <span>Live Demo</span>
          </a>
        )}
        {/* {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.link,
              color: theme.text,
              opacity: 0.6
            }}
          >
            <Github size={isMobile ? 16 : 18} />
            <span>Source</span>
          </a>
        )} */}
        {project.videoUrl && !project.featured && (
          <button 
            onClick={() => window.open(project.videoUrl, '_blank')}
            style={{
              ...styles.link,
              color: theme.text,
              opacity: 0.6,
              border: 'none',
              background: 'none',
              cursor: 'pointer'
            }}
          >
            <PlayCircle size={isMobile ? 16 : 18} />
            <span>Watch Demo</span>
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>Work</h2>
        <p style={styles.subtitle}>
          A collection of projects that I have worked on, showcasing my experience in AI development, 
          web applications, and technical solutions.
        </p>
      </header>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Work;