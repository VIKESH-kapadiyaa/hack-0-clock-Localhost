import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Platform', 'Brands', 'Publishers', 'Partner with us', 'Insights'];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
            {/* Top Utility Nav */}
            <div className="hidden lg:flex justify-end items-center px-8 py-2 text-sm text-gray-600 space-x-6 border-b border-gray-100">
                <a href="#" className="hover:text-impact-red transition-colors">About</a>
                <a href="#" className="hover:text-impact-red transition-colors">Contact</a>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-impact-red transition-colors">
                    <span>English</span>
                </div>
            </div>

            {/* Main Nav */}
            <div className="flex justify-between items-center px-6 lg:px-8 py-4">
                <div className="flex items-center space-x-12">
                    {/* Logo */}
                    <a href="#" className="flex items-center space-x-1 text-3xl font-bold tracking-tighter text-impact-dark">
                        <span className="text-impact-red relative -top-1">●</span>
                        <span>Localcollab</span>
                    </a>

                    {/* Desktop Nav Links */}
                    <nav className="hidden lg:flex space-x-8">
                        {navItems.map((item) => (
                            <div key={item} className="flex items-center space-x-1 cursor-pointer text-sm font-medium hover:text-impact-red transition-colors group">
                                <span>{item}</span>
                                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-impact-red transition-colors" />
                            </div>
                        ))}
                    </nav>
                </div>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center space-x-6">
                    <a href="#" className="text-sm font-medium hover:text-impact-red transition-colors">Sign in</a>
                    <button className="bg-[#E53E3E] hover:bg-red-700 text-white font-semibold py-2.5 px-6 rounded-full transition-colors shadow-lg shadow-red-500/30">
                        Request a demo
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-gray-600"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t p-4 flex flex-col space-y-4 shadow-xl">
                    {navItems.map((item) => (
                        <a key={item} href="#" className="font-medium text-gray-800 py-2 border-b border-gray-100 px-2">
                            {item}
                        </a>
                    ))}
                    <div className="flex flex-col space-y-4 pt-4 px-2">
                        <a href="#" className="font-medium text-gray-600">Sign in</a>
                        <button className="bg-[#E53E3E] text-white font-semibold py-3 rounded-full text-center">
                            Request a demo
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
