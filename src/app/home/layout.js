"use client";
 
import Link from 'next/link';
import { useState, useRef } from 'react';
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
 
export default function Layout({ children }) {
  const [isRecruiterDropdownOpen, setIsRecruiterDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
 
  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsRecruiterDropdownOpen(false);
    }
  };
 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Synture</h1>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="/home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
             
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
             
              <a href="/home/contact-us" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <a href="/home/about-us" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
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
        {children}
      </main>
 
      {/* Footer */}
      <footer className="bg-white">
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
                <li><a href="/home/about-us" className="hover:text-gray-900">About Us</a></li>
                <li><a href="/home/contact-us" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="/home/terms" className="hover:text-gray-900">Terms of Service</a></li>
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