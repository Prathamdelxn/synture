"use client";

import Link from 'next/link';
import React, { useState } from 'react';
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
  Star
} from 'lucide-react';

export default function JobBoardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [savedJobs, setSavedJobs] = useState(new Set());

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
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      featured: false
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      featured: false
    },
    {
      id: 4,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      featured: false
    }
  ];

  const featuredJobs = [
    {
      id: 101,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      type: "Full-time",
      featured: true
    },
    {
      id: 102,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      type: "Full-time",
      featured: true
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

  const handleSearch = () => {
    console.log('Searching for:', searchTerm, 'in', location);
  };

  const handleQuickApply = (jobId) => {
    console.log('Quick apply for job:', jobId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Synture</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Jobs</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Companies</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            </nav>
            <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
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
                    className="w-full pl-10 pr-4 py-3  text-black  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Latest Job Opportunities</h2>
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
            </div>

            {/* Browse by Category */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <div key={category.name} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${category.color}`}>
                        <category.icon className="w-5 h-5" />
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
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80">
            {/* Featured Jobs */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Jobs</h3>
              <div className="space-y-4">
                {featuredJobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{job.title}</h4>
                        <p className="text-gray-600 text-sm">{job.company}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="mr-3">{job.location}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsored Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sponsored Content</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <p className="text-gray-500 text-sm">Advertisement</p>
                  <div className="h-24 bg-gray-200 rounded-lg mt-2"></div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <p className="text-gray-500 text-sm">Advertisement</p>
                  <div className="h-24 bg-gray-200 rounded-lg mt-2"></div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <p className="text-gray-500 text-sm">Advertisement</p>
                  <div className="h-24 bg-gray-200 rounded-lg mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Synture</h3>
              <p className="text-gray-600 text-sm">Connecting talent with opportunity</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-gray-900">Companies</a></li>
                <li><a href="#" className="hover:text-gray-900">Saved Jobs</a></li>
                <li><a href="#" className="hover:text-gray-900">Job Alerts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">For Employers</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Post a Job</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">Recruitment Solutions</a></li>
                <li><a href="#" className="hover:text-gray-900">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">© 2025 Synture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

