import React from 'react'


const Footer = () => {

  return (
    <footer className="w-full p-4 text-center border-t border-gray-500/[.25] bg-gray-100 md:bg-white">
      <p>&copy; {new Date().getFullYear()} Ardhi Analytics</p>
    </footer>
  );
};

export default Footer;
