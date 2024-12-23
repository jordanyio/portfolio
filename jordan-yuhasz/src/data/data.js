// data.js
export const personalInfo = {
    name: "Jordan Yuhasz",
    title: "Software Engineer | AI Developer | Data Analyst",
    about: "Hello! I'm Jordan, a software engineer specializing in AI/ML applications and full-stack development. My expertise spans building enterprise-grade AI solutions, developing scalable web APIs using .NET, Java, and Go, and creating sophisticated front-end applications. I have extensive experience with modern JavaScript frameworks including React and Vue, enterprise UI development with Kendo, and browser extension engineering.",
    profilePicUrl: "/JordanYuhasz.jpg"
  };
  
  export const workHistory = [
    {
      company: "Finys",
      position: "Software Engineer",
      period: "July 2024 - Present",
      description: "My current role at Finys includes working on new AI features, maintaining their flagship web application, and managing/leading a project focused on building automation tools for the company."
    },
    {
      company: "United Wholesale Mortgage",
      position: "AI Software Developer",
      period: "July 2023 - July 2024",
      description: "At UWM, I was involved in building a very fun project called ChatUWM. This app allowed users at the company to access AI assistants like Chat gpt's 3.5 and 4.0 llm's, without exposing proprietary company data to public sources like OpenAI. We also built a RAG query system, that allowed users to ask domain specific questions about mortgage products and industry questions, where the AI was able to source an answer by essentially reading thousands of Fanny Mae and Freddy Mac documents for the user, in seconds."
    },
    {
        company: "Avant-Garde Capital",
        position: "Research Development Software Engineer",
        period: "July 2022 - July 2024",
        description: "In my postition at AG Cap, I spent time automating data collection and trading engines for a firm that was focused on a variety of arbitrage trading strategies in the stock market. I spent lots of time doing data anaylsis, training machine learning models, and building decision making systems."
      }
  ];
  
  export const languages = [
    { name: "Python", level: "Advanced" },
    { name: "Go", level: "Advanced" },
    { name: "C#", level: "Advanced" },
    { name: "Java", level: "Advanced" },
    { name: "JavaScript", level: "Expert" },
    { name: "React", level: "Expert" },
    { name: "Kendo", level: "Expert" },
    { name: "Azure", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "SQL", level: "Intermediate" }
  ];
  
  
  
  export const themes = {
    blue: {
      primary: '#1976d2',
      secondary: '#e3f2fd',
      accent: '#3b82f6',
      background: 'linear-gradient(180deg,rgba(230, 242, 255, 0.08) 0%,rgba(179, 217, 255, 0.39) 30%,rgba(138, 196, 255, 0.53) 70%,rgba(94, 177, 255, 0.63) 100%)',
      card: 'white',
      text: '#333',
      textLight: '#666',
      inputText: '#333'
    },
    green: {
      primary: '#2e7d32',
      secondary: '#e8f5e9',
      accent: '#4caf50',
      background: 'linear-gradient(180deg,rgba(232, 245, 233, 0.14) 0%,rgba(165, 214, 167, 0.41) 30%, #81c784 70%,rgba(102, 187, 106, 0.52) 100%)',
      card: 'white',
      text: '#333',
      textLight: '#666',
      inputText: '#333'
    },
    red: {
        primary: '#c62828', // Deep red
        secondary: '#ffcdd2', // Light pink-red
        accent: '#d32f2f', // Vibrant red
        background: 'linear-gradient(180deg, rgba(255, 138, 128, 0.2) 0%, rgba(255, 82, 82, 0.4) 30%, rgba(211, 47, 47, 0.7) 70%, rgba(183, 28, 28, 0.9) 100%)',
        card: 'white',
        inputText: '#333',
        text: '#212121', // Very dark gray, almost black
        textLight: '#424242' // Slightly lighter gray
      },
    dark: {
      primary: '#90caf9',
      secondary: '#323232',
      accent: '#64b5f6',
      background: 'linear-gradient(180deg, #1e1e1e 0%, #292929 30%, #353535 70%, #3e3e3e 100%)',
      card: '#2a2a2a',
      text: '#ffffff',
      textLight: '#b0b0b0',
      inputText: '#ffffff'
    },
    light: {
        primary: '#3f51b5', // Indigo primary color
        secondary: '#f5f5f5', // Very light gray
        accent: '#2196f3', // Blue accent
        background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)', // White to light gray
        card: 'white',
        text: '#333333', // Dark gray for text
        textLight: '#666666', // Lighter gray for secondary text
        inputText: '#333333' // Input text color
      },
    terminal: {
        primary: '#00ff00', // Classic terminal green
        secondary: '#004400', // Dark green background accent
        accent: '#00cc00', // Slightly brighter green for highlights
        background: 'linear-gradient(180deg, #000000 0%, #001100 30%, #002200 70%, #000d00 100%)',
        card: '#000d00', // Very dark green, almost black
        text: '#00ff00', // Bright green text
        textLight: '#00cc00', // Slightly dimmer green for secondary text
        // Optional: Add a subtle noise or scanline effect for extra retro feel
        backgroundImage: 'linear-gradient(rgba(0,255,0,0.05) 50%, transparent 50%), radial-gradient(rgba(0,255,0,0.05) 0%, transparent 70%)'
      }
  };