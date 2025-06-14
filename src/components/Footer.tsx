import { Link } from 'react-router-dom';
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Logo and Company Info */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Heart className="h-10 w-10 text-red-500 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-30"></div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  1MDM
                </span>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                One Medical Devices Market Place - Connecting healthcare professionals with cutting-edge medical technology.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5 text-red-400" />
                  <span>contact@1mdm.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5 text-red-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                  { Icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                  { Icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                  { Icon: Linkedin, href: '#', color: 'hover:text-blue-500' }
                ].map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${color} group`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Platform
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mt-2"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  { label: 'Sell on 1MDM', path: '/sell-on-1mdm' },
                  { label: 'Pricing', path: '/pricing' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Our Story', path: '/our-story' },
                  { label: 'Careers', path: '/careers' },
                  { label: 'Blog', path: '/blog' },
                  { label: 'Brands', path: '/brands' }
                ].map(({ label, path }, index) => (
                  <li key={index}>
                    <Link
                      to={path}
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group text-sm"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Press Room Links */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Press Room
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  { label: 'Images & B-roll', path: '/press/images' },
                  { label: 'Policies', path: '/policies' },
                  { label: 'Terms of Service', path: '/terms' },
                  { label: 'Privacy Policy', path: '/privacy' },
                  { label: 'Delivery Information', path: '/delivery' }
                ].map(({ label, path }, index) => (
                  <li key={index}>
                    <Link
                      to={path}
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group text-sm"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empty column (if needed) */}
            <div className="lg:col-span-1"></div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest updates on medical devices, industry news, and platform features delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2024 1MDM. All rights reserved. Made with ❤️ for healthcare professionals.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</Link>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors duration-300">Support</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
