import React from 'react';
import { Linkedin, Instagram, Facebook, Youtube, Rss } from 'lucide-react';

export default function Footer() {
    const footerLinks = [
        {
            title: "Platform",
            links: ["Performance", "Creator", "Advocate", "Discover and Recruit", "Contract and Pay", "Track", "Engage", "Protect and Monitor", "Optimize"]
        },
        {
            title: "For Brands",
            links: ["Affiliate marketing", "Influencer marketing", "Creator Edit", "Managed services: Influencer", "Referral marketing", "Amazon Seller", "Business development", "Mobile partnerships", "Saas partnership marketing", "Analytics and attribution", "Services"]
        },
        {
            title: "For Publishers",
            links: ["Overview", "Affiliates", "Influencers and creators", "Mobile apps", "Content publishers", "Premium news and media publishers"]
        },
        {
            title: "Insights",
            links: ["Resource hub", "Partnerships Experience Academy", "The Partnership Economy", "Events", "Partnerships Experience (iPX) Event", "Influencer & creator directory", "Glossary"]
        },
        {
            title: "Partner with Localcollab",
            links: ["Agency partner program", "Agency directory", "Technology partners", "Technology partners directory", "Referral partner program", "Developer portal"]
        },
        {
            title: "About",
            links: ["About Localcollab", "Why partnerships", "Contact", "Careers", "Leadership", "Awards", "Sustainability", "Help center", "Security and privacy"]
        }
    ];

    return (
        <footer className="bg-impact-dark text-white pt-20 pb-10">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Main Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
                    {footerLinks.map((column, idx) => (
                        <div key={idx}>
                            <h4 className="font-bold text-lg mb-6 tracking-wide">{column.title}</h4>
                            <ul className="space-y-4">
                                {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm hover:underline decoration-1 underline-offset-4">
                                            {link}
                                            {link === 'Creator Edit' && (
                                                <span className="ml-2 bg-[#E53E3E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">New!</span>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter & Socials */}
                <div className="border-t border-gray-800 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">

                    <div className="w-full md:w-1/2">
                        <h4 className="font-bold text-lg mb-4">Sign up for our monthly newsletter</h4>
                        <form className="flex space-x-4 max-w-md">
                            <input
                                type="email"
                                placeholder="Business email"
                                className="bg-transparent border border-gray-600 rounded-full px-6 py-3 w-full focus:outline-none focus:border-white text-sm"
                            />
                            <button type="submit" className="bg-white text-black font-semibold rounded-full px-8 py-3 hover:bg-gray-200 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="flex space-x-4 pr-6 border-r border-gray-800">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-gray-400">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-gray-400">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-gray-400">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-gray-400">
                                <Youtube size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-gray-400">
                                <Rss size={18} />
                            </a>
                        </div>

                        <div className="flex space-x-4">
                            <button className="bg-black border border-gray-700 hover:border-gray-500 rounded-lg px-4 py-2 flex items-center space-x-2 transition-colors">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                                <div className="text-left">
                                    <div className="text-[10px] leading-tight text-gray-400">Download on the</div>
                                    <div className="text-sm font-semibold leading-tight">App Store</div>
                                </div>
                            </button>

                            <button className="bg-black border border-gray-700 hover:border-gray-500 rounded-lg px-4 py-2 flex items-center space-x-2 transition-colors">
                                {/* Google Play SVG Icon simplified */}
                                <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor"><path fill="#4caf50" d="M43.2,38.6c-4.4,4.6-6.6,11.2-6.6,19.3v396.4c0,8.1,2.2,14.7,6.6,19.3l1.1,1.1L248.8,270.3v-2.8L44.2,37.5L43.2,38.6z" /><path fill="#ffc107" d="M326.6,348.1l-77.8-77.8v0l0,0l77.8-77.8l2.3,1.3l91.9,52.2c26.2,14.9,26.2,39.3,0,54.2l-91.9,52.2L326.6,348.1z" /><path fill="#f44336" d="M326.6,348.1L248.8,270.3L44.2,474.7c8.5,9,24,9.4,43.2-1.5l239.1-125.1L326.6,348.1z" /><path fill="#2196f3" d="M326.6,163.9L248.8,241.7L44.2,37.3C25.1,26.3,9.5,26.8,1.1,35.8L326.6,163.9z" /></svg>
                                <div className="text-left">
                                    <div className="text-[10px] leading-tight text-gray-400">GET IT ON</div>
                                    <div className="text-sm font-semibold leading-tight">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-white tracking-tighter relative -top-0.5">
                            <span className="text-[#E53E3E] mr-1">●</span>Localcollab
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="hover:text-white transition-colors">Legal policies {'>'}</a>
                        <span>|</span>
                        <span>© 2026 Localcollab, Inc. All rights reserved.</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
