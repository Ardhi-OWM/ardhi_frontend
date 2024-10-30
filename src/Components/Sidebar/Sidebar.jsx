import React, { useState, useEffect } from 'react';
import { toggleTheme, initializeTheme } from './functions';


function Sidebar() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        initializeTheme(setTheme);
    }, []);

    const handleThemeToggle = () => toggleTheme(theme, setTheme);

    return (
        <div className="flex flex-col h-full p-4 border-r border-gray-500/[.25] ">
            <h1 className="text-lg font-semibold">This is the Sidebar</h1>

            {/* ------ Sidebar Components lower part ------ */}
            <div >
                {/* Theme Change */}
                <div className="mb-5">
                    <button id="theme-toggle" onClick={handleThemeToggle}
                        className='underline cursor-pointer underline-offset-4'>
                        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Sidebar;
