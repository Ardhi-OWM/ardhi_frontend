// src/Components/Shared/SidebarMobile.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Bell, BadgeHelp, Plus } from 'lucide-react';
import { notificationData } from '../constants';
import {
    toggleTheme,
    initializeTheme,
    initializeNotifications,
    handleNotificationClick,
    loadClickedNotifications,
    handleClickOutside,
} from './functions';

function SidebarMobile() {
    const [theme, setTheme] = useState('dark');
    const [notifications, setNotifications] = useState(notificationData);
    const [showNotifications, setShowNotifications] = useState(false);
    const [hasNewNotifications, setHasNewNotifications] = useState(false);
    const [clickedNotifications, setClickedNotifications] = useState([]);
    const popUpRef = useRef(null);

    // Initialize theme
    useEffect(() => {
        initializeTheme(setTheme);
    }, []);

    const handleThemeToggle = () => toggleTheme(theme, setTheme);

    // Initialize notifications
    useEffect(() => {
        initializeNotifications(notifications, setHasNewNotifications);
    }, [notifications]);

    // Load clicked notifications from localStorage
    useEffect(() => {
        loadClickedNotifications(setClickedNotifications);
    }, []);

    // Toggle notification panel visibility
    const handleBellClick = () => {
        setShowNotifications(!showNotifications);
        setHasNewNotifications(false);
        localStorage.setItem('previousNotifications', JSON.stringify(notifications));
    };

    // Handle notification click to mark as read
    const handleNotificationItemClick = (id) => {
        if (!clickedNotifications.includes(id)) {
            const updatedClickedNotifications = [...clickedNotifications, id];
            setClickedNotifications(updatedClickedNotifications);
            localStorage.setItem('clickedNotifications', JSON.stringify(updatedClickedNotifications));
        }
    };

    // Sort notifications by latest
    const sortedNotifications = [...notifications].sort((a, b) => b.date - a.date);

    // Close notifications if clicking outside
    useEffect(() => {
        const handleClickOutsideWrapper = (event) => handleClickOutside(event, popUpRef, setShowNotifications);
        document.addEventListener('mousedown', handleClickOutsideWrapper);
        return () => document.removeEventListener('mousedown', handleClickOutsideWrapper);
    }, [popUpRef]);

    return (
        <div className="flex flex-col p-4 md:hidden">
            {/* Mobile Button Group (Add Dataset, Model, API) */}
           

            {/* Lower Part Icons (Theme Toggle, Notifications, Help) */}
            <div className="flex justify-end items-center space-x-2 mt-3">
                {/* Theme Toggle */}
               {/*  <button onClick={handleThemeToggle} className="flex items-center gap-2">
                    {theme === 'dark' ? <Sun className="w-6 h-6 text-ourGreen" /> : <Moon className="w-6 h-6 text-ourGreen" />}
                </button> */}

                {/* Notifications */}
                <div className="relative">
                    <button onClick={handleBellClick} className="flex items-center gap-2">
                        <Bell className="text-ourGreen" />
                        {hasNewNotifications && (
                            <span className="absolute top-0 right-0 bg-red-500 rounded-full h-3 w-3"></span>
                        )}
                    </button>
                    {showNotifications && (
                        <div
                            ref={popUpRef}
                            className={`absolute top-full right-0 mt-2 w-64 ${
                                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                            } border border-gray-300 rounded-lg shadow-lg p-4 z-50`}
                            style={{ maxWidth: '90vw', overflowY: 'auto', maxHeight: '20vh' }}
                        >
                            <h3 className="font-bold mb-2 ">Latest Notifications</h3>
                            <ul>
                                {sortedNotifications.slice(0, 5).map((notification) => (
                                    <li
                                        key={notification.id}
                                        className={`py-1 ${clickedNotifications.includes(notification.id)
                                            ? 'text-gray-400'
                                            : 'font-semibold'
                                            }`}
                                    >
                                        <a
                                            href={notification.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                            onClick={() => handleNotificationItemClick(notification.id)}
                                        >
                                            <p className="text-sm">{notification.name}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Help Button */}
                <button onClick={() => window.open('https://ardhi.slab.com/posts/help-page-idwmu284?shr=_TwiAyo7tThV4H3IWU7pmshx', '_blank')}>
                    <BadgeHelp className="text-ourGreen" />
                </button>
            </div>

            <div className="flex flex-col space-y-2 ">
                <button className="flex p-2 items-center gap-4 hover:underline">
                    <Plus />
                    <span className="text-xs">Add Dataset</span>
                </button>
                <button className="flex p-2 items-center gap-4 hover:underline">
                    <Plus />
                    <span className="text-xs">Add Model</span>
                </button>
                <button className="flex p-2 items-center gap-4 hover:underline">
                    <Plus />
                    <span className="text-xs">Add API</span>
                </button>
            </div>
        </div>
    );
}

export default SidebarMobile;
