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
  Users,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  ThumbsUp,
  Share2,
  Hash
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SocialMediaMarketingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [counters, setCounters] = useState({
    engagement: 0,
    followers: 0,
    reach: 0,
    leads: 0
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
    { number: 78, suffix: "%", label: "Increase in Engagement", icon: ThumbsUp, key: "engagement" },
    { number: 4.5, suffix: "x", label: "Growth in Followers", icon: Users, key: "followers" },
    { number: 320, suffix: "%", label: "Expanded Brand Reach", icon: Share2, key: "reach" },
    { number: 2.8, suffix: "x", label: "More Qualified Leads", icon: ShoppingCart, key: "leads" }
  ];

  const processSteps = [
    { 
      step: "1", 
      title: "Strategy Development", 
      description: "We create customized social media strategies aligned with your brand identity and business goals",
      icon: Lightbulb
    },
    { 
      step: "2", 
      title: "Content Creation", 
      description: "Crafting engaging, platform-specific content that resonates with your target audience",
      icon: MessageCircle
    },
    { 
      step: "3", 
      title: "Community Building", 
      description: "Growing and nurturing an active, loyal community around your brand",
      icon: Heart
    },
    { 
      step: "4", 
      title: "Performance Analysis", 
      description: "Continuous optimization based on detailed analytics and insights",
      icon: Eye
    }
  ];

  const clientReviews = [
    {
      company: "UrbanBrew",
      reviewer: "Jessica Martinez",
      position: "Brand Manager",
      rating: 5,
      review: "Synture transformed our social presence completely. Our Instagram engagement increased by 450% and we gained 25,000 new followers in just 3 months. Their content strategy was exactly what our brand needed.",
      logo: "UB"
    },
    {
      company: "TechNova",
      reviewer: "David Kim",
      position: "Digital Director",
      rating: 5,
      review: "The team's LinkedIn strategy helped us establish thought leadership in our industry. Our content reach grew from 5,000 to over 150,000 monthly impressions, generating high-quality B2B leads consistently.",
      logo: "TN"
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
            Strategic <span className="text-blue-600">Social Media Marketing</span> That Grows Your Brand
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            We create compelling social media strategies that increase engagement, build communities, and drive meaningful business results.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Social Media Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Social Media Solutions</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Our full-service social media marketing includes <span className="font-semibold">content creation, community management, paid advertising, and influencer partnerships</span> tailored to each platform's unique strengths.
                </p>
                <p className="text-gray-700">
                  We specialize in creating thumb-stopping content that stops the scroll and converts viewers into engaged followers and customers.
                </p>
                <p className="text-gray-700">
                  From TikTok trends to LinkedIn thought leadership, we develop platform-specific strategies that align with your brand voice and business objectives.
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

        {/* Platform Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Platform Expertise</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram Marketing</h3>
              <p className="text-gray-600 mb-4">
                Grow your brand with stunning visuals, Reels strategy, and influencer collaborations.
              </p>
              <div className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">Learn More →</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook Advertising</h3>
              <p className="text-gray-600 mb-4">
                Targeted campaigns that convert with advanced audience segmentation and retargeting.
              </p>
              <div className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">Learn More →</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">LinkedIn Strategy</h3>
              <p className="text-gray-600 mb-4">
                B2B lead generation and brand authority through thought leadership content.
              </p>
              <div className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">Learn More →</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">YouTube Growth</h3>
              <p className="text-gray-600 mb-4">
                Video content strategy that builds subscribers and drives traffic.
              </p>
              <div className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">Learn More →</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4">
                <Twitter className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Twitter Engagement</h3>
              <p className="text-gray-600 mb-4">
                Real-time engagement and community building through strategic tweeting.
              </p>
              <div className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">Learn More →</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <Hash className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">TikTok & Emerging</h3>
              <p className="text-gray-600 mb-4">
                Viral content strategies for new platforms to reach younger demographics.
              </p>
              <div className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">Learn More →</div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Social Media Audit</h2>
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Social Media Goals</label>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Social Media Consultation</h2>
            <div className="space-y-6">
              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">socialmedia@synturesolutions.com</p>
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
                  <p className="text-gray-600">123 Social Street, Suite 300<br />San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors duration-300">
              <h3 className="font-semibold text-gray-900 mb-3">Free Strategy Session</h3>
              <p className="text-gray-600 mb-4">
                Book a 30-minute consultation to discuss your social media challenges and growth opportunities.
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