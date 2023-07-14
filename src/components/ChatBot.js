import React, { useState, useEffect, useRef } from 'react';

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(true);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container when chat history updates
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSendMessage = () => {
    if (userMessage) {
      const userChat = { user: true, message: userMessage };
      const botChat = { user: false, message: 'Thank you for your message! Our team will get back to you soon.' };
      setChatHistory((prevChatHistory) => [...prevChatHistory, userChat, botChat]);
      setUserMessage('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    const savedChatHistory = localStorage.getItem('chatHistory');
    if (savedChatHistory) {
      setChatHistory(JSON.parse(savedChatHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, [chatHistory]);

  const handleToggleMinimize = () => {
    setIsMinimized((prevIsMinimized) => !prevIsMinimized);
  };

  return (
    <div className={`chatbot-container ${isMinimized ? 'minimized' : ''}`}>
      <div className="chatbot-header">
        <h6>Chatbot</h6>
        <button className="minimize-button" onClick={handleToggleMinimize}>
          {isMinimized ? '+' : '-'}
        </button>
      </div>
      <div className="chatbot-body" ref={chatContainerRef}>
        {!isMinimized && (
          <>
            {chatHistory.map((chat, index) => (
              <div className={chat.user ? 'user-message' : 'bot-message'} key={index}>
                {chat.message}
              </div>
            ))}
          </>
        )}
      </div>
      {!isMinimized && (
        <div className="chatbot-footer">
          <input
            type="text"
            placeholder="Type your message..."
            value={userMessage}
            onChange={(event) => setUserMessage(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;