import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ['#ef4444', '#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prev =>
        prev.map(particle => {
          const newX = particle.x + particle.speedX;
          const newY = particle.y + particle.speedY;

          return {
            ...particle,
            x:
              newX > window.innerWidth
                ? 0
                : newX < 0
                ? window.innerWidth
                : newX,
            y:
              newY > window.innerHeight
                ? 0
                : newY < 0
                ? window.innerHeight
                : newY
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-red-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-black mb-8 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent relative">
                About
              </span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent relative inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                1MDM
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-orange-500/20 blur-xl -z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Leading the revolution in medical equipment distribution through 
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold"> innovation</span>, 
              <span className="text-transparent bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text font-bold"> quality</span>, and 
              <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text font-bold"> global connectivity</span>.
            </motion.p>
          </motion.div>

          {/* Enhanced Images with Gradient Overlays */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Medical professionals"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                  <motion.p
                    className="text-white text-xl font-bold text-center px-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Connecting Healthcare Professionals Worldwide
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Medical equipment"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                  <motion.p
                    className="text-white text-xl font-bold text-center px-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Advanced Medical Technology Solutions
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split Container Section with Enhanced Colors */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* First Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img
                  src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Global network"
                  className="relative w-full h-64 object-cover rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-xl"
                />
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img
                  src="https://images.pexels.com/photos/7656741/pexels-photo-7656741.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Healthcare innovation"
                  className="relative w-full h-64 object-cover rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-xl"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-8">
                Our Mission
              </h2>
              <p className="text-lg lg:text-xl text-slate-700 mb-6 leading-relaxed">
                At 1MDM, we are committed to revolutionizing the medical equipment industry by creating the world's most comprehensive and accessible marketplace for healthcare providers and suppliers.
              </p>
              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
                We believe that quality healthcare should be accessible to everyone, and that starts with ensuring healthcare providers have access to the best medical equipment available.
              </p>
            </motion.div>
          </div>

          {/* Second Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="flex flex-col justify-center order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent mb-8">
                Our Vision
              </h2>
              <p className="text-lg lg:text-xl text-slate-700 mb-6 leading-relaxed">
                We envision a world where geographical boundaries don't limit access to life-saving medical technology. Our platform bridges the gap between innovative manufacturers and healthcare providers globally.
              </p>
              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
                Through cutting-edge technology and unwavering commitment to quality, we're building the future of medical equipment distribution.
              </p>
            </motion.div>

            <motion.div
              className="space-y-8 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img
                  src="https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Medical research"
                  className="relative w-full h-64 object-cover rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-xl"
                />
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img
                  src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Healthcare technology"
                  className="relative w-full h-64 object-cover rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-8">
              Our Core Values
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do at 1MDM
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We maintain the highest standards in every product and service we offer.',
                icon: '🏆',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                title: 'Global Reach',
                description: 'Connecting healthcare providers and suppliers across all continents.',
                icon: '🌍',
                gradient: 'from-green-400 to-blue-500'
              },
              {
                title: 'Innovation',
                description: 'Continuously improving our platform with cutting-edge technology.',
                icon: '💡',
                gradient: 'from-purple-400 to-pink-500'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all duration-300`}></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-2xl group-hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;