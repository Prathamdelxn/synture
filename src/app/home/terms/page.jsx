"use client";

import { ArrowLeft, Shield, FileText, Mail, Phone, MapPin, Users, Clock, Award, Globe } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TermsConditions() {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    countries: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);

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
      clients: 150,
      projects: 200,
      experience: 8,
      countries: 15
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

  const stats = [
    { number: counters.clients, suffix: "+", label: "Satisfied Clients", icon: Users, key: "clients" },
    { number: counters.projects, suffix: "+", label: "Completed Projects", icon: Award, key: "projects" },
    { number: counters.experience, suffix: "+", label: "Years Experience", icon: Clock, key: "experience" },
    { number: counters.countries, suffix: "+", label: "Countries Served", icon: Globe, key: "countries" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section with Animation */}
        <section className="mb-16 text-center animate-fade-in">
          <Link href="/home" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors hover:scale-105">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-6 hover:bg-blue-200 transition-colors duration-300">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Our commitment to transparency and your rights when using Synture services
            </p>
          </div>
        </section>

        {/* Company Stats */}
        <section id="stats-section" className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-blue-600 hover:text-blue-700 transition-colors" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {Math.round(stat.number)}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Terms Content */}
        <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 mb-16">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Synture's relationship with you in relation to this website. The term Synture or 'us' or 'we' refers to the owner of the website whose registered office is at 123 Design Street, Suite 400, San Francisco, CA 94107. The term 'you' refers to the user or viewer of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center border-b pb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              The use of this website is subject to the following terms of use:
            </h2>

            <ol className="list-decimal pl-6 space-y-6 text-gray-700">
              <li className="hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:scale-[1.01]">
                The content of the pages of this website is for your general information and use only. It is subject to change without notice.
              </li>
              <li className="hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:scale-[1.01]">
                Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </li>
              <li className="hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:scale-[1.01]">
                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
              </li>
              <li className="hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:scale-[1.01]">
                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
              </li>
              <li className="hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:scale-[1.01]">
                All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
              </li>
              <li className="hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:scale-[1.01]">
                Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
              </li>
              <li className="hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:scale-[1.01]">
                From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
              </li>
              <li className="hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:scale-[1.01]">
                You may not create a link to this website from another website or document without Synture's prior written consent.
              </li>
              <li className="hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:scale-[1.01]">
                Your use of this website and any dispute arising out of such use of the website is subject to the laws of California, United States jurisdiction.
              </li>
            </ol>

            <div className="mt-12 bg-blue-50 p-8 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-[1.01]">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                Additional Legal Provisions
              </h3>
              <ul className="list-disc pl-6 space-y-4 text-gray-700">
                <li className="hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                  <strong className="text-gray-900">Governing Law:</strong> These terms shall be governed by and construed in accordance with the laws of the State of California.
                </li>
                <li className="hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                  <strong className="text-gray-900">Changes to Terms:</strong> We reserve the right to modify these terms at any time. Your continued use of the site after changes constitutes acceptance.
                </li>
                <li className="hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                  <strong className="text-gray-900">Termination:</strong> We may terminate or suspend access to our service immediately for any breach of these terms.
                </li>
                <li className="hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                  <strong className="text-gray-900">Severability:</strong> If any provision of these terms is found invalid, the remaining provisions will remain in full effect.
                </li>
                <li className="hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                  <strong className="text-gray-900">Waiver:</strong> Our failure to enforce any right or provision will not be considered a waiver of those rights.
                </li>
              </ul>
            </div>

            <div className="mt-12 p-6 border-t border-gray-200 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Our Legal Team</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">legal@synture.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (243) 457-00</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Legal Office</h3>
                    <p className="text-gray-600">123 Legal Street, Suite 100<br />San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
              <p className="text-gray-600">
                By using our website, you hereby consent to our Terms and Conditions and agree to its provisions.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Back Link with Animation */}
        <div className="mt-12 text-center animate-fade-in-delay">
          <Link 
            href="/home" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to Homepage
          </Link>
        </div>
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