// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <div className="container">
        <small>&copy; {new Date().getFullYear()} TezTodo. Built for learning and conquering 🚀</small>
      </div>
    </footer>
  );
};

export default Footer;
