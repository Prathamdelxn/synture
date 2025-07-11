"use client";

import { motion } from 'framer-motion';
import { 
  Globe, 
  Users, 
  Award, 
  Clock, 
  Code, 
  Server, 
  BarChart2, 
  Shield, 
  Layers, 
  Smartphone, 
  Monitor, 
  RefreshCw, 
  ShoppingCart, 
  Zap, 
  Search, 
  Wrench,
  ArrowLeft,
  CheckCircle,
  Heart,
  Lightbulb,
  Eye,
  MousePointer,
  PieChart,
  Quote,
  Star,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Tech stack logos
const techLogos = [
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'SAP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sap/sap-original.svg' },
  { name: 'Salesforce', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
];

// Client logos
const clientLogos = [
  { name: 'Client 1', logo: 'https://via.placeholder.com/150x80?text=Client+1' },
  { name: 'Client 2', logo: 'https://via.placeholder.com/150x80?text=Client+2' },
  { name: 'Client 3', logo: 'https://via.placeholder.com/150x80?text=Client+3' },
  { name: 'Client 4', logo: 'https://via.placeholder.com/150x80?text=Client+4' },
  { name: 'Client 5', logo: 'https://via.placeholder.com/150x80?text=Client+5' },
  { name: 'Client 6', logo: 'https://via.placeholder.com/150x80?text=Client+6' },
];

// Services data
const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Custom iOS & Android apps with focus on performance, UX, and seamless integration."
  },
  {
    icon: Monitor,
    title: "Desktop Applications",
    description: "Cross-platform desktop solutions to streamline workflows and boost productivity."
  },
  {
    icon: RefreshCw,
    title: "Product Re-engineering",
    description: "Modernize legacy systems with cutting-edge technologies for better performance."
  },
  {
    icon: Wrench,
    title: "Application Maintenance",
    description: "Proactive support to keep your applications secure and up-to-date."
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    description: "End-to-end IT infrastructure solutions for reliability and scalability."
  },
  {
    icon: Layers,
    title: "Enterprise Solutions",
    description: "Custom Salesforce, ServiceNow, and SAP implementations for your business."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description: "Secure, scalable online stores with integrated payment gateways."
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks to reduce errors and increase efficiency."
  },
  {
    icon: Search,
    title: "Quality Assurance",
    description: "Comprehensive testing services to ensure software reliability."
  },
  {
    icon: BarChart2,
    title: "SEO Services",
    description: "Increase visibility and organic traffic with proven strategies."
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Data-driven campaigns to build brand awareness and drive conversions."
  },
  {
    icon: Users,
    title: "IT Staffing",
    description: "Skilled professionals to augment your team and scale operations."
  }
];

// Client reviews
const clientReviews = [
  {
    company: "TechCorp Solutions",
    reviewer: "John Smith",
    position: "CTO",
    rating: 5,
    review: "Synture delivered exceptional results for our mobile app development. The user engagement increased by 75% within weeks of launch.",
    logo: "TC"
  },
  {
    company: "DataSystems Inc",
    reviewer: "Sarah Johnson",
    position: "Product Director",
    rating: 5,
    review: "Their expertise in enterprise solutions transformed our operations. We saw a 40% improvement in workflow efficiency post-implementation.",
    logo: "DS"
  },
  {
    company: "Global Retail",
    reviewer: "Michael Chen",
    position: "E-commerce Manager",
    rating: 5,
    review: "Our online store's conversion rates doubled after Synture's redesign. Their attention to UX details was remarkable.",
    logo: "GR"
  },
  {
    company: "FinTech Partners",
    reviewer: "Emily Rodriguez",
    position: "VP Engineering",
    rating: 5,
    review: "The infrastructure solutions provided by Synture gave us the scalability we needed for our growing customer base.",
    logo: "FP"
  }
];

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [counters, setCounters] = useState({
    employees: 0,
    projects: 0,
    experience: 0,
    clients: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const techScrollRef = useRef(null);

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
    const targetValues = {
      employees: 200,
      projects: 100,
      experience: 6,
      clients: 50
    };

    Object.keys(targetValues).forEach((key) => {
      const duration = 2000;
      const steps = 60;
      const increment = targetValues[key] / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValues[key]) {
          current = targetValues[key];
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: current
        }));
      }, duration / steps);
    });
  };

  // Auto-scroll for tech logos
  useEffect(() => {
    const scrollContainer = techScrollRef.current;
    let scrollAmount = 0;
    let scrollDirection = 1;
    
    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollDirection;
        scrollContainer.scrollLeft = scrollAmount;
        
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollDirection = -1;
        } else if (scrollAmount <= 0) {
          scrollDirection = 1;
        }
      }
    };

    const scrollInterval = setInterval(scroll, 20);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Welcome to <span className="text-blue-600">Synture</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            PRECISION | QUALITY | SATISFACTION
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            We specialize in Data Analytics, ERP solutions, web and mobile development, 
            and IT support with over 100 successful projects delivered globally.
          </p>
        </section>

        {/* Impact Statistics */}
        <section id="stats-section" className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <Users className="w-10 h-10 mx-auto mb-4 text-blue-600 hover:text-blue-700 transition-colors" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {Math.round(counters.employees)}+
              </div>
              <div className="text-gray-600">Employees</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <Award className="w-10 h-10 mx-auto mb-4 text-blue-600 hover:text-blue-700 transition-colors" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {Math.round(counters.projects)}+
              </div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <Clock className="w-10 h-10 mx-auto mb-4 text-blue-600 hover:text-blue-700 transition-colors" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {Math.round(counters.experience)}+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <Globe className="w-10 h-10 mx-auto mb-4 text-blue-600 hover:text-blue-700 transition-colors" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {Math.round(counters.clients)}+
              </div>
              <div className="text-gray-600">Global Clients</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began in 2013 as Synture, we've grown to a team of 200+ professionals 
                serving clients worldwide with a 100% annual growth rate fueled by our commitment to quality.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Synture Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Mission/Vision/Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Principles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                "Innovation by Invention - implementing new methods to solve client problems and invent solutions."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                "Partner with all clients to optimize situational awareness, security, and efficiency through innovative solutions."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                "We value our clients, understand their business, and maintain integrity in everything we do."
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Scroller */}
        <section className="mb-16 bg-gray-100 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Technology Stack</h2>
          <div 
            ref={techScrollRef}
            className="flex space-x-12 py-6 overflow-x-auto scrollbar-hide"
          >
            {techLogos.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-lg flex items-center justify-center p-4">
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services Portfolio</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              We continuously add the latest trends and technologies to our service portfolio as the market evolves.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-blue-100`}>
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Models */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Business Models</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fixed-Price Model</h3>
              <p className="text-gray-600 mb-4">
                Clear scope with defined deliverables and timelines for a mutually agreed price.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Clear budget planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Predefined performance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hourly Rate Model</h3>
              <p className="text-gray-600 mb-4">
                Flexible hourly engagement for evolving ideas or minor enhancements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Pay only for work done</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Flexible requirements</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Teams</h3>
              <p className="text-gray-600 mb-4">
                Exclusive team working continuously on your project with full support.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Always-on support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Deep product knowledge</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maintenance Model</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective maintenance at competitive rates with flexible hours.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Budget-friendly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Consistent quality</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quality Promise */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-white hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6">Our Quality Promise</h2>
            <p className="text-xl mb-8 max-w-3xl">
              "We go the extra mile to do ordinary things in unique ways! We promise quality and deliver what was promised and more."
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  Fit for Purpose
                </h3>
                <p className="text-white/90">
                  Ensuring products are perfectly suited for their intended use from the planning stage.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  Right First Time
                </h3>
                <p className="text-white/90">
                  Eliminating mistakes before deployment to protect your brand equity.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                  Total Quality
                </h3>
                <p className="text-white/90">
                  Quality reflected in products, processes, and people at every step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h2>
          
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

        {/* Clients Section */}
        <section className="mb-16 bg-white py-12 px-8 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Valued Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg flex items-center justify-center hover:shadow-md transition-all border border-gray-200 hover:scale-105"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
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
                Send Message
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@synturesolutions.com</p>
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
                  <h3 className="font-medium text-gray-900">Office</h3>
                  <p className="text-gray-600">123 Design Street, Suite 400<br />San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors duration-300">
              <h3 className="font-semibold text-gray-900 mb-3">Schedule a Demo</h3>
              <p className="text-gray-600 mb-4">
                See how Synture can transform your digital products and drive business growth.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-all duration-300 hover:scale-105">
                Book a Call
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

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}