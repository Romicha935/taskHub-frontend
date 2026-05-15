"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Rocket, ArrowRight, Zap } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CTA() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main Box with zoom-in animation */}
        <div 
          data-aos="zoom-in" 
          className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 rounded-[45px] p-12 sm:p-20 text-center shadow-[0_20px_50px_rgba(37,99,235,0.3)]"
        >
          
          {/* Animated Background Orbs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-[80px] animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-[80px]"></div>

          {/* Floating Icon Badges */}
          <div className="absolute top-10 right-10 hidden lg:block animate-bounce">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
              <Zap className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            </div>
          </div>
          <div className="absolute bottom-10 left-10 hidden lg:block animate-pulse">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
              <Rocket className="w-6 h-6 text-blue-200" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Ready to <span className="text-blue-200 underline decoration-blue-400/50 underline-offset-8">Scale</span> Your Team? 🚀
            </h2>

            <p className="mt-8 text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
              Join 10,000+ high-performing teams already using TaskHub to simplify their workflow and crush their goals.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/signup"
                className="group w-full sm:w-auto bg-white text-blue-700 px-10 py-5 rounded-[22px] font-black text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Get Started Free 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/login"
                className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-[22px] font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
              >
                Sign In
              </Link>
            </div>

            {/* Trust Badge */}
            <p className="mt-10 text-blue-200/60 text-sm font-bold uppercase tracking-[0.2em]">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}