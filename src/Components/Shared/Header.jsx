// src/Components/Shared/Header.jsx
import { SignedOut, SignedIn, UserButton } from '@clerk/clerk-react';
import { transparentLogo } from '../../assets/index.js';
import { Link } from 'react-router-dom';
import NavItems from './NavItems.jsx';
import MobileNav from './MobileNav.jsx';
import { initializeTheme, toggleTheme } from './ThemeFunction.js';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';


const Header = () => {
    const [theme, setTheme] = useState('dark');

    // Initialize theme on load
    useEffect(() => {
        initializeTheme(setTheme);
    }, []);

    const handleThemeToggle = () => toggleTheme(theme, setTheme);


    return (
        <header className="w-full fixed top-0 left-0 z-50 border-b border-gray-500/[.25] py-2 shadow-lg">
            <div className="wrapper flex justify-between items-center">
                <Link to="/" className="w-36 ml-4">
                    <img src={transparentLogo}
                        alt="Color ardhi"
                        style={{ width: "auto", height: "auto" }}
                    />
                </Link>

                {/* Desktop NavItems visible only when signed in */}
                <SignedIn>
                    <nav className="hidden md:flex w-full max-w-xs">
                        <NavItems />
                    </nav>
                </SignedIn>

                {/* Right-side actions (UserButton or Login) */}

                <div className="flex w-32 justify-end gap-3 mr-4">
                    <button onClick={handleThemeToggle} className="flex items-center cursor-pointer justify-end md:mx-4">
                        {theme === 'dark' ? <Sun className="w-5 h-5 text-ourGreen" /> : <Moon className="w-5 h-5 text-ourGreen" />}
                    </button>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <Link to="/sign-in"
                            className="rounded-md border border-slate-300 bg-transparent text-gray-700 hover:bg-slate-200 px-4 py-2">
                            Login
                        </Link>
                    </SignedOut>
                </div>
                {/* Mobile Menu - visible only on smaller screens */}
                <div className="md:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header
