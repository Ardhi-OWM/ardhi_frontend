// src/components/MobileMenu.jsx
import React, { useState } from 'react';
import NavItems from './NavItems';
import { CircleX, AlignLeft } from 'lucide-react';
import { UserButton } from '@clerk/clerk-react';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Directly close the menu
    };

    return (
        <nav className="md:hidden relative z-[9999]"> {/* Very high z-index */}
            <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
            >
                {/* Show AlignLeft icon when menu is closed, and CircleX when open */}
                {isOpen ? (
                    <CircleX className="w-6 h-6 text-ourGreen" />
                ) : (
                    <AlignLeft className="w-6 h-6 text-ourGreen" />
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 p-4 overflow-y-auto shadow-lg rounded-md text-n-5 dark:text-n-1 z-[9999]  "
                    onClick={toggleMenu} // Close menu when clicking outside
                >
                    {/* Menu Content */}
                    <div className="relative  bg-n-11 p-6 rounded-md opacity-70"
                        onClick={(e) => e.stopPropagation()}>
                        {/* Close Button within Menu */}
                        <button onClick={closeMenu} className="absolute top-4 right-4" aria-label="Close menu">
                            <CircleX className="w-6 h-6 text-ourGreen" />
                        </button>

                        {/* Nav Items and User Button */}
                        <NavItems />
                        {/* Divider line */}
                        <hr className="my-8 border-gray-300 dark:border-gray-600" />
                        <UserButton />
                    </div>
                </div>
            )}
        </nav>
    );
};
export default MobileNav;
