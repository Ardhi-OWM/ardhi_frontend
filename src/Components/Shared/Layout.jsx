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

    /*    useEffect(() => {
           const shouldHide = location.pathname === '/login' || location.pathname === '/logout';
           console.log("Pathname:", location.pathname, "Hide Header/Footer:", shouldHide);
           setHideHeaderFooter(shouldHide);
       }, [location.pathname]); */


    return (
        <div className="flex flex-col min-h-screen md:overflow-hidden">
            {!hideHeaderFooter && <Header  />}
            <main className={`flex-grow overflow-y-auto ${!hideHeaderFooter ? 'pt-16' : ''}`}>
                {/* Add top padding (e.g., 4rem) to avoid overlap with fixed header */}
                {children}
            </main>
            {!hideHeaderFooter && <Footer />}
        </div>
    );

};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;