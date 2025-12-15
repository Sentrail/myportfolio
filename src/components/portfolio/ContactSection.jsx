import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Install via: npm install @emailjs/browser

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Replace these with your own EmailJS credentials (get from emailjs.com dashboard)
  const EMAILJS_SERVICE_ID = 'service_vl4qwai'; // e.g., 'service_abc123'
  const EMAILJS_TEMPLATE_ID = 'template_a0ifu0q'; // e.g., 'template_def456'
  const EMAILJS_PUBLIC_KEY = 'zsMUJttPYT_oXqcen'; // e.g., 'user_ghi789'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    try {
      // Send email via EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target, // The form element
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully!', result.text); // For debugging
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Email send failed:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Sentrail', color: '#333' },
    { icon: Linkedin, url: 'https://linkedin.com/in/esentryc', color: '#0077B5' },
    { icon: Twitter, url: 'https://twitter.com', color: '#1DA1F2' },
    { icon: Mail, url: 'mailto:your.email@example.com', color: '#EA4335' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="full-bleed contact-section relative py-24 bg-linear-to-br from-[#0A2540] via-[#0D3A5F] to-[#0A2540] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#00D4FF] to-white mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-[#00D4FF] mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-white/70 text-center">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : error ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <AlertCircle className="w-16 h-16 text-red-400 mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Oops!</h4>
                  <p className="text-red-300 max-w-md">{error}</p>
                  <button
                    type="button"
                    onClick={() => setError('')}
                    className="mt-4 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="user_name" value={formData.name} />
                  <input type="hidden" name="user_email" value={formData.email} />
                  <input type="hidden" name="message" value={formData.message} />

                  <div>
                    <label htmlFor="name" className="block text-white/90 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="from_name" // EmailJS param
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00D4FF] transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/90 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="from_email" // EmailJS param
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00D4FF] transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/90 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message" // EmailJS param
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00D4FF] transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-4 bg-[#00D4FF] text-[#ffffff] font-semibold rounded-lg hover:bg-[#00D4FF]/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#0A2540]/30 border-t-[#0A2540] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <social.icon size={24} style={{ color: social.color }} />
                    </div>
                    <span className="text-white/90 group-hover:text-white font-medium">
                      {social.icon === Github && 'GitHub'}
                      {social.icon === Linkedin && 'LinkedIn'}
                      {social.icon === Twitter && 'Twitter'}
                      {social.icon === Mail && 'Email'}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                I'm always excited to work on new projects and collaborate with talented people. 
                Whether you have a specific idea or just want to explore possibilities, let's connect!
              </p>
              <div className="space-y-3 text-white/60">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full" />
                  Available for freelance projects
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full" />
                  Open to full-time opportunities
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full" />
                  Response within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button
            onClick={scrollToTop}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-all duration-300 hover:scale-105"
          >
            Back to Top ↑
          </button>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-white/50">
            © 2025 Yusuf Israel. Built with passion and modern web technologies.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}