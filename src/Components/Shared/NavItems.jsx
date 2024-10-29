import { headerLinks } from '../constants';
import { Link, useLocation } from 'react-router-dom'; // React Router imports
import React from 'react';

const NavItems = () => {
    const location = useLocation(); // Get the current location
    const pathname = location.pathname;

    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-10 md:flex-row">
            {headerLinks.map((link) => {
                const isActive = pathname === link.route;

                return (
                    <li
                        key={link.id}
                        className={`${isActive ? 'text-ourGreen border-b rounded-md px-3' : ''
                            } flex-center p-medium-16 whitespace-nowrap`}
                    >
                        <Link to={link.route}>{link.label}</Link> {/* Replace href with to */}
                    </li>
                );
            })}
        </ul>
    );
};

export default NavItems;
