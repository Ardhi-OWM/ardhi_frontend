// src/Components/Sidebar/functions.js
// themeFunctions.js
export const toggleTheme = (theme, setTheme) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
};

export const initializeTheme = (setTheme) => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', defaultTheme === 'dark');
    setTheme(defaultTheme);
};

export const areNotificationsDifferent = (newNotifications, storedNotifications) => {
    return JSON.stringify(newNotifications) !== storedNotifications;
};

export const initializeNotifications = (notifications, setHasNewNotifications) => {
    const storedNotifications = localStorage.getItem('previousNotifications');
    if (!storedNotifications || areNotificationsDifferent(notifications, storedNotifications)) {
        setHasNewNotifications(true);
        localStorage.setItem('previousNotifications', JSON.stringify(notifications));
    }
};

export const handleNotificationClick = (notificationId, clickedNotifications, setClickedNotifications) => {
    const updatedClickedNotifications = [...clickedNotifications, notificationId];
    setClickedNotifications(updatedClickedNotifications);
    localStorage.setItem('clickedNotifications', JSON.stringify(updatedClickedNotifications));
};

export const loadClickedNotifications = (setClickedNotifications) => {
    const storedClickedNotifications = localStorage.getItem('clickedNotifications');
    if (storedClickedNotifications) {
        setClickedNotifications(JSON.parse(storedClickedNotifications));
    }
};

export const handleClickOutside = (event, popUpRef, setShowNotifications) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowNotifications(false);
    }
};

