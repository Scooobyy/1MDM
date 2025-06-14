
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Sell on 1MDM', path: '/sell-on-1mdm' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">World's Largest Medical Equipment Market Place</span>
            <div className="flex space-x-4 text-gray-600">
              <Link to="/account" className="hover:text-red-600 transition-colors">My Account</Link>
              <span>|</span>
              <Link to="/contact" className="hover:text-red-600 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Separator Line */}
      <div className="h-px bg-gray-200"></div>
      
      {/* Main Navigation */}
      <nav className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-red-600">1MDM</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-gray-600 hover:text-gray-900 transition-colors py-2"
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                      layoutId="underline"
                    />
                  )}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;