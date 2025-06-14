import { useState } from 'react';
import { motion } from 'framer-motion';
import { } from 'lucide-react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const sidebarItems = [
    { id: 'login', label: 'Login', active: true },
    { id: 'register', label: 'Register', active: false },
    { id: 'forgot', label: 'Forgotten Password', active: false },
    { id: 'account', label: 'My Account', active: false },
    { id: 'address', label: 'Address Book', active: false },
    { id: 'wishlist', label: 'Wish List', active: false },
    { id: 'orders', label: 'Order History', active: false },
    { id: 'downloads', label: 'Downloads', active: false },
    { id: 'recurring', label: 'Recurring payments', active: false },
    { id: 'rewards', label: 'Reward Points', active: false },
    { id: 'returns', label: 'Returns', active: false },
    { id: 'transactions', label: 'Transactions', active: false },
    { id: 'newsletter', label: 'Newsletter', active: false }
  ];

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  const handleContinueClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>🏠</span>
            <span>/</span>
            <span>Account</span>
            <span>/</span>
            <span className="text-gray-900">Login</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b bg-red-600 text-white rounded-t-lg">
                <h3 className="font-semibold">My Subscriptions</h3>
              </div>
              <div className="p-0">
                {sidebarItems.map((item ) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      if (item.id === 'login') handleLoginClick();
                      if (item.id === 'register') handleRegisterClick();
                    }}
                    className={`w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      activeTab === item.id ? 'bg-red-50 text-red-600 border-r-2 border-r-red-600' : 'text-gray-700'
                    }`}
                    whileHover={{ x: 2 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {!showLoginForm && !showRegisterForm && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* New Customer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-lg shadow-sm border p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">New Customer</h2>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Register Account</h3>
                  <p className="text-gray-600 mb-6">
                    By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                  </p>
                  <motion.button
                    onClick={handleContinueClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
                  >
                    Continue
                  </motion.button>
                </motion.div>

                {/* Returning Customer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-lg shadow-sm border p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Returning Customer</h2>
                  <p className="text-gray-600 mb-4">I am a returning customer</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail Address
                      </label>
                      <input
                        type="email"
                        placeholder="E-Mail Address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="text-right">
                      <a href="#" className="text-red-600 hover:text-red-700 text-sm">
                        Forgotten Password
                      </a>
                    </div>
                    
                    <motion.button
                      onClick={handleLoginClick}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
                    >
                      Login
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Login Form */}
            {showLoginForm && (
              <LoginForm onClose={() => setShowLoginForm(false)} />
            )}

            {/* Register Form */}
            {showRegisterForm && (
              <RegisterForm onClose={() => setShowRegisterForm(false)} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MyAccount;