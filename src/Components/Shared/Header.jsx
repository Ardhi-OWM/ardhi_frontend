// src/Components/Shared/Header.jsx
import { SignedOut, SignedIn, UserButton } from '@clerk/clerk-react';
import { transparentLogo } from '../../assets/index.js';
import { Link } from 'react-router-dom';
import NavItems from './NavItems.jsx';


const Header = () => {
    return (
        <header className="w-full border-b border-gray-500/[.25] my-2 pb-2">
            <div className="wrapper flex justify-between items-center">
                <Link to="/" className="w-36">
                    <img src={transparentLogo}
                        alt="Color ardhi"
                        style={{ width: "auto", height: "auto" }}
                    />
                </Link>

                <SignedIn>
                    <nav className="flex w-full max-w-xs">
                        <NavItems  />
                    </nav>
                </SignedIn>
                <div className="flex w-32 justify-end gap-3 mr-4">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <Link to="/sign-in" className="rounded-md border border-slate-300 bg-transparent text-gray-700 hover:bg-slate-200 px-4 py-2">
                            Login
                        </Link>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header
