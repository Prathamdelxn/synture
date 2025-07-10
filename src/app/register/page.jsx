"use client";

import React, { useState, useEffect } from 'react';
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
  X,
  ArrowRight,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export default function RegistrationPage() {
  const [userType, setUserType] = useState('user');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [companyImage, setCompanyImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const [userForm, setUserForm] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    experience: 'fresher',
    jobPreference: 'full-time'
  });

  const [recruiterForm, setRecruiterForm] = useState({
    companyName: '',
    contactEmail: '',
    contactPhone: '',
    password: '',
    companyWebsite: '',
    description: '',
    address: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation cycle for left side
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserForm(prev => ({ ...prev, resume: file }));
    }
  };

  const removeImage = () => {
    setCompanyImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Registration submitted:', {
      userType,
      data: userType === 'user' ? userForm : recruiterForm,
      companyImage: companyImage ? companyImage.name : null
    });
    
    setIsLoading(false);
  };

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const benefits = [
    { 
      icon: CheckCircle, 
      text: "Access thousands of jobs", 
      color: "from-green-400 to-emerald-500",
      delay: "0ms"
    },
    { 
      icon: Users, 
      text: "Connect with top companies", 
      color: "from-blue-400 to-cyan-500",
      delay: "200ms"
    },
    { 
      icon: Target, 
      text: "Smart matching algorithm", 
      color: "from-purple-400 to-pink-500",
      delay: "400ms"
    },
    { 
      icon: Award, 
      text: "Premium career guidance", 
      color: "from-orange-400 to-red-500",
      delay: "600ms"
    }
  ];

  const dynamicElements = [
    { icon: Star, text: "Premium Features", position: "top-16 left-8" },
    { icon: Zap, text: "Lightning Fast", position: "top-32 right-12" },
    { icon: Shield, text: "Secure & Safe", position: "bottom-32 left-16" },
    { icon: TrendingUp, text: "Career Growth", position: "bottom-16 right-8" }
  ];

  const renderUserForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="animate-slide-in-right" style={{ animationDelay: '100ms' }}>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={userForm.fullName}
            onChange={(e) => handleUserFormChange('fullName', e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Full Name"
            required
          />
        </div>
      </div>

      <div className="animate-slide-in-right" style={{ animationDelay: '200ms' }}>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            value={userForm.email}
            onChange={(e) => handleUserFormChange('email', e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Email Address"
            required
          />
        </div>
      </div>

      <div className="animate-slide-in-right" style={{ animationDelay: '300ms' }}>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            value={userForm.phone}
            onChange={(e) => handleUserFormChange('phone', e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Phone Number"
            required
          />
        </div>
      </div>

      <div className="animate-slide-in-right" style={{ animationDelay: '400ms' }}>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={userForm.location}
            onChange={(e) => handleUserFormChange('location', e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Location"
            required
          />
        </div>
      </div>

      <div className="animate-slide-in-right md:col-span-2" style={{ animationDelay: '500ms' }}>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={userForm.password}
            onChange={(e) => handleUserFormChange('password', e.target.value)}
            className="w-full pl-10 pr-12 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="animate-slide-in-right md:col-span-2" style={{ animationDelay: '600ms' }}>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => handleUserFormChange('experience', 'fresher')}
            className={`py-3 px-4 rounded-lg border transition-all duration-300 ${
              userForm.experience === 'fresher'
                ? 'border-blue-500 bg-blue-50 text-blue-700 transform scale-105'
                : 'border-gray-300 text-gray-700 hover:border-gray-400'
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
                : 'border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
          >
            Experienced
          </button>
        </div>
      </div>

      <div className="animate-slide-in-right md:col-span-2" style={{ animationDelay: '700ms' }}>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02] text-lg"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Creating Account...
            </div>
          ) : (
            <>
              Create Job Seeker Account
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </>
          )}
        </button>
      </div>
    </div>
  );

  const renderRecruiterFormStep = () => {
    if (currentStep === 1) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="animate-slide-in-right md:col-span-2" style={{ animationDelay: '100ms' }}>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={recruiterForm.companyName}
                onChange={(e) => handleRecruiterFormChange('companyName', e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Company Name"
                required
              />
            </div>
          </div>

          <div className="animate-slide-in-right" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={recruiterForm.contactEmail}
                onChange={(e) => handleRecruiterFormChange('contactEmail', e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Contact Email"
                required
              />
            </div>
          </div>

          <div className="animate-slide-in-right" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={recruiterForm.contactPhone}
                onChange={(e) => handleRecruiterFormChange('contactPhone', e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Contact Phone"
                required
              />
            </div>
          </div>

          <div className="animate-slide-in-right md:col-span-2" style={{ animationDelay: '400ms' }}>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={recruiterForm.password}
                onChange={(e) => handleRecruiterFormChange('password', e.target.value)}
                className="w-full pl-10 pr-12 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="animate-slide-in-right md:col-span-2" style={{ animationDelay: '500ms' }}>
            <div className="flex items-center space-x-4">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Company logo"
                    className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="w-15 h-15 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Upload className="w-5 h-5 text-gray-400" />
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
                  className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg px-6 py-3 text-sm hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 inline-flex items-center"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Company Logo
                </label>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right md:col-span-2" style={{ animationDelay: '600ms' }}>
            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center text-lg"
            >
              Continue to Company Details
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="animate-slide-in-right" style={{ animationDelay: '100ms' }}>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="url"
              value={recruiterForm.companyWebsite}
              onChange={(e) => handleRecruiterFormChange('companyWebsite', e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Company Website"
              required
            />
          </div>
        </div>

        <div className="animate-slide-in-right md:col-span-2" style={{ animationDelay: '200ms' }}>
          <div className="relative">
            <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              value={recruiterForm.description}
              onChange={(e) => handleRecruiterFormChange('description', e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
              placeholder="Brief company description"
              rows={3}
              required
            />
          </div>
        </div>

        <div className="animate-slide-in-right md:col-span-2" style={{ animationDelay: '300ms' }}>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={recruiterForm.address}
              onChange={(e) => handleRecruiterFormChange('address', e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Company Address"
              required
            />
          </div>
        </div>

        <div className="animate-slide-in-right md:col-span-2" style={{ animationDelay: '400ms' }}>
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={prevStep}
              className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-all duration-200"
            >
              Previous
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Creating...
                </div>
              ) : (
                'Create Recruiter Account'
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex">
      {/* Left Side - Branding and Benefits (40%) */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-white/20 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-white/10 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-3/4 right-1/4 w-10 h-10 border-2 border-white/15 rounded-full animate-bounce delay-1000"></div>
        
        {/* Dynamic floating elements */}
        {dynamicElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} transform transition-all duration-1000 ${
              animationPhase === index ? 'scale-125 opacity-100' : 'scale-100 opacity-60'
            }`}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
              <element.icon className="w-5 h-5 text-white" />
            </div>
          </div>
        ))}
        
        {/* Main content */}
        <div className="relative z-10 flex flex-col justify-center items-center p-8 text-white w-full">
          <div className="mb-8 relative animate-fade-in">
            {/* Synture Logo */}
            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300">
              <span className="text-5xl">🚀</span>
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <div className="text-center animate-slide-up">
            <h1 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Welcome to Synture
            </h1>
            <p className="text-lg text-white/90 text-center mb-6 max-w-md animate-fade-in-delay">
              Connect talent with opportunity. Join thousands who trust us with their career journey.
            </p>
          </div>
          
          <div className="space-y-4 w-full max-w-sm">
            <p className="text-lg font-semibold text-white/95 mb-4 animate-fade-in-delay-2">Why choose Synture:</p>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors duration-300 animate-slide-in-left"
                style={{ animationDelay: benefit.delay }}
              >
                <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300`}>
                  <benefit.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form (60%) */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-6">
        <div className={`w-full max-w-lg transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 hover:shadow-3xl transition-shadow duration-300 animate-fade-in-up">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">
                  {userType === 'user' ? 'Complete Profile' : `Step ${currentStep} of 2`}
                </span>
                <span className="text-sm text-gray-600">
                  {userType === 'user' ? '100%' : `${Math.round((currentStep / 2) * 100)}%`}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: userType === 'user' ? '100%' : `${(currentStep / 2) * 100}%` 
                  }}
                ></div>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
              <p className="text-gray-600">
                {userType === 'user' 
                  ? 'Complete your profile information' 
                  : `Step ${currentStep}: ${currentStep === 1 ? 'Basic Information' : 'Company Details'}`
                }
              </p>
            </div>

            {/* User Type Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
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

            {/* Form Content */}
            <div className="space-y-4">
              {userType === 'user' ? renderUserForm() : renderRecruiterFormStep()}
            </div>

            {/* Footer */}
            <div className="text-center mt-6 pt-2 border-t border-gray-80">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="" className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-300">
                  Sign in
                </a>
              </p>
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
      `}</style>
    </div>
  );
}
