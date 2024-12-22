import React, { useState } from 'react';
import { MessageSquare, Send, X, Minimize2 } from 'lucide-react';

const ChatWindow = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const chatStyles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: isMinimized ? '60px' : '350px',
      height: isMinimized ? '60px' : '500px',
      backgroundColor: theme.card,
      border: `1px solid ${theme.accent}`,
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      zIndex: 1000
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: theme.secondary,
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px'
    },
    headerTitle: {
      color: theme.text,
      fontWeight: 'bold'
    },
    messageContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: '10px',
      backgroundColor: theme.background
    },
    message: {
      marginBottom: '10px',
      padding: '8px',
      borderRadius: '8px',
      maxWidth: '80%'
    },
    botMessage: {
      backgroundColor: theme.secondary,
      color: theme.text,
      alignSelf: 'flex-start'
    },
    userMessage: {
      backgroundColor: theme.accent,
      color: 'white',
      alignSelf: 'flex-end',
      marginLeft: 'auto'
    },
    inputContainer: {
      display: 'flex',
      padding: '10px',
      backgroundColor: theme.card,
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px'
    },
    input: {
      flex: 1,
      padding: '10px',
      border: `1px solid ${theme.accent}`,
      borderRadius: '5px',
      marginRight: '10px',
      backgroundColor: theme.background,
      color: 'black'
    },
    sendButton: {
      backgroundColor: theme.accent,
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);

    // Add bot response (Lorem ipsum)
    const botResponse = {
      id: messages.length + 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      sender: 'bot'
    };
    
    // Clear input and add bot response
    setInputMessage('');
    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const renderMessages = () => {
    if (isMinimized) return null;

    return (
      <div style={chatStyles.messageContainer}>
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            style={{
              ...chatStyles.message,
              ...(msg.sender === 'bot' ? chatStyles.botMessage : chatStyles.userMessage)
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
    );
  };

  const renderInput = () => {
    if (isMinimized) return null;

    return (
      <div style={chatStyles.inputContainer}>
        <input 
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          style={chatStyles.input}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button 
          onClick={handleSendMessage}
          style={chatStyles.sendButton}
        >
          <Send size={20} />
        </button>
      </div>
    );
  };

  if (!isOpen) {
    return (
      <div 
        style={{
          ...chatStyles.container, 
          width: '60px', 
          height: '60px', 
          justifyContent: 'center', 
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare size={30} color={theme.accent} />
      </div>
    );
  }

  return (
    <div style={chatStyles.container}>
      <div style={chatStyles.header}>
        <span style={chatStyles.headerTitle}>Chat Assistant</span>
        <div>
        <X 
            size={20} 
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(false)}
          />
          
        </div>
      </div>
      
      {renderMessages()}
      {renderInput()}
    </div>
  );
};

export default ChatWindow;