import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import doraicon from '../assets/dora-icon.png';

const API_KEY = 'AIzaSyBp2IOmCwNWm1WOeH3MAtNeoRxH5rkyCSI';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage = { text: inputMessage, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);

        try {
            console.log('Sending message:', inputMessage);
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: inputMessage
                        }]
                    }]
                })
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.error('API Error:', errorData);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API Response:', data);

            if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
                const botMessage = {
                    text: data.candidates[0].content.parts[0].text,
                    sender: 'bot'
                };
                setMessages(prev => [...prev, botMessage]);
            } else {
                throw new Error('Invalid response format from API');
            }
        } catch (error) {
            console.error('Error details:', error);
            
            let errorMessage = 'Sorry, I encountered an error. ';
            if (error.message) {
                errorMessage += error.message;
            }
            
            setMessages(prev => [...prev, { 
                text: errorMessage,
                sender: 'bot' 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
            >
                {isOpen ? <AiOutlineClose size={28} /> : <BsChatDots size={28} />}
            </button>

            {isOpen && (
                <div className="absolute bottom-16 right-0 w-[380px] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slideUp">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-5 rounded-t-2xl">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white p-1">
                                <img src={doraicon} alt="Doraemon" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Doraemon AI</h3>
                                <p className="text-sm text-blue-100">Always here to help!</p>
                            </div>
                        </div>
                    </div>

                    <div 
                        ref={chatContainerRef}
                        className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50"
                    >
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {message.sender === 'bot' && (
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <img src={doraicon} alt="Doraemon" className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div
                                    className={`max-w-[75%] p-4 rounded-2xl ${
                                        message.sender === 'user'
                                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none'
                                            : 'bg-white shadow-md text-gray-800 rounded-bl-none'
                                    }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-end gap-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden">
                                    <img src={doraicon} alt="Doraemon" className="w-full h-full object-cover" />
                                </div>
                                <div className="bg-white shadow-md p-4 rounded-2xl rounded-bl-none animate-pulse">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-white border-t border-gray-100 shadow-lg">
                        <div className="flex items-center gap-3">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me anything..."
                                className="flex-1 p-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={isLoading || !inputMessage.trim()}
                                className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white rounded-xl p-3 transition-all transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                            >
                                <AiOutlineSend size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
