"use client";

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  MapPin, 
  Bookmark, 
  Clock, 
  Building2, 
  Code, 
  Megaphone, 
  Palette, 
  Briefcase, 
  DollarSign, 
  Heart,
  Star,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ChevronDown,
  User,
  Users,
  FileText,
  BriefcaseBusiness
} from 'lucide-react';
import Image from 'next/image';

// Company logos with working URLs
const logos = {
  google: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  amazon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  microsoft: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  apple: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  meta: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
  netflix: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  tesla: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
  uber: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg',
  airbnb: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
  spotify: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
  adobe: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo.svg/1200px-Adobe_Systems_logo.svg.png',
  salesforce: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg'
};

export default function JobBoardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [savedJobs, setSavedJobs] = useState(new Set());
  const [currentReview, setCurrentReview] = useState(0);
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    jobs: 0,
    companies: 0,
    candidates: 0,
    successRate: 0
  });
  const [isRecruiterDropdownOpen, setIsRecruiterDropdownOpen] = useState(false);
  const statsRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRecruiterDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Scroll trigger for stats counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.unobserve(statsRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateStats = () => {
    const targetStats = {
      jobs: 10000,
      companies: 5000,
      candidates: 6000,
      successRate: 98
    };

    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setAnimatedStats({
        jobs: Math.floor(targetStats.jobs * progress),
        companies: Math.floor(targetStats.companies * progress),
        candidates: Math.floor(targetStats.candidates * progress),
        successRate: Math.floor(targetStats.successRate * progress)
      });

      if (frame === totalFrames) clearInterval(counter);
    }, frameDuration);
  };

  // Auto-rotate reviews and featured jobs
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    const featuredInterval = setInterval(() => {
      setCurrentFeatured((prev) => (prev + 1) % featuredJobs.length);
    }, 3000);

    return () => {
      clearInterval(reviewInterval);
      clearInterval(featuredInterval);
    };
  }, []);

  const toggleSaveJob = (jobId) => {
    const newSavedJobs = new Set(savedJobs);
    if (newSavedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
    } else {
      newSavedJobs.add(jobId);
    }
    setSavedJobs(newSavedJobs);
  };

  const jobListings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      featured: false
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Creative Solutions",
      location: "Remote",
      type: "Contract",
      featured: false
    },
  ];

  const featuredJobs = [
    {
      id: 101,
      title: "Digital Marketing Specialist",
      company: "SCO Digital Marketing",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 102,
      title: "Social Media Manager",
      company: "Social Buzz Marketing",
      featured: true,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 103,
      title: "UX/UI Designer",
      company: "DesignHub",
      featured: true,
      image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 104,
      title: "Frontend Developer",
      company: "WebCraft",
      featured: true,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const categories = [
    { name: "Technology", count: "1,234 jobs", icon: Code, color: "bg-blue-100 text-blue-600" },
    { name: "Marketing", count: "856 jobs", icon: Megaphone, color: "bg-purple-100 text-purple-600" },
    { name: "Design", count: "643 jobs", icon: Palette, color: "bg-green-100 text-green-600" },
    { name: "Sales", count: "532 jobs", icon: Briefcase, color: "bg-orange-100 text-orange-600" },
    { name: "Finance", count: "421 jobs", icon: DollarSign, color: "bg-yellow-100 text-yellow-600" },
    { name: "Healthcare", count: "312 jobs", icon: Heart, color: "bg-red-100 text-red-600" }
  ];

  const trustedCompanies = [
    { name: "Google", logo: logos.google },
    { name: "Amazon", logo: logos.amazon },
    { name: "Microsoft", logo: logos.microsoft },
    { name: "Apple", logo: logos.apple },
    { name: "Meta", logo: logos.meta },
    { name: "Netflix", logo: logos.netflix },
    { name: "Tesla", logo: logos.tesla },
    { name: "Uber", logo: logos.uber },
    { name: "Airbnb", logo: logos.airbnb },
    { name: "Spotify", logo: logos.spotify },
    { name: "Adobe", logo: logos.adobe },
    { name: "Salesforce", logo: logos.salesforce }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Designer at Airbnb",
      content: "Synture helped me find my dream job in just two weeks. The platform is incredibly intuitive and the job matching is spot on!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Senior Engineer at Google",
      content: "As someone who was hesitant about job platforms, Synture proved me wrong. The quality of opportunities is unmatched.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director at Spotify",
      content: "Our company found three amazing candidates through Synture in less than a month. The recruitment process has never been smoother.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm, 'in', location);
  };

  const handleQuickApply = (jobId) => {
    console.log('Quick apply for job:', jobId);
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Synture</h1>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              
              {/* Recruiters Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsRecruiterDropdownOpen(!isRecruiterDropdownOpen)}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span>Recruiters</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isRecruiterDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isRecruiterDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <BriefcaseBusiness className="w-5 h-5 mr-3 text-blue-500" />
                      <span>Jobs</span>
                    </Link>
                    <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <Users className="w-5 h-5 mr-3 text-blue-500" />
                      <span>Companies</span>
                    </Link>
                    <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <FileText className="w-5 h-5 mr-3 text-blue-500" />
                      <span>Resources</span>
                    </Link>
                    <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <Briefcase className="w-5 h-5 mr-3 text-blue-500" />
                      <span>Careers</span>
                    </Link>
                  </div>
                )}
              </div>
              
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
                Sign In
              </Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Job Title or Keywords"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium"
                >
                  Search
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Remote</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Full-time</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Engineering</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Marketing</span>
              </div>
            </div>

            {/* Job Listings */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Latest Job Opportunities</h2>
                <Link href="/login" className="text-blue-600 hover:text-blue-800 flex items-center">
                  View all jobs <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobListings.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <Building2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{job.title}</h3>
                          <p className="text-gray-600 text-sm">{job.company}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSaveJob(job.id)}
                        className={`p-2 rounded-lg ${
                          savedJobs.has(job.id)
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="mr-4">{job.location}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{job.type}</span>
                    </div>
                    <button
                      onClick={() => handleQuickApply(job.id)}
                      className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 font-medium"
                    >
                      Quick Apply
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link href="/login" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                  View More Jobs
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80">
            {/* Featured Jobs Slider */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="relative h-64 md:h-80 lg:h-[525px] w-full">
                <Image
                  src={featuredJobs[currentFeatured].image}
                  alt={featuredJobs[currentFeatured].title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-white text-xl">{featuredJobs[currentFeatured].title}</h3>
                      <p className="text-white/80">{featuredJobs[currentFeatured].company}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      Featured
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-4 space-x-2">
                {featuredJobs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeatured(index)}
                    className={`w-2 h-2 rounded-full ${index === currentFeatured ? 'bg-blue-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Browse by Category */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Clients */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center">Our Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <div className="relative h-10 w-full">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    layout="fill"
                    objectFit="contain"
                    className="filter grayscale hover:grayscale-0 transition-all"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Counter */}
        <div 
          ref={statsRef}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-sm p-12 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-3">{animatedStats.jobs.toLocaleString()}+</div>
              <div className="text-blue-200 text-lg">Jobs Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-3">{animatedStats.companies.toLocaleString()}+</div>
              <div className="text-blue-200 text-lg">Companies Hiring</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-3">{animatedStats.candidates.toLocaleString()}+</div>
              <div className="text-blue-200 text-lg">Candidates Hired</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-3">{animatedStats.successRate}%</div>
              <div className="text-blue-200 text-lg">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center">What People Say</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="transition-all duration-300">
                <div className="flex flex-col items-center text-center px-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-blue-100">
                    <Image
                      src={reviews[currentReview].avatar}
                      alt={reviews[currentReview].name}
                      width={80}
                      height={80}
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="mb-6 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < reviews[currentReview].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg mb-6">
                    "{reviews[currentReview].content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{reviews[currentReview].name}</p>
                    <p className="text-gray-600">{reviews[currentReview].position}</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex justify-center mt-8 space-x-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full ${index === currentReview ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Synture</h3>
              <p className="text-gray-600">Connecting talent with opportunity</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">For Job Seekers</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-gray-900">Companies</a></li>
                <li><a href="#" className="hover:text-gray-900">Saved Jobs</a></li>
                <li><a href="#" className="hover:text-gray-900">Job Alerts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">For Employers</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Post a Job</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">Recruitment Solutions</a></li>
                <li><a href="#" className="hover:text-gray-900">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">© 2025 Synture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}