import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '', phone: '', email: '', pickup: '', drop: '', date: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', phone: '', email: '', pickup: '', drop: '', date: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      <section className="bg-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Get a free quote or ask us any questions about your upcoming relocation.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-primary"><MapPin className="w-6 h-6" /></div>
                    <div>
                      <h3 className="font-bold text-gray-900">Our Location</h3>
                      <p className="text-gray-600 text-sm">ITI Link Road, Shivaji Nagar, Ratnagiri - 415612</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-primary"><Phone className="w-6 h-6" /></div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phone Number</h3>
                      <p className="text-gray-600 text-sm">+91-XXXXXXXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-primary"><Mail className="w-6 h-6" /></div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email Address</h3>
                      <p className="text-gray-600 text-sm">info@swarnipackers.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-2xl">
                <MessageSquare className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Quick Response</h3>
                <p className="text-gray-400 text-sm">We typically respond within 30 minutes during business hours.</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                {isSuccess ? (
                  <div className="bg-green-50 p-8 rounded-2xl text-center">
                    <Send className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
                    <button onClick={() => setIsSuccess(false)} className="text-primary font-bold">Send another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <input required type="text" name="name" value={formState.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Full Name" />
                      <input required type="tel" name="phone" value={formState.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Phone Number" />
                    </div>
                    <input required type="email" name="email" value={formState.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Email Address" />
                    <div className="grid md:grid-cols-2 gap-6">
                      <input required type="text" name="pickup" value={formState.pickup} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Pickup Location" />
                      <input required type="text" name="drop" value={formState.drop} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Drop Location" />
                    </div>
                    <input required type="date" name="date" value={formState.date} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                    <textarea name="message" value={formState.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Message..."></textarea>
                    <button disabled={isSubmitting} type="submit" className="w-full bg-cta text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
