import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Features() {
    // Prevent impure function calls during render
    const itemEarnings = useMemo(() => {
        // use a constant multiplier instead of Math.random to strictly satisfy the linter
        return [1, 2, 3, 4, 5, 6].map(item => ({
            id: item,
            earn: 4 + (item * 2) % 10 // pseudo-random deterministic number
        }));
    }, []);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
                    >
                        The AI-native partnership platform powering global commerce
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed"
                    >
                        See which partners influence your brand's AI and LLM recommendations — and activate them in the same platform trusted by the world's leading brands.
                    </motion.p>
                </div>

                {/* The Orange Card UI */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#FF512F] to-[#F09819] flex flex-col lg:flex-row min-h-[500px]"
                >
                    {/* Left Text Side */}
                    <div className="w-full lg:w-2/5 p-12 flex flex-col justify-center text-white space-y-6">
                        <h3 className="text-6xl md:text-8xl font-black tracking-tight drop-shadow-md">
                            717M+
                        </h3>
                        <p className="text-2xl md:text-3xl font-medium tracking-tight">
                            products available to promote
                        </p>

                        <div className="mt-8 bg-white text-gray-900 p-6 rounded-xl shadow-lg flex items-center space-x-4 max-w-sm transform transition hover:-translate-y-1">
                            <div className="w-10 h-10 flex-shrink-0">
                                {/* Amazon fake logo */}
                                <div className="w-full h-full bg-orange-100 flex items-center justify-center rounded-lg font-bold text-orange-600">a</div>
                            </div>
                            <p className="font-semibold text-lg leading-tight">
                                For context, Amazon lists about <span className="font-extrabold text-black">600 million.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Product Grid Mockup */}
                    <div className="w-full lg:w-3/5 p-8 lg:p-12 relative overflow-hidden bg-orange-600/10">
                        <div className="flex justify-between items-center mb-6 text-white/90">
                            <span className="text-sm font-medium">1,334,000 Results for "Shoes"</span>
                            <button className="bg-white text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">Download</button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {itemEarnings.map((item) => (
                                <div key={item.id} className="bg-white rounded-lg p-3 shadow-md transform hover:scale-105 transition-transform duration-300">
                                    <div className="aspect-square bg-gray-100 rounded-md mb-3 relative overflow-hidden flex items-center justify-center">
                                        <span className="text-gray-300 font-bold text-4xl shadow-inner">👟</span>
                                        {/* Heart icon */}
                                        <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="h-2 w-16 bg-gray-200 rounded mb-1"></div>
                                            <div className="flex items-center space-x-1">
                                                <span className="text-xs font-bold text-gray-900 line-through text-gray-400">$80.00</span>
                                                <span className="text-xs font-bold text-orange-600">$12.00</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center text-gray-400 text-xs font-bold">+</div>
                                            <span className="text-[10px] text-gray-500 mt-1">Earn {item.earn}%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Fade out bottom to indicate scrollable content */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#ED6A19] to-transparent pointer-events-none"></div>

                        {/* Floating generic chat bubble */}
                        <div className="absolute -bottom-4 -right-4 bg-impact-red w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
