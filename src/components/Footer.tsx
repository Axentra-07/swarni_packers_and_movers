import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Package } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <Package className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">SWARNI</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Safe, affordable, and hassle-free relocation services in Ratnagiri. We handle your belongings with care and ensure on-time delivery.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">References</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/household" className="hover:text-white transition-colors">Household Shifting</Link></li>
              <li><Link to="/services/office" className="hover:text-white transition-colors">Office Relocation</Link></li>
              <li><Link to="/services/vehicle" className="hover:text-white transition-colors">Vehicle Transport</Link></li>
              <li><Link to="/services/interstate" className="hover:text-white transition-colors">Interstate Moving</Link></li>
              <li><Link to="/services/packing" className="hover:text-white transition-colors">Packing & Unpacking</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>ITI Link Road, Shivaji Nagar, Ratnagiri - 415612 (Near Nagarparishad Vasahat)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-white">+91-XXXXXXXXXX</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@swarnipackers.com" className="hover:text-white">info@swarnipackers.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
          <p>&copy; {currentYear} Swarni Packers and Movers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
