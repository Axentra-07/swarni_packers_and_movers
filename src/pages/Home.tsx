import { motion } from 'motion/react';
import { Truck, ShieldCheck, Clock, BadgeCheck, ArrowRight, Star, ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { title: 'Household Packers and Movers', icon: <Truck className="w-8 h-8" />, desc: 'Safe and smooth home relocation with expert handling.' },
    { title: 'Office Relocation Services', icon: <BadgeCheck className="w-8 h-8" />, desc: 'Efficient office shifting with minimal business downtime.' },
    { title: 'Vehicle Transportation', icon: <ShieldCheck className="w-8 h-8" />, desc: 'Scratch-free car and bike transport across India.' },
    { title: 'Local & Interstate Moving', icon: <Clock className="w-8 h-8" />, desc: 'Reliable moving services within Ratnagiri and beyond.' },
  ];

  const faqs = [
    { q: 'What are packers and movers charges in Ratnagiri?', a: 'Charges depend on distance, items, and services required. Contact us for a free quote.' },
    { q: 'Do you provide insurance?', a: 'Yes, we offer transit insurance for complete safety.' },
    { q: 'How long does relocation take?', a: 'Local moves take 1 day; interstate moves vary based on distance.' },
    { q: 'Do you offer same-day shifting?', a: 'Yes, for local moves based on availability.' },
    { q: 'Are your staff verified?', a: 'Yes, all staff are trained and background-checked.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-blue-100 rounded-full">
                Trusted by 500+ Families
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Reliable Packers and Movers in <span className="text-primary">Ratnagiri</span> You Can Trust
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-lg">
                Safe, affordable, and hassle-free relocation services with real-time tracking and damage-free guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg font-bold text-center transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Truck className="w-5 h-5" /> Get Free Quote
                </Link>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-bold text-center transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000"
                  alt="Professional Moving Truck"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShieldCheck className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">100% Safe Delivery</p>
                    <p className="text-xs text-gray-500">Fully Insured Services</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Swarni Packers and Movers</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Stress-Free Experience', desc: 'We handle everything—from packing to unpacking—so you don’t have to worry.', icon: <Star className="text-yellow-500" /> },
              { title: '100% Safe & Secure', desc: 'Your belongings are packed with high-quality materials and handled by professionals.', icon: <ShieldCheck className="text-blue-500" /> },
              { title: 'On-Time Delivery', desc: 'We value your time and ensure timely pickup and delivery guaranteed.', icon: <Clock className="text-green-500" /> },
              { title: 'Transparent Pricing', desc: 'No hidden charges. Clear, upfront pricing you can trust for every move.', icon: <BadgeCheck className="text-purple-500" /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-50 rounded-2xl border border-gray-100 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
              <p className="text-gray-600 max-w-xl">Comprehensive relocation solutions tailored to your specific needs.</p>
            </div>
            <Link to="/services" className="text-primary font-bold flex items-center gap-2 group mt-4 md:mt-0">
              Explore all services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-extrabold mb-2">1+</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold mb-2">500+</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">Successful Moves</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold mb-2">100%</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold mb-2">24/7</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rohit Patil', text: 'Smooth and stress-free experience! Everything arrived safely and on time.' },
              { name: 'Sneha Kulkarni', text: 'Very professional team. Best packers and movers in Ratnagiri.' },
              { name: 'Amit Deshmukh', text: 'Affordable pricing and excellent service. Highly recommended!' },
            ].map((t, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-2xl relative">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                <p className="font-bold text-gray-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 text-gray-600 border-t border-gray-100 bg-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Move?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Get a free, no-obligation quote for your relocation today. Our experts are ready to help you plan your move.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-cta hover:bg-cta-hover text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="bg-white text-primary hover:bg-blue-50 px-10 py-4 rounded-xl font-bold transition-all"
                >
                  Call: +91-XXXXXXXXXX
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
