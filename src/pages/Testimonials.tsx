import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Priya Sharma', category: 'Home Shifting', text: 'Very smooth experience. No damage at all!' },
    { name: 'Rahul Joshi', category: 'Office Relocation', text: 'Professional team and quick service.' },
    { name: 'Neha Patil', category: 'Local Moving', text: 'Affordable and reliable packers and movers.' },
    { name: 'Vikas More', category: 'Car Transport', text: 'My car reached safely without scratches.' },
    { name: 'Anjali Deshmukh', category: 'Home Shifting', text: 'Best movers and packers in Ratnagiri!' },
    { name: 'Sandeep Sawant', category: 'Interstate Moving', text: 'Highly professional and punctual.' },
    { name: 'Pooja Kulkarni', category: 'Local Moving', text: 'Great service and friendly staff.' },
    { name: 'Kiran Patil', category: 'Office Relocation', text: 'Transparent pricing and no hidden costs.' },
    { name: 'Sanjay Kadam', category: 'Home Shifting', text: 'Highly recommended for anyone looking for safe and timely relocation.' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our References</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. See what our satisfied customers have to say about their moving experience.
          </p>
        </div>
      </section>

      {/* References Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative flex flex-col h-full"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-100" />
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t.name}</h3>
                    <p className="text-xs text-primary font-medium uppercase tracking-wider">{t.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Happy Customers</h2>
          <p className="text-gray-600 mb-10">Experience the same stress-free relocation for your next move.</p>
          <a
            href="/contact"
            className="inline-block bg-cta hover:bg-cta-hover text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg"
          >
            Get Your Free Quote Now
          </a>
        </div>
      </section>
    </div>
  );
}
