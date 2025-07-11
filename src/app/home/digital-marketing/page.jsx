"use client";

import Link from 'next/link';
import { 
  ArrowLeft,
  TrendingUp,
  Target,
  CheckCircle,
  Heart,
  Lightbulb,
  Eye,
  MousePointer,
  PieChart,
  BarChart3,
  Zap,
  Mail,
  Phone,
  MapPin,
  Send,
  Star,
  Quote,
  Search,
  Globe,
  ShoppingCart,
  Users
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DigitalMarketingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [counters, setCounters] = useState({
    traffic: 0,
    leads: 0,
    conversion: 0,
    roi: 0
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
    { number: 85, suffix: "%", label: "Increase in Website Traffic", icon: Globe, key: "traffic" },
    { number: 3.2, suffix: "x", label: "More Qualified Leads", icon: Users, key: "leads" },
    { number: 60, suffix: "%", label: "Higher Conversion Rates", icon: ShoppingCart, key: "conversion" },
    { number: 5.8, suffix: "x", label: "Average ROI on Campaigns", icon: BarChart3, key: "roi" }
  ];

  const processSteps = [
    { 
      step: "1", 
      title: "Strategy Development", 
      description: "We create customized digital marketing strategies aligned with your business objectives",
      icon: Lightbulb
    },
    { 
      step: "2", 
      title: "Channel Optimization", 
      description: "Optimizing SEO, PPC, email, and content marketing for maximum impact",
      icon: Search
    },
    { 
      step: "3", 
      title: "Data-Driven Execution", 
      description: "Implementing campaigns with continuous performance tracking",
      icon: Zap
    },
    { 
      step: "4", 
      title: "Analysis & Scaling", 
      description: "Refining strategies based on analytics to scale successful initiatives",
      icon: Eye
    }
  ];

  const clientReviews = [
    {
      company: "EcoFurniture",
      reviewer: "Sarah Johnson",
      position: "Marketing Director",
      rating: 5,
      review: "Synture's digital marketing strategy tripled our online sales in 6 months. Their SEO and PPC expertise helped us dominate our niche market with a 400% increase in qualified leads.",
      logo: "EF"
    },
    {
      company: "TechGadgets",
      reviewer: "Michael Chen",
      position: "CEO",
      rating: 5,
      review: "The team transformed our digital presence completely. Our organic traffic grew from 2,000 to 25,000 monthly visitors, and customer acquisition costs dropped by 65%.",
      logo: "TG"
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
    if (suffix === "x") {
      return num.toFixed(1) + suffix;
    }
    return Math.round(num) + suffix;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Data-Driven <span className="text-blue-600">Digital Marketing</span> That Delivers Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            We craft customized digital marketing strategies that drive growth, increase conversions, and maximize your ROI.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Digital Marketing Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Digital Solutions</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Our full-service digital marketing approach combines <span className="font-semibold">SEO, PPC, content marketing, and conversion optimization</span> to create a powerful online presence for your brand.
                </p>
                <p className="text-gray-700">
                  We leverage cutting-edge tools and analytics to track every interaction, optimize campaigns in real-time, and ensure your marketing budget delivers maximum impact.
                </p>
                <p className="text-gray-700">
                  From local SEO to international e-commerce strategies, we tailor our approach to your specific business goals and target audience.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg hover:bg-blue-100 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Methodology</h3>
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
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 hover:bg-purple-200 transition-colors">
                <PieChart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Brand</h3>
              <p className="text-gray-600 mb-4">
                Increased monthly revenue by 320% through strategic PPC and conversion rate optimization.
              </p>
              <div className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">Read Case Study →</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 hover:bg-green-200 transition-colors">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">B2B SaaS Company</h3>
              <p className="text-gray-600 mb-4">
                Grew lead generation by 450% with targeted content marketing and SEO strategy.
              </p>
              <div className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">Read Case Study →</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 hover:bg-orange-200 transition-colors">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Service Business</h3>
              <p className="text-gray-600 mb-4">
                Achieved #1 Google rankings for 25+ keywords, increasing calls by 200% monthly.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Marketing Audit</h2>
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Marketing Goals</label>
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
                Get Free Audit
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Marketing Consultation</h2>
            <div className="space-y-6">
              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">marketing@synturesolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (243) 457-99</p>
                </div>
              </div>
              
              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Office</h3>
                  <p className="text-gray-600">123 Marketing Avenue, Suite 500<br />San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors duration-300">
              <h3 className="font-semibold text-gray-900 mb-3">Free Strategy Session</h3>
              <p className="text-gray-600 mb-4">
                Book a 30-minute consultation to discuss your marketing challenges and growth opportunities.
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