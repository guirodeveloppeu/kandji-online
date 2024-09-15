"use client"
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">KPANDJI</h3>
            <p className="text-gray-400">Discover the future of automotive excellence with us.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KPANDJI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
