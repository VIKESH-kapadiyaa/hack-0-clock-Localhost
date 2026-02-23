import React from 'react';

const brands = [
    "Microsoft", "Shopify", "Adidas", "Ticketmaster", "L'Oréal", "Canva", "BuzzFeed", "HSBC", "Lenovo", "Walmart"
];

export default function BrandsMarquee() {
    return (
        <section className="w-full bg-white py-12 border-b border-gray-100 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-6 mb-8 text-center text-gray-500 font-medium tracking-wide text-sm uppercase">
                Powering the world's leading brands
            </div>

            {/* Marquee Container */}
            <div className="flex whitespace-nowrap overflow-hidden relative w-full group">

                {/* Gradients to fade ends */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling content - duplicated for seamless loop */}
                <div className="animate-marquee flex gap-16 md:gap-32 items-center px-8 text-gray-400 font-black text-2xl tracking-tighter mix-blend-multiply opacity-60">
                    {brands.map((brand, i) => (
                        <span key={`first-${i}`} className="hover:text-impact-red hover:opacity-100 transition-all duration-300 cursor-default">{brand}</span>
                    ))}
                    {brands.map((brand, i) => (
                        <span key={`second-${i}`} className="hover:text-impact-red hover:opacity-100 transition-all duration-300 cursor-default">{brand}</span>
                    ))}
                    {brands.map((brand, i) => (
                        <span key={`third-${i}`} className="hover:text-impact-red hover:opacity-100 transition-all duration-300 cursor-default">{brand}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
