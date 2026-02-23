import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';
import { sendMessageToAI } from '../services/chatService';

export default function GlobalChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
        { role: 'assistant', content: "Hi there! I'm the Localcollab AI. What can I help you find today? 👋" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        const apiMessages = [...messages, { role: 'user' as const, content: userMessage }];

        try {
            // Calls Groq -> OpenRouter fallback service
            const botReply = await sendMessageToAI(apiMessages);
            setMessages(prev => [...prev, { role: 'assistant', content: botReply }]);
        } catch {
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I ran into an error connecting to our systems. Please try again soon." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl w-[320px] md:w-[380px] h-[500px] flex flex-col mb-4 overflow-hidden border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-[#ED2939] p-4 text-white flex justify-between items-center rounded-t-2xl shadow-md z-10">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl relative">
                                    <span className="relative z-10">L</span>
                                    <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-30"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">Localcollab Sales</h3>
                                    <span className="text-xs text-white/80">Online | AI Powered</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-black/10 p-1.5 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 flex flex-col pt-6">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${msg.role === 'user' ? 'bg-[#ED2939] text-white rounded-tr-sm' : 'bg-white text-gray-800 border border-gray-100 rounded-tl-sm'}`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm p-4 shadow-sm flex space-x-2 items-center">
                                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Box */}
                        <div className="p-3 bg-white border-t border-gray-100 shadow-sm relative z-10">
                            <form onSubmit={handleSend} className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask a question..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-[#ED2939] focus:ring-1 focus:ring-[#ED2939] text-sm transition-all"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#ED2939] text-white p-2 rounded-full disabled:opacity-50 disabled:bg-gray-300 transition-all hover:bg-red-700 hover:shadow-md"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                            <div className="text-center mt-2">
                                <span className="text-[10px] text-gray-400 font-medium tracking-wide shadow-black">Powered by Groq & LLaMA 3</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Floating Toggle Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setIsOpen(true)}
                        className="bg-[#ED2939] hover:bg-red-700 w-16 h-16 rounded-full flex items-center justify-center shadow-red-500/50 shadow-2xl text-white outline-none cursor-pointer"
                    >
                        <MessageCircle size={28} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
