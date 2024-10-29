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
        setHideHeaderFooter(location.pathname === '/login' || location.pathname === '/logout');
    }, [location.pathname]);

    return (
        <>
            {!hideHeaderFooter && <Header />}
            <main>{children}</main>
            {!hideHeaderFooter && <Footer />}
        </>
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;