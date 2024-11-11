import React from 'react'



const Footer = () => {
  return (
    <footer className="p-4 text-center border-t border-gray-500/[.25] w-full md:w-4/5 ml-auto border-dotted fixed bottom-0 md:right-0">
      <p className="text-xs">&copy; {new Date().getFullYear()} Ardhi Analytics</p>
    </footer>
  );
};

export default Footer;

