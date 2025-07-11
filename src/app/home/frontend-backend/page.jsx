"use client";

import Link from 'next/link';
import { 
  Code,
  Cpu,
  Database,
  Server,
  LayoutDashboard,
  Smartphone,
  GitBranch,
  Shield,
  Zap,
  Terminal,
  GitPullRequest,
  Cloud,
  Clock,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin,
  Send,
  Star,
  Quote,
  PieChart,
  BarChart3,
  CheckCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DevelopmentServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [counters, setCounters] = useState({
    performance: 0,
    uptime: 0,
    projects: 0,
    clients: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const stats = [
    { number: 90, suffix: "%", label: "Performance Improvement", icon: Zap, key: "performance" },
    { number: 99.9, suffix: "%", label: "System Uptime", icon: Clock, key: "uptime" },
    { number: 150, suffix: "+", label: "Projects Completed", icon: Code, key: "projects" },
    { number: 80, suffix: "+", label: "Satisfied Clients", icon: Users, key: "clients" }
  ];

  const processSteps = [
    { 
      step: "1", 
      title: "Requirement Analysis", 
      description: "We thoroughly analyze your business needs to create optimal technical solutions",
      icon: Terminal
    },
    { 
      step: "2", 
      title: "Architecture Design", 
      description: "Designing scalable and maintainable system architectures",
      icon: LayoutDashboard
    },
    { 
      step: "3", 
      title: "Agile Development", 
      description: "Implementing features using modern development practices",
      icon: GitBranch
    },
    { 
      step: "4", 
      title: "Testing & Deployment", 
      description: "Ensuring quality through rigorous testing and seamless deployment",
      icon: Cloud
    }
  ];

  const clientReviews = [
    {
      company: "FinTech Solutions",
      reviewer: "David Wilson",
      position: "CTO",
      rating: 5,
      review: "The development team delivered a robust banking platform that handles 10,000+ transactions per minute with 99.99% uptime. Their backend architecture is impeccable.",
      logo: "FS"
    },
    {
      company: "HealthTrack",
      reviewer: "Emily Rodriguez",
      position: "Product Manager",
      rating: 5,
      review: "Our patient portal built by Synture has reduced appointment scheduling time by 75% and increased patient engagement by 60%. The React frontend is incredibly responsive.",
      logo: "HT"
    }
  ];

  // Auto counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.number / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [stat.key]: current
        }));
      }, duration / steps);
    });
  };

  const formatNumber = (num, suffix) => {
    if (suffix === "+") {
      return Math.round(num) + suffix;
    }
    return num.toFixed(suffix === "%" ? 1 : 0) + suffix;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Expert <span className="text-blue-600">Frontend & Backend</span> Development Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            We build high-performance web applications with modern technologies, scalable architectures, and pixel-perfect interfaces.
          </p>
        </section>

        {/* Impact Statistics */}
        <section id="stats-section" className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-blue-600 hover:text-blue-700 transition-colors" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {formatNumber(counters[stat.key], stat.suffix)}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Development Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Full-Stack Development Expertise</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Our team specializes in <span className="font-semibold">React, Next.js, Node.js, and modern backend technologies</span> to create seamless, high-performance applications.
                </p>
                <p className="text-gray-700">
                  We implement <span className="font-semibold">RESTful APIs, GraphQL, and WebSockets</span> for real-time functionality, with a focus on security, scalability, and maintainability.
                </p>
                <p className="text-gray-700">
                  From single-page applications to complex enterprise systems, we deliver solutions that drive business growth and enhance user experiences.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg hover:bg-blue-100 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Development Process</h3>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start group hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <step.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Smartphone className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Frontend Development</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  React, Next.js, and Vue.js development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Responsive and accessible UI/UX implementation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  State management with Redux, Context API
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Performance optimization and testing
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Backend Development</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Node.js, Python, Java, and .NET Core
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Database design (SQL & NoSQL)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  API development and integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cloud deployment and server management
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Development Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 hover:bg-purple-200 transition-colors">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Platform</h3>
              <p className="text-gray-600 mb-4">
                Built a secure transaction processing system handling $2B+ annually with 99.99% uptime.
              </p>
              <div className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">Read Case Study →</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 hover:bg-green-200 transition-colors">
                <Cpu className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare SaaS</h3>
              <p className="text-gray-600 mb-4">
                Developed HIPAA-compliant patient management system reducing admin work by 40 hours/week.
              </p>
              <div className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">Read Case Study →</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 hover:bg-orange-200 transition-colors">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 mb-4">
                Created custom e-commerce solution scaling to 1M+ products with sub-second load times.
              </p>
              <div className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">Read Case Study →</div>
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Client Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {clientReviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">{review.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.company}</h3>
                    <p className="text-gray-600 text-sm">{review.reviewer} • {review.position}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-300" />
                  <p className="text-gray-700 italic pl-4">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Technical Consultation</h2>
            <div>
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors hover:border-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors hover:border-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors hover:border-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors hover:border-gray-400"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Get Free Consultation
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Support</h2>
            <div className="space-y-6">
              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">dev@synturesolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (243) 457-98</p>
                </div>
              </div>
              
              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Development Center</h3>
                  <p className="text-gray-600">456 Tech Boulevard, Suite 700<br />San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors duration-300">
              <h3 className="font-semibold text-gray-900 mb-3">Free Architecture Review</h3>
              <p className="text-gray-600 mb-4">
                Book a 45-minute technical consultation with our lead architect to review your project needs.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-all duration-300 hover:scale-105">
                Schedule Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}