"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: "👥",
    title: "Team Collaboration",
    desc: "Work with your team in real time and stay aligned on every task.",
    color: "bg-blue-50",
    delay: "100"
  },
  {
    icon: "📋",
    title: "Task Management",
    desc: "Create, assign, and track tasks easily with a simple workflow.",
    color: "bg-purple-50",
    delay: "200"
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    desc: "Monitor productivity and get insights about your team performance.",
    color: "bg-orange-50",
    delay: "300"
  },
  {
    icon: "🔐",
    title: "Secure Auth",
    desc: "JWT based authentication keeps your data safe and protected.",
    color: "bg-green-50",
    delay: "400"
  },
  {
    icon: "⚡",
    title: "Real-time Updates",
    desc: "Stay updated instantly when tasks or team changes happen.",
    color: "bg-yellow-50",
    delay: "500"
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    desc: "Works perfectly on mobile, tablet, and desktop devices.",
    color: "bg-pink-50",
    delay: "600"
  }
];

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // স্ক্রল করার সময় বারবার অ্যানিমেশন চাইলে true দিন
    });
  }, []);

  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span 
            data-aos="fade-down"
            className="px-4 py-1.5 rounded-full text-blue-600 bg-blue-50 text-xs font-bold uppercase tracking-wider"
          >
            Capabilities
          </span>

          <h2 
            data-aos="fade-up" 
            className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Everything You Need to <span className="text-blue-600">Scale</span>
          </h2>

          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="mt-6 text-lg text-gray-500 leading-relaxed"
          >
            TaskHub provides a robust suite of tools designed to help high-performing teams 
            organize, track, and complete work more efficiently.
          </p>
        </div>

        {/* Bento-style Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={feature.delay}
              className="group relative bg-white p-10 rounded-[35px] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${feature.color.replace('50', '200')}`}></div>
              
              {/* Icon Container */}
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed group-hover:text-gray-600">
                {feature.desc}
              </p>

              {/* Bottom Line Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}