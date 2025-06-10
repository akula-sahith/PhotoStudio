import React, { useState, useEffect } from 'react';
import { Camera, Users, Clock, Award, Heart, Baby, FileText, Calendar, Edit, Printer, Star, Mail, Phone, MapPin, Instagram, Facebook, Menu, X } from 'lucide-react';
import './App.css'
const PhotoStudioLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              <Camera className="inline-block w-8 h-8 mr-2 text-gray-700" />
              PixelPerfect
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group font-medium"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              {['Home', 'Services', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative overflow-hidden bg-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80)',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 animate-fade-in-up">
              Capture Your Moments
              <span className="block text-gray-600">with Perfection</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 animate-fade-in-up-delay">
              Professional photography and digital services that bring your vision to life
            </p>
            <div className="space-x-4 animate-fade-in-up-delay-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book a Session
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-gray-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-gray-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-20 w-8 h-8 bg-gray-100 rounded-full opacity-40"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Our Studio</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience, PixelPerfect Studio has been capturing life's most precious moments. 
              Our team of passionate photographers combines artistic vision with cutting-edge technology to deliver 
              exceptional results that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              From intimate portraits to grand celebrations, we specialize in creating timeless memories that you'll 
              treasure forever. Every shot is carefully crafted with attention to detail and creative flair.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Camera, title: 'Modern Equipment', desc: 'Latest professional cameras and lighting' },
                { icon: Users, title: 'Experienced Team', desc: 'Skilled photographers with artistic vision' },
                { icon: Clock, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' }
              ].map((feature, index) => (
                <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <feature.icon className="w-12 h-12 text-gray-700 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Weddings', desc: 'Capturing your special day with elegance and style', color: 'bg-gray-50' },
              { icon: Baby, title: 'Baby Shoots', desc: 'Precious moments of your little ones', color: 'bg-gray-50' },
              { icon: FileText, title: 'Passport Photos', desc: 'Professional ID photos meeting all requirements', color: 'bg-gray-50' },
              { icon: Calendar, title: 'Events', desc: 'Corporate and social event photography', color: 'bg-gray-50' },
              { icon: Edit, title: 'Photo Editing', desc: 'Professional retouching and enhancement', color: 'bg-gray-50' },
              { icon: Printer, title: 'Printing Services', desc: 'High-quality prints in various formats', color: 'bg-gray-50' }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                  <div className={`${service.color} h-32 flex items-center justify-center border-b border-gray-200`}>
                    <service.icon className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1469371670807-013ccf25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ].map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <img 
                  src={image} 
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: 'Basic', 
                price: '$199', 
                popular: false,
                features: ['2-hour session', '20 edited photos', 'Online gallery', 'Basic retouching']
              },
              { 
                name: 'Standard', 
                price: '$399', 
                popular: true,
                features: ['4-hour session', '50 edited photos', 'Online gallery', 'Advanced retouching', 'Print release']
              },
              { 
                name: 'Premium', 
                price: '$699', 
                popular: false,
                features: ['Full day coverage', '100+ edited photos', 'Online gallery', 'Advanced retouching', 'Print release', 'Album design']
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-lg border-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-gray-900' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${plan.popular ? 'bg-gray-900 hover:bg-gray-800 text-white' : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'}`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: '+1 (555) 123-4567' },
                  { icon: Mail, text: 'hello@pixelperfect.com' },
                  { icon: MapPin, text: '123 Studio Street, Photo City, PC 12345' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center group">
                    <contact.icon className="w-6 h-6 text-gray-700 mr-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-600">{contact.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[Instagram, Facebook].map((Icon, index) => (
                    <div key={index} className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 transform hover:scale-110 cursor-pointer">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 bg-white"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 bg-white"
                  />
                </div>
                <div>
                  <textarea 
                    rows="4" 
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 resize-none bg-white"
                  ></textarea>
                </div>
                <button 
                  onClick={() => alert('Message sent! We\'ll get back to you soon.')}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 text-gray-900">
              <Camera className="inline-block w-8 h-8 mr-2 text-gray-700" />
              PixelPerfect Studio
            </div>
            <p className="text-gray-600 mb-6">Capturing life's perfect moments, one click at a time.</p>
            <div className="flex justify-center space-x-6 mb-6">
              {[Instagram, Facebook].map((Icon, index) => (
                <div key={index} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300 transform hover:scale-110 cursor-pointer text-gray-700">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 PixelPerfect Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default PhotoStudioLanding;