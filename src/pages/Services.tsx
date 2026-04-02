import { motion } from 'motion/react';
import { Truck, Building2, Car, Globe, Package, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'household',
      title: 'Household Shifting Services',
      icon: <Truck className="w-12 h-12" />,
      desc: 'Our household packers and movers services are designed to make your home relocation smooth and stress-free.',
      benefits: ['Safe handling of fragile items', 'Door-to-door service', 'Real-time tracking', 'Insurance coverage'],
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'office',
      title: 'Office Relocation Services',
      icon: <Building2 className="w-12 h-12" />,
      desc: 'We provide efficient office relocation services with minimal downtime for your business operations.',
      benefits: ['Fast relocation', 'Minimal business disruption', 'Secure handling of electronics', 'Professional setup'],
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'vehicle',
      title: 'Vehicle Transportation Services',
      icon: <Car className="w-12 h-12" />,
      desc: 'We offer safe car and bike transport services across India using specialized carriers and expert drivers.',
      benefits: ['Scratch-free delivery', 'Insurance coverage', 'GPS tracking', 'Specialized carriers'],
      img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'interstate',
      title: 'Domestic & Interstate Moving',
      icon: <Globe className="w-12 h-12" />,
      desc: 'Our domestic packers and movers services cover all major cities in India with timely and safe delivery.',
      benefits: ['Nationwide coverage', 'Safe packaging', 'On-time delivery', 'Dedicated coordinator'],
      img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'packing',
      title: 'Packing & Unpacking Services',
      icon: <Package className="w-12 h-12" />,
      desc: 'High-quality packing materials and professional techniques to ensure your items are protected throughout.',
      benefits: ['Premium materials', 'Expert packing techniques', 'Systematic labeling', 'Safe unpacking'],
      img: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Comprehensive relocation solutions designed for safety, efficiency, and peace of mind.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:items-center gap-12 ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors rounded-2xl"></div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="text-primary mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                  >
                    Book This Service <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Working Process</h2>
            <p className="text-gray-600">How we ensure a smooth relocation for you.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Survey', desc: 'Pre-move assessment' },
              { step: '02', title: 'Packing', desc: 'High-quality materials' },
              { step: '03', title: 'Loading', desc: 'Safe handling' },
              { step: '04', title: 'Transport', desc: 'Real-time tracking' },
              { step: '05', title: 'Unpacking', desc: 'Setup at destination' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 relative">
                <span className="text-4xl font-black text-gray-100 absolute top-4 left-4">{item.step}</span>
                <div className="relative z-10">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
