import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Headphones } from 'lucide-react';

const AnimatedCounter = ({ value, suffix = '' }: any) => {
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
      {/* Hero Section 1 - Updated Design with 3D Oval Globe */}
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

          {/* Right Side - 3D Oval Globe and Statistics */}
          <div className="relative">
            {/* 3D Oval Globe Container */}
            <div className="relative w-96 h-96 mx-auto" style={{ perspective: '1200px' }}>
              {/* Main 3D Oval Globe */}
              <motion.div
                className="absolute inset-0"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(-15deg) rotateY(15deg) rotateX(-15deg) scaleY(0.8) scaleZ(0.9)',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(ellipse 40% 30% at 35% 25%, 
                      rgba(71, 85, 105, 0.95) 0%,
                      rgba(51, 65, 85, 0.9) 20%,
                      rgba(30, 41, 59, 0.85) 40%,
                      rgba(15, 23, 42, 0.9) 70%,
                      rgba(2, 6, 23, 0.95) 100%
                    ),
                    linear-gradient(135deg, 
                      rgba(71, 85, 105, 0.4) 0%,
                      rgba(51, 65, 85, 0.3) 25%,
                      rgba(30, 41, 59, 0.2) 50%,
                      rgba(15, 23, 42, 0.3) 75%,
                      rgba(2, 6, 23, 0.4) 100%
                    )
                  `,
                  boxShadow: `
                    inset -30px -30px 60px rgba(0, 0, 0, 0.4),
                    inset 20px 20px 40px rgba(148, 163, 184, 0.1),
                    0 25px 50px rgba(0, 0, 0, 0.3),
                    0 0 80px rgba(71, 85, 105, 0.2)
                  `,
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                
                }}
                animate={{ 
                  rotateY: 360,
                  rotateX: [-15, -10, -20, -15]
                }}
                transition={{ 
                  rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
                  rotateX: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Inner oval core for enhanced depth */}
                <div 
                  className="absolute inset-8 opacity-70"
                  style={{
                    borderRadius: '50%',
                    transform: 'scaleY(0.75) scaleZ(0.85)',
                    background: `
                      radial-gradient(ellipse 45% 35% at 40% 30%, 
                        rgba(100, 116, 139, 0.8) 0%,
                        rgba(71, 85, 105, 0.6) 40%,
                        rgba(51, 65, 85, 0.8) 100%
                      )
                    `,
                    boxShadow: 'inset -15px -15px 40px rgba(0, 0, 0, 0.5)'
                  }}
                />
                
                {/* Sophisticated continent-like patterns */}
                <div className="absolute top-16 left-16 w-16 h-10 bg-slate-400 rounded-full opacity-30 blur-sm" style={{ transform: 'scaleY(0.6)' }}></div>
                <div className="absolute top-28 right-20 w-12 h-8 bg-slate-500 rounded-full opacity-25 blur-sm" style={{ transform: 'scaleY(0.7)' }}></div>
                <div className="absolute bottom-24 left-24 w-14 h-9 bg-slate-600 rounded-full opacity-35 blur-sm" style={{ transform: 'scaleY(0.5)' }}></div>
                <div className="absolute bottom-20 right-16 w-18 h-12 bg-slate-400 rounded-full opacity-28 blur-sm" style={{ transform: 'scaleY(0.65)' }}></div>
                
                {/* Highlight for 3D effect */}
                <div 
                  className="absolute top-8 left-8 w-20 h-16 opacity-20 blur-xl"
                  style={{
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse, rgba(248, 250, 252, 0.8) 0%, transparent 70%)',
                    transform: 'scaleY(0.6) rotateZ(-20deg)'
                  }}
                />
              </motion.div>

              {/* 3D Orbital Ring 1 - Sophisticated colors */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed opacity-60"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(70deg) scaleY(0.3)',
                  borderRadius: '50%',
                  borderColor: 'rgba(100, 116, 139, 0.6)'
                }}
                animate={{ 
                  rotateZ: 360
                }}
                transition={{ 
                  duration: 18, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <motion.div 
                  className="absolute w-3 h-3 rounded-full shadow-lg"
                  style={{ 
                    top: '-6px', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, rgba(100, 116, 139, 0.9), rgba(71, 85, 105, 0.9))',
                    filter: 'drop-shadow(0 0 8px rgba(100, 116, 139, 0.6))'
                  }}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* 3D Orbital Ring 2 */}
              <motion.div
                className="absolute -inset-8 border opacity-50"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(50deg) rotateX(65deg) scaleY(0.25)',
                  borderRadius: '50%',
                  borderColor: 'rgba(71, 85, 105, 0.5)'
                }}
                animate={{ 
                  rotateZ: -360
                }}
                transition={{ 
                  duration: 28, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <motion.div 
                  className="absolute w-2.5 h-2.5 rounded-full shadow-lg"
                  style={{ 
                    top: '-5px', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, rgba(71, 85, 105, 0.8), rgba(51, 65, 85, 0.9))',
                    filter: 'drop-shadow(0 0 6px rgba(71, 85, 105, 0.5))'
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* 3D Orbital Ring 3 */}
              <motion.div
                className="absolute -inset-12 border opacity-35"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(25deg) rotateY(70deg) scaleY(0.2)',
                  borderRadius: '50%',
                  borderColor: 'rgba(51, 65, 85, 0.4)'
                }}
                animate={{ 
                  rotateZ: 360
                }}
                transition={{ 
                  duration: 38, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <motion.div 
                  className="absolute w-2 h-2 rounded-full shadow-lg"
                  style={{ 
                    top: '-4px', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.7), rgba(30, 41, 59, 0.8))',
                    filter: 'drop-shadow(0 0 4px rgba(51, 65, 85, 0.4))'
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2.0,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Sophisticated atmospheric glow */}
              <div 
                className="absolute -inset-6 opacity-25 blur-2xl"
                style={{
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse, rgba(100, 116, 139, 0.3) 0%, rgba(71, 85, 105, 0.2) 40%, transparent 70%)',
                  transform: 'scaleY(0.7)'
                }}
              />
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