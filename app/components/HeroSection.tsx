"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fcfdfe] py-20 lg:py-32">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-[120px] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] bg-indigo-100 rounded-full blur-[100px] opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
              🚀 Smart SaaS Task Management
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-gray-900 tracking-tight">
              Manage Teams &
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Tasks Smarter
              </span>
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-gray-500 max-w-xl">
              TaskHub helps teams collaborate, manage projects, and boost 
              productivity with a clean, high-performance dashboard.
            </p>

            <div className="mt-10 flex flex-col sm:row gap-5">
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-[20px] font-bold text-lg shadow-xl shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Get Started Free
              </Link>

              <Link
                href="/login"
                className="bg-white border-2 border-gray-100 hover:border-blue-600 hover:text-blue-600 px-10 py-5 rounded-[20px] font-bold text-lg transition-all duration-300 text-center"
              >
                Live Demo
              </Link>
            </div>

            {/* Stats with Bento Style */}
            <div className="mt-16 grid grid-cols-3 gap-4 border-t border-gray-100 pt-10">
              <div>
                <h3 className="text-3xl font-black text-gray-900">10K+</h3>
                <p className="text-gray-500 font-medium text-sm mt-1 uppercase tracking-wider">Users</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-gray-900">500+</h3>
                <p className="text-gray-500 font-medium text-sm mt-1 uppercase tracking-wider">Teams</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-gray-900">99%</h3>
                <p className="text-gray-500 font-medium text-sm mt-1 uppercase tracking-wider">Success</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - Interactive Dashboard Mockup */}
          <div className="relative" data-aos="zoom-in-left" data-aos-delay="200">
            
            {/* Background Glow for Card */}
            <div className="absolute inset-0 bg-blue-500 rounded-[40px] blur-3xl opacity-20 rotate-6 scale-95"></div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-1.5 rounded-[45px] shadow-2xl overflow-hidden group">
              <div className="bg-white rounded-[40px] p-6 lg:p-10 transition-transform duration-700 group-hover:scale-[1.01]">
                
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h2 className="font-black text-2xl text-gray-900">Project Alpha</h2>
                    <p className="text-sm font-medium text-gray-400">Team Dashboard</p>
                  </div>
                  <div className="flex -space-x-3">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center font-bold text-xs">U{i}</div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Task Card with progress */}
                  <div className="bg-gray-50 p-5 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex justify-between mb-3">
                      <span className="font-bold text-gray-800">UI/UX Revamp</span>
                      <span className="text-blue-600 font-bold text-sm">80%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full w-[80%]"></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-3xl border border-gray-100">
                    <div className="flex justify-between mb-3">
                      <span className="font-bold text-gray-800">API Integration</span>
                      <span className="text-green-500 font-bold text-sm">Done</span>
                    </div>
                    <div className="h-3 w-full bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-md p-6 rounded-[30px] shadow-2xl border border-white/50 animate-bounce-slow hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl">📈</div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Growth</p>
                  <h4 className="text-2xl font-black text-gray-900">+124%</h4>
                </div>
              </div>
            </div>

            {/* Notification Badge */}
            <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-[25px] shadow-xl animate-pulse hidden sm:block">
              <span className="font-bold text-sm">5 New Tasks 🔔</span>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}