import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Example images - replace with your actual images
const HERO_IMAGE = '/images/campus-aerial.jpg';
const EVENT_IMAGES = {
  gala: '/images/event-gala.jpg',
  networking: '/images/event-networking.jpg',
  homecoming: '/images/event-homecoming.jpg'
};
const TESTIMONIAL_IMAGES = {
  person1: '/images/testimonial-1.jpg',
  person2: '/images/testimonial-2.jpg',
  person3: '/images/testimonial-3.jpg'
};

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <FeaturesSection />
      <EventsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CallToActionSection />
    </div>
  );
};

// Hero Section with Video Background
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video or Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="University campus aerial view" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative text-white text-center md:text-left md:max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            YOUR ALUMNI COMMUNITY
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Connect With Your <span className="text-blue-400">Global Network</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl">
            Join thousands of alumni to expand your network, attend exclusive events, and stay connected with your alma mater.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to="/register" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Join Now
            </Link>
            <Link 
              to="/events" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-md font-medium text-lg transition-colors backdrop-blur-sm"
            >
              Explore Events
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Alumni Directory",
      description: "Connect with thousands of alumni from across the globe to expand your professional network."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Exclusive Events",
      description: "Attend both virtual and in-person events designed specifically for our alumni community."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: "Latest Updates",
      description: "Stay informed about the latest news and achievements from your alma mater."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Career Resources",
      description: "Access exclusive job boards, mentorship programs, and professional development resources."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold">OUR BENEFITS</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            Why Join Our Alumni Network?
          </h2>
          <p className="text-xl text-gray-600">
            Our alumni portal provides valuable resources and opportunities to keep you connected with your university community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Upcoming Events Section
const EventsSection = () => {
  // Example events - these would typically come from an API
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Gala",
      date: "November 15, 2023",
      location: "Grand Ballroom, Alumni Center",
      image: EVENT_IMAGES.gala,
      price: 75
    },
    {
      id: 2,
      title: "Career Networking Mixer",
      date: "October 22, 2023",
      location: "Conference Hall, Business Building",
      image: EVENT_IMAGES.networking,
      price: 25
    },
    {
      id: 3,
      title: "Homecoming Weekend",
      date: "December 5, 2023",
      location: "University Campus",
      image: EVENT_IMAGES.homecoming,
      price: 50
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold">JOIN US</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Join us for these exciting events designed to bring our alumni community together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {event.title}
                </h3>
                <div className="mb-4 text-gray-600">
                  <div className="flex items-center mb-1">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {event.location}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    ${event.price}
                  </span>
                  <Link 
                    to={`/events/${event.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/events" 
            className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
          >
            View All Events
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Statistics Section
const StatisticsSection = () => {
  const stats = [
    { value: "10,000+", label: "Alumni Network" },
    { value: "50+", label: "Annual Events" },
    { value: "120+", label: "Countries Represented" },
    { value: "25+", label: "Years of Excellence" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-blue-200 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The alumni network has been instrumental in my career growth. I've connected with professionals who have provided valuable mentorship and opportunities.",
      author: "Sarah Johnson",
      role: "Class of 2010, Marketing Director",
      image: TESTIMONIAL_IMAGES.person1
    },
    {
      quote: "Being part of this alumni community has allowed me to give back to the university that gave me so much. I'm proud to be connected to this network of extraordinary individuals.",
      author: "Michael Chen",
      role: "Class of 2005, Software Engineer",
      image: TESTIMONIAL_IMAGES.person2
    },
    {
      quote: "The events organized by the alumni association are top-notch. I've made valuable connections and even found my current business partner at one of the networking mixers!",
      author: "Jessica Rodriguez",
      role: "Class of 2015, Entrepreneur",
      image: TESTIMONIAL_IMAGES.person3
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            What Our Alumni Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from members of our community about their experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="text-5xl text-blue-500 absolute top-4 left-4 opacity-10 leading-none">
                "
              </div>
              <p className="text-gray-700 mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Partners & Sponsors Section
const PartnersSection = () => {
  // Example partners - replace with actual partner logos
  const partners = [
    { name: "Company 1", logo: "/images/partner-1.png" },
    { name: "Company 2", logo: "/images/partner-2.png" },
    { name: "Company 3", logo: "/images/partner-3.png" },
    { name: "Company 4", logo: "/images/partner-4.png" },
    { name: "Company 5", logo: "/images/partner-5.png" },
    { name: "Company 6", logo: "/images/partner-6.png" }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">OUR PARTNERS</span>
          <h2 className="text-3xl font-serif font-bold mt-2">
            Strategic Partners & Sponsors
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 md:h-16 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Call to Action Section
const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Join Your Alumni Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Become a member today and unlock a world of networking, events, and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Join Now
            </Link>
            <Link 
              to="/login" 
              className="bg-transparent text-white border border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Member Login
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
