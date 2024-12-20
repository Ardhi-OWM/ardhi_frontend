import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Bell, BadgeHelp, Plus } from 'lucide-react';
import { notificationData } from '../constants';
import {
    toggleTheme,
    initializeTheme,
    initializeNotifications,
    handleNotificationClick,
    loadClickedNotifications,
    handleClickOutside
} from './functions';

function Sidebar() {
    //const currentYear = new Date().getFullYear();
    const [theme, setTheme] = useState('dark');
    const [notifications, setNotifications] = useState(notificationData);
    const [showNotifications, setShowNotifications] = useState(false);
    const [hasNewNotifications, setHasNewNotifications] = useState(false);
    const [clickedNotifications, setClickedNotifications] = useState([]);
    const popUpRef = useRef(null);

    // Theme initialization
    useEffect(() => {
        initializeTheme(setTheme);
    }, []);

    const handleThemeToggle = () => toggleTheme(theme, setTheme);

    // Notifications Initialization
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
        <div className="flex fixed flex-col min-h-screen p-4 border-r border-gray-500/[.25]">
            {/* --------------------------------------- Sidebar Components upper part --------------------------------------- */}
            
            <div className="space-y-2 mb-4 hidden md:block md:overflow-hidden">
                <button className="w-full p-2 flex items-center gap-4 hover:underline">
                    <Plus />
                    <span>Add  Dataset</span>
                </button>
                <button className="w-full p-2 flex items-center gap-4 hover:underline">
                    <Plus />
                    <span>Add  Model</span>
                </button>
                <button className="w-full p-2 flex items-center gap-4 hover:underline">
                    <Plus />
                    <span>Add  API</span>
                </button>
            </div>

            {/* ---------------------------------------  Sidebar Components lower part --------------------------------------- */}
            <div className="relative p-4 space-y-4 flex flex-col mt-auto mb-40">
                {/* Theme Change Button with Icon */}
                <div className="mb-4 flex items-center">
                    <button
                        id="theme-toggle"
                        onClick={handleThemeToggle}
                        className="flex items-center gap-2 underline cursor-pointer underline-offset-4 text-sm"
                    >
                        {theme === 'dark' ? (
                            <>
                                <Sun className="w-4 h-4  text-ourGreen" />
                                <span className=" hidden sm:inline ">To Light Mode </span>
                            </>
                        ) : (
                            <>
                                <Moon className="w-4 h-4 text-ourGreen" />
                                <span className="hidden sm:inline  ">To Dark Mode </span>
                            </>
                        )}
                    </button>
                </div>


                {/* Notification Button with Icon */}
                <div className="mb-4 relative">
                    <button className="relative flex cursor-pointer" onClick={handleBellClick}>
                        <Bell className="text-ourGreen" />
                        <span className="ml-2 hidden sm:inline  ">Notifications</span>
                        {hasNewNotifications && (
                            <span className="absolute top-0 right-0 bg-red-500 rounded-full h-3 w-3"></span>
                        )}
                    </button>
                    {showNotifications && (
                        <div
                            ref={popUpRef}
                            className={`fixed bottom-10 w-64 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} 
                            border border-gray-300 rounded-lg shadow-lg p-4 z-[9999]`}
                            style={{
                                transform: 'translateX(10px)',
                                maxWidth: '90vw',
                                overflowY: 'auto',
                                maxHeight: '20vh',
                            }}
                        >
                            <h3 className="font-bold mb-2">Latest Notifications</h3>
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

                {/* Help Button with Icon */}
                <button
                    className="flex items-center mb-4 cursor-pointer"
                    onClick={() => window.open('https://ardhi.slab.com/posts/help-page-idwmu284?shr=_TwiAyo7tThV4H3IWU7pmshx', '_blank')}
                >
                    <BadgeHelp className="text-ourGreen" />
                    <span className="ml-2 hidden sm:inline">Help</span>
                </button>

            </div>
        </div>
    );
}

export default Sidebar;