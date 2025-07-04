"use client";

import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  Mail, 
  Lock, 
  Phone, 
  MapPin, 
  Eye, 
  EyeOff, 
  Globe, 
  FileText,
  CheckCircle,
  Users,
  Briefcase,
  Target,
  Award,
  Upload,
  X
} from 'lucide-react';

export default function RegistrationPage() {
  const [userType, setUserType] = useState('user'); // 'user' or 'recruiter'
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [companyImage, setCompanyImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // User form state
  const [userForm, setUserForm] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    experience: 'fresher' // 'fresher' or 'experienced'
  });

  // Recruiter form state
  const [recruiterForm, setRecruiterForm] = useState({
    companyName: '',
    contactEmail: '',
    contactPhone: '',
    password: '',
    companyWebsite: '',
    description: '',
    address: ''
  });

  const handleUserFormChange = (field, value) => {
    setUserForm(prev => ({ ...prev, [field]: value }));
  };

  const handleRecruiterFormChange = (field, value) => {
    setRecruiterForm(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompanyImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setCompanyImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Registration submitted:', {
      userType,
      data: userType === 'user' ? userForm : recruiterForm,
      companyImage: companyImage ? companyImage.name : null
    });
    
    setIsLoading(false);
  };

  const benefits = [
    {
      icon: CheckCircle,
      text: "Access to thousands of job opportunities",
      delay: "0ms"
    },
    {
      icon: Users,
      text: "Connect with top companies and talented professionals",
      delay: "200ms"
    },
    {
      icon: Target,
      text: "Advanced matching algorithm for perfect fits",
      delay: "400ms"
    },
    {
      icon: Award,
      text: "Premium support and career guidance",
      delay: "600ms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex">
      {/* Left side - Logo and Benefits */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-white/20 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-white/10 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-3/4 right-1/4 w-10 h-10 border-2 border-white/15 rounded-full animate-bounce delay-1000"></div>
        
        {/* Main content */}
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white w-full">
          <div className="mb-8 relative animate-fade-in">
           {/* Recruiter Emoji */}
           <div className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border   border-white/20 hover:scale-105 transition-all duration-300">
              <span className="text-6xl">👔</span>
           </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Join Synture Today
            </h1>
            <p className="text-xl text-white/90 text-center mb-8 max-w-md animate-fade-in-delay">
              Your gateway to connecting talent with opportunity in the digital age
            </p>
          </div>
          
          <div className="space-y-4 w-full max-w-md">
            <p className="text-lg font-semibold text-white/95 mb-4 animate-fade-in-delay-2">On registering, you can:</p>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors duration-300 animate-slide-in-left"
                style={{ animationDelay: benefit.delay }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                  <benefit.icon className="w-4 h-4" />
                </div>
                <span className="text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 hover:shadow-3xl transition-shadow duration-300">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-fade-in">Create Account</h2>
              <p className="text-gray-600 animate-fade-in-delay">Join thousands of professionals on Synture</p>
            </div>

            {/* User Type Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6 animate-slide-in">
              <button
                onClick={() => setUserType('user')}
                className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition-all duration-300 ${
                  userType === 'user' 
                    ? 'bg-white text-blue-600 shadow-sm transform scale-105' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <User className="w-4 h-4 mr-2" />
                Job Seeker
              </button>
              <button
                onClick={() => setUserType('recruiter')}
                className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition-all duration-300 ${
                  userType === 'recruiter' 
                    ? 'bg-white text-blue-600 shadow-sm transform scale-105' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Building2 className="w-4 h-4 mr-2" />
                Recruiter
              </button>
            </div>

            {/* Registration Form */}
            <div className="space-y-6">
              {userType === 'user' ? (
                // User Registration Form
                <>
                  <div className="animate-slide-in-right" style={{ animationDelay: '100ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <input
                        type="text"
                        value={userForm.fullName}
                        onChange={(e) => handleUserFormChange('fullName', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="animate-slide-in-right" style={{ animationDelay: '200ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <input
                        type="email"
                        value={userForm.email}
                        onChange={(e) => handleUserFormChange('email', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="animate-slide-in-right" style={{ animationDelay: '300ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={userForm.password}
                        onChange={(e) => handleUserFormChange('password', e.target.value)}
                        className="w-full pl-10 pr-12 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="Create a password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="animate-slide-in-right" style={{ animationDelay: '400ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <input
                        type="tel"
                        value={userForm.phone}
                        onChange={(e) => handleUserFormChange('phone', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="animate-slide-in-right" style={{ animationDelay: '500ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <input
                        type="text"
                        value={userForm.location}
                        onChange={(e) => handleUserFormChange('location', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="Enter your location"
                        required
                      />
                    </div>
                  </div>

                  <div className="animate-slide-in-right" style={{ animationDelay: '600ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => handleUserFormChange('experience', 'fresher')}
                        className={`py-3 px-4 rounded-lg border transition-all duration-300 ${
                          userForm.experience === 'fresher'
                            ? 'border-blue-500 bg-blue-50 text-blue-700 transform scale-105'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:scale-105'
                        }`}
                      >
                        Fresher
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUserFormChange('experience', 'experienced')}
                        className={`py-3 px-4 rounded-lg border transition-all duration-300 ${
                          userForm.experience === 'experienced'
                            ? 'border-blue-500 bg-blue-50 text-blue-700 transform scale-105'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:scale-105'
                        }`}
                      >
                        Experienced
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                // Recruiter Registration Form
                <>
                  <div className="animate-slide-in-right" style={{ animationDelay: '100ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <input
                        type="text"
                        value={recruiterForm.companyName}
                        onChange={(e) => handleRecruiterFormChange('companyName', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="Enter company name"
                        required
                      />
                    </div>
                  </div>

                  {/* Company Image Upload */}
                  <div className="animate-slide-in-right" style={{ animationDelay: '150ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Logo
                    </label>
                    <div className="flex items-center space-x-4">
                      {imagePreview ? (
                        <div className="relative">
                          <img
                            src={imagePreview}
                            alt="Company logo preview"
                            className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                          />
                          <button
                            type="button"
                            onClick={removeImage}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-300">
                          <Upload className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                      <div className="flex-1">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="company-image"
                        />
                        <label
                          htmlFor="company-image"
                          className="cursor-pointer bg-blue-500 border border-blue-600 rounded-lg px-4 py-2 text-sm text-white hover:bg-blue-600 transition-colors duration-300 inline-block"

                        >
                          Choose Image
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="animate-slide-in-right" style={{ animationDelay: '200ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <input
                        type="email"
                        value={recruiterForm.contactEmail}
                        onChange={(e) => handleRecruiterFormChange('contactEmail', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="Enter contact email"
                        required
                      />
                    </div>
                  </div>

                  <div className="animate-slide-in-right" style={{ animationDelay: '300ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <input
                        type="tel"
                        value={recruiterForm.contactPhone}
                        onChange={(e) => handleRecruiterFormChange('contactPhone', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="Enter contact phone"
                        required
                      />
                    </div>
                  </div>

                  <div className="animate-slide-in-right" style={{ animationDelay: '400ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={recruiterForm.password}
                        onChange={(e) => handleRecruiterFormChange('password', e.target.value)}
                        className="w-full pl-10 pr-12 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="Create a password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="animate-slide-in-right" style={{ animationDelay: '500ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Website
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <input
                        type="url"
                        value={recruiterForm.companyWebsite}
                        onChange={(e) => handleRecruiterFormChange('companyWebsite', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="https://company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="animate-slide-in-right" style={{ animationDelay: '600ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Description
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <textarea
                        value={recruiterForm.description}
                        onChange={(e) => handleRecruiterFormChange('description', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 hover:border-gray-400"
                        placeholder="Brief description of your company"
                        rows={3}
                        required
                      />
                    </div>
                  </div>

                  <div className="animate-slide-in-right" style={{ animationDelay: '700ms' }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400 transition-colors duration-300" />
                      <textarea
                        value={recruiterForm.address}
                        onChange={(e) => handleRecruiterFormChange('address', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 hover:border-gray-400"
                        placeholder="Enter company address"
                        rows={2}
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] animate-fade-in-up"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  `Create ${userType === 'user' ? 'Job Seeker' : 'Recruiter'} Account`
                )}
              </button>

              <div className="text-center animate-fade-in-delay-2">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-300">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0;
            transform: translateX(20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
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
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out both;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.8s both;
        }
        
        .animate-slide-in {
          animation: slide-in-right 0.6s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
}
