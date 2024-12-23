import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { articles } from './data';
import { getStyles } from './styles';

const Blog = ({ theme }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = getStyles(theme, isMobile);

  const FeaturedArticle = ({ article }) => (
    <article 
      style={styles.card}
      onClick={() => window.open(article.link, '_blank')}
    >
      <div style={styles.cardContent}>
        <div style={styles.cardMeta}>
          <span style={styles.category}>{article.category}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={isMobile ? 12 : 14} style={{ color: theme.text, opacity: 0.6 }} />
            <span style={styles.date}>{article.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={isMobile ? 12 : 14} style={{ color: theme.text, opacity: 0.6 }} />
            <span style={styles.readTime}>{article.readTime}</span>
          </div>
        </div>

        <h3 style={styles.cardTitle}>{article.title}</h3>
        <p style={styles.cardDescription}>{article.description}</p>

        <div style={styles.techContainer}>
          {article.technologies.map((tech, index) => (
            <span key={index} style={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  const ArticleCard = ({ article }) => (
    <article 
      style={styles.card}
      onClick={() => window.open(article.link, '_blank')}
    >
      <div style={styles.cardMeta}>
        <span style={styles.category}>{article.category}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={isMobile ? 12 : 14} style={{ color: theme.text, opacity: 0.6 }} />
          <span style={styles.date}>{article.date}</span>
        </div>
      </div>

      <h3 style={styles.cardTitle}>{article.title}</h3>
      <p style={styles.cardDescription}>{article.description}</p>

      <div style={styles.techContainer}>
        {article.technologies.map((tech, index) => (
          <span key={index} style={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>

      <div style={{ 
        marginTop: isMobile ? '0.75rem' : '1rem', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem' 
      }}>
        <Clock size={isMobile ? 12 : 14} style={{ color: theme.text, opacity: 0.6 }} />
        <span style={styles.readTime}>{article.readTime}</span>
      </div>
    </article>
  );

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>Blog</h2>
        <p style={styles.subtitle}>
          Exploring the latest in AI, software development, and technology trends. 
          Featured articles and insights on cutting-edge tech developments.
        </p>
      </header>

      {featuredArticles.length > 0 && (
        <div style={styles.featuredGrid}>
          {featuredArticles.map((article, index) => (
            <FeaturedArticle key={index} article={article} />
          ))}
        </div>
      )}

      <div style={styles.grid}>
        {regularArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Blog;