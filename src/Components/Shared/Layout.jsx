// src/Components/Shared/Layout.jsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    const location = useLocation();
    const [hideHeaderFooter, setHideHeaderFooter] = useState(false);

    useEffect(() => {
        // Hide Header and Footer on specific routes

        setHideHeaderFooter(location.pathname === '/login' || location.pathname === '/logout');
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen md:overflow-hidden">
            {!hideHeaderFooter && 
            ( <header className="fixed top-0 left-0 w-full h-16 shadow-md z-[9999]"
                style={{
                    backgroundColor: 'var(--background-color)',
                }}
            >
                <Header />
            </header>
            )}
            <main className={`flex-grow overflow-y-auto mb-10 sm:mb-0 ${!hideHeaderFooter ? 'pt-16 ' : ''}`}>
                {/* Add top padding (e.g., 4rem) to avoid overlap with fixed header */}
                {children}
            </main>
            {!hideHeaderFooter &&(
                <footer className="fixed bottom-0 left-0 w-full h-16 shadow-md z-10"
                style={{
                    backgroundColor: 'var(--background-color)',
                }}
                >
                    <Footer />
                </footer>
            )}
        </div>
    );

};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;