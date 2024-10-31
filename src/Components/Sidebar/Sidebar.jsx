import React, { useState, useEffect } from 'react';
import { Sun, Moon, Bell, BadgeHelp } from 'lucide-react';
import { toggleTheme, initializeTheme } from './functions';

function Sidebar() {
    const currentYear = new Date().getFullYear();
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        initializeTheme(setTheme);
    }, []);

    const handleThemeToggle = () => toggleTheme(theme, setTheme);

    return (
        <div className="flex flex-col min-h-screen p-4 border-r border-gray-500/[.25]">
            {/* ------ Sidebar Components upper part ------ */}
            <div className="flex-grow mt-4">
                <h2>Upper Div</h2>
            </div>

            {/* ------ Sidebar Components lower part ------ */}
            <div className="flex-grow mb-4">
                {/* Theme Change Button with Icon */}
                <div className="mb-4 flex items-center">
                    <button
                        id="theme-toggle"
                        onClick={handleThemeToggle}
                        className="flex items-center gap-2 underline cursor-pointer underline-offset-4 text-sm"
                    >
                        {theme === 'dark' ? (
                            <>
                                <Sun className="w-4 h-4 " />
                                To Light Mode
                            </>
                        ) : (
                            <>
                                <Moon className="w-4 h-4 " />
                                To Dark Mode
                            </>
                        )}
                    </button>
                </div>

                {/* Footer with Copyright */}
                <div className="mb-4 mt-auto">
                    <p className="text-xs italic text-gray-600">
                        &copy; {currentYear}{' '}
                        <a className="text-green-300/[.50]" href="https://ardhi.de/" target="_blank" rel="noopener noreferrer">
                            Ardhi Analytics
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
