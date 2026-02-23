import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Communities.', 'Creators.', 'Affiliates.', 'Referrals.'];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-hero-gradient flex items-center pt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10 w-full">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-white z-20 space-y-6 md:space-y-8 mt-12 lg:mt-0">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        One platform. <br className="hidden md:block" />
                        All partnerships. <br className="hidden md:block" />
                        AI-powered. <br />
                        <span className="relative inline-flex h-[1.2em] w-full overflow-hidden align-bottom">
                            <AnimatePresence mode="popLayout">
                                <motion.span
                                    key={index}
                                    initial={{ y: '100%', opacity: 0 }}
                                    animate={{ y: '0%', opacity: 1 }}
                                    exit={{ y: '-100%', opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute"
                                >
                                    {words[index]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl font-medium max-w-xl text-white/90 leading-relaxed">
                        The unified platform to manage creators, affiliates, and referrals — powered by $100B+ in partnership data and AI that turns discovery into performance.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <button className="bg-black text-white hover:bg-gray-800 font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg">
                            Request a demo
                        </button>
                        <button className="bg-white text-black hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg shadow-xl shadow-white/10">
                            Get started now
                        </button>
                    </div>

                    <div className="flex items-center space-x-4 pt-8 border-t border-white/20">
                        <div className="flex -space-x-2">
                            {/* Simulating G2 Rating Logo */}
                            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-2xl pr-4 border-r border-white/30">
                                G<span className="text-sm">2</span>
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-2xl">#1 <span className="text-sm font-normal text-white/80 uppercase tracking-wide">affiliate & influencer </span></p>
                            <p className="text-sm text-white/80 font-medium">ROI platform</p>
                        </div>
                    </div>
                </div>

                {/* Right Content (The Orbital Graphics) */}
                <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px] mt-16 lg:mt-0 flex justify-center items-center">
                    {/* The orbits */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-white/20 absolute"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                            className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-white/30 absolute"
                        />
                    </div>

                    {/* Mock Floating Elements */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute left-0 top-1/4 bg-white p-4 rounded-full shadow-2xl z-20 flex items-center space-x-2"
                    >
                        <div className="w-8 h-8 bg-green-500 rounded-sm"></div>
                        <span className="font-bold text-xl text-black">shopify</span>
                    </motion.div>

                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="absolute right-0 bottom-1/4 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center justify-center"
                    >
                        <span className="font-bold text-3xl text-blue-500 font-serif italic">Canva</span>
                    </motion.div>

                    {/* Center Chat Interaction Mockup */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative z-30 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-6 w-[320px] md:w-[380px] origin-center -bottom-10 lg:bottom-auto lg:right-[-50px]"
                    >
                        <div className="flex -space-x-2 mb-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`avatar ${i}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome to Localcollab! 👋</h3>
                        <p className="text-gray-600 mb-6 text-sm">What can we help you with today?</p>

                        <div className="space-y-3">
                            <button className="w-full bg-[#E53E3E] hover:bg-red-700 text-white font-medium py-3 rounded-md transition-colors text-sm shadow-md flex justify-center items-center space-x-2">
                                <span>Get a demo</span>
                            </button>
                            <button className="w-full bg-[#E53E3E] hover:bg-red-700 text-white font-medium py-3 rounded-md transition-colors text-sm shadow-md flex justify-center items-center space-x-2">
                                <span>See a sneak peek of Localcollab 👀</span>
                            </button>
                            <button className="w-full bg-[#E53E3E] hover:bg-red-700 text-white font-medium py-3 rounded-md transition-colors text-sm shadow-md">
                                Customer support
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-4 text-center leading-tight">
                            This chat utilizes automated software and a transcript will be kept by us & our service providers. If you provide your personal info, you consent to being contacted.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Subtle bottom gradient map for smooth scrolling transition */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>
    );
}
