import React from 'react';
import { InformationCircleIcon, CalendarIcon, MapIcon, BuildingLibraryIcon, SearchIcon } from './Icons';

const BottomNav: React.FC = () => {
    
    const navLinks = [
        { href: '#info-esencial', text: 'Info', icon: <InformationCircleIcon className="w-6 h-6 mb-1"/> },
        { href: '#programa', text: 'Programa', icon: <CalendarIcon className="w-6 h-6 mb-1"/> },
        { href: '#dorsal', text: 'Dorsal', icon: <SearchIcon className="w-6 h-6 mb-1" /> },
        { href: '#recorridos', text: 'Recorridos', icon: <MapIcon className="w-6 h-6 mb-1"/> },
        { href: '#turismo', text: 'Turismo', icon: <BuildingLibraryIcon className="w-6 h-6 mb-1" /> },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 shadow-[0_-1px_10px_rgba(0,0,0,0.05)] z-40">
            <ul className="flex justify-around items-center h-16">
                {navLinks.map((link) => (
                    <li key={link.href} className="flex-1">
                        <a 
                            href={link.href} 
                            className="flex flex-col items-center justify-center text-center text-gray-600 hover:text-blue-600 transition-colors w-full h-full"
                            aria-label={link.text}
                        >
                            {link.icon}
                            <span className="text-xs font-medium">{link.text}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default BottomNav;