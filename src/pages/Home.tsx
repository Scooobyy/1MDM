import { useState, useEffect } from 'react';
import { motion,  useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Headphones } from 'lucide-react';

const AnimatedCounter = ({ value, suffix = '' }:any) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev < value) {
            return Math.min(prev + Math.ceil(value / 100), value);
          }
          clearInterval(timer);
          return value;
        });
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeCarousel, setActiveCarousel] = useState(0);

  const features = [
    {
      title: 'Custom Storefront',
      description: 'Create a professional online presence with customizable storefronts designed specifically for medical equipment suppliers.',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Advertising Tools',
      description: 'Reach more customers with our advanced advertising platform and targeted marketing solutions.',
      image: 'https://www.shutterstock.com/image-photo/online-sales-concept-digital-marketing-600nw-2511675757.jpg'
    },
    {
      title: 'Data Analytics',
      description: 'Make informed decisions with comprehensive analytics and insights into your business performance.',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww'
    },
    {
      title: 'Customer Support',
      description: '24/7 dedicated support to help you succeed and grow your medical equipment business.',
      image: 'https://www.mckinsey.com/~/media/mckinsey/business%20functions/operations/our%20insights/the%20state%20of%20customer%20care%20in%202022/the%20state%20of%20customer%20care%20in%202022_1132839148_thumb_1536x1536.jpg'
    }
  ];

  const carouselItems = [
    {
      title: 'Global Medical Equipment Distribution',
      description: 'Connect with healthcare providers worldwide and expand your reach to new markets with our comprehensive distribution network.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Advanced Technology Solutions',
      description: 'Leverage cutting-edge technology to streamline your operations and provide better service to your customers.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Quality Assurance Programs',
      description: 'Ensure the highest standards with our comprehensive quality assurance and certification programs.',
      image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section 1 - Updated Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-red-50 to-orange-50">
        {/* Red gradient blob */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-40 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side - Hero Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <p className="text-lg text-gray-600 mb-4">Sell on 1mdm.com</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                Reach millions of B2B buyers 
                <span className="text-red-600"> globally</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Start Selling
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  <Headphones className="h-5 w-5" />
                  Customer Service
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Globe and Statistics */}
          <div className="relative">
            {/* Globe with orbital rings */}
            <div className="relative w-96 h-96 mx-auto">
              {/* Globe */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full opacity-80"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-4 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-60"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-40"></div>
              </motion.div>

              {/* Orbital rings */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-orange-400 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-orange-500 rounded-full -translate-x-1/2"></div>
              </motion.div>

              <motion.div
                className="absolute -inset-8 border border-orange-300 rounded-full opacity-60"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-orange-400 rounded-full -translate-x-1/2"></div>
              </motion.div>
            </div>

            {/* Statistics positioned around the globe */}
            <motion.div
              className="absolute top-8 right-0 text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value={26000000} />
              </div>
              <p className="text-gray-600">active buyers globally</p>
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 right-8 text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value={400000} />
              </div>
              <p className="text-gray-600">product inquiries daily</p>
            </motion.div>
            
            <motion.div
              className="absolute bottom-8 right-0 text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value={200} />
              </div>
              <p className="text-gray-600">countries and regions represented</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Large Black Text Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-black text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Connecting Healthcare Providers with Quality Medical Equipment Worldwide
          </motion.h2>
        </div>
      </section>

      {/* Video & Info Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TN7iJyc5Uks?autoplay=1&mute=1"
            title="1MDM Medical Marketplace"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Connect with millions of business buyers from around the world. 
          Get the tools and know-how to build a successful ecommerce presence for your business. 
          Pocket more from each sale, with take rates as low as 0% in some cases.
        </p>
      </motion.div>
    </div>
  </div>
</section>

      {/* Hero Section 2 - City Images */}
      <section className="relative py-32 bg-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Empowering Healthcare Globally Through Innovation and Excellence
          </motion.h2>
        </div>
      </section>

      {/* Maroon Highlight */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            className="text-3xl font-bold text-maroon-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ color: '#800000' }}
          >
            Grow your business with a suite of tools built for you
          </motion.h3>
        </div>
      </section>

      {/* Vertical Feature Selector */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Feature Selector */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                    activeFeature === index ? 'bg-red-50 border-l-4 border-red-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h4 className={`text-xl font-semibold ${
                    activeFeature === index ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h4>
                </motion.button>
              ))}
            </div>

            {/* Feature Content */}
            <div className="relative">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-lg text-gray-700">
                  {features[activeFeature].description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Maroon Line */}
      <div className="w-full h-1 bg-maroon-800" style={{ backgroundColor: '#800000' }}></div>

      {/* Carousel Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <motion.div
              key={activeCarousel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {carouselItems[activeCarousel].title}
                </h3>
                <p className="text-lg text-gray-700">
                  {carouselItems[activeCarousel].description}
                </p>
              </div>
              <div>
                <img
                  src={carouselItems[activeCarousel].image}
                  alt={carouselItems[activeCarousel].title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={() => setActiveCarousel((prev) => (prev > 0 ? prev - 1 : carouselItems.length - 1))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-red-600 text-white p-2 rounded-full"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              <motion.button
                onClick={() => setActiveCarousel((prev) => (prev < carouselItems.length - 1 ? prev + 1 : 0))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-red-600 text-white p-2 rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Hero - Call to Action with City Background */}
      <section className="relative py-20 bg-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to grow your business
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-900 transition-colors"
            >
              Start Selling
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-900 transition-colors"
            >
              Chat with Consultant
            </motion.button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;