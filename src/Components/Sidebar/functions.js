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

