import { motion } from 'motion/react';
import { Target, Heart, Shield, Users, Award, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Swarni Packers and Movers</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Simplifying relocation with safety, transparency, and professional care.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Swarni Packers and Movers was founded with a mission to simplify relocation for individuals and businesses. In just one year, we have successfully helped hundreds of customers move safely and efficiently.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We understand that moving is stressful. That’s why we focus on providing reliable packers and movers services with complete transparency. Our team is dedicated to making every move a positive experience.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <p className="text-3xl font-bold text-primary mb-1">500+</p>
                  <p className="text-sm text-gray-500 uppercase font-bold">Moves Completed</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <p className="text-3xl font-bold text-primary mb-1">100%</p>
                  <p className="text-sm text-gray-500 uppercase font-bold">Safety Focus</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-square max-h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=1000"
                  alt="Professional Packing Service"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-lg hidden md:block">
                <Award className="w-8 h-8 mb-2" />
                <p className="font-bold text-lg">Top Rated in Ratnagiri</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide our daily operations and customer service.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To deliver safe, affordable, and hassle-free relocation services across India, ensuring peace of mind for every customer.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <Heart className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Customer First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We prioritize customer satisfaction above all else, listening to needs and providing customized relocation solutions.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <Shield className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Safety & Integrity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Commitment to safety through high-quality packing and transparency in pricing with no hidden charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000"
                  alt="Logistics Team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Professional Team</h2>
              <p className="text-gray-600 mb-6">
                Led by a dedicated sole proprietor, our team includes trained packers, drivers, and logistics experts who ensure smooth execution of every move.
              </p>
              <ul className="space-y-4">
                {[
                  'Background-checked and verified staff',
                  'Trained in handling fragile and heavy items',
                  'Expert logistics planning and coordination',
                  'Dedicated customer support team',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-blue-100">Successful Relocations</p>
            </div>
            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Target className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-blue-100">On-Time Delivery Rate</p>
            </div>
            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <p className="text-4xl font-bold mb-2">4.9/5</p>
              <p className="text-blue-100">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
