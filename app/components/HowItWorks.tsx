"use client";

import { useEffect } from "react";
import { UserPlus, Users, Rocket, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    id: "01",
    icon: <UserPlus className="w-10 h-10" />,
    title: "Create Account",
    desc: "Sign up in seconds and set up your personalized workspace with ease.",
    delay: "100",
    color: "text-blue-600",
    bgColor: "bg-blue-100/50",
  },
  {
    id: "02",
    icon: <Users className="w-10 h-10" />,
    title: "Add Your Team",
    desc: "Invite your colleagues and team members to start real-time collaboration.",
    delay: "300",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100/50",
  },
  {
    id: "03",
    icon: <Rocket className="w-10 h-10" />,
    title: "Manage Tasks",
    desc: "Create, assign, and track progress with our intuitive dashboard system.",
    delay: "500",
    color: "text-purple-600",
    bgColor: "bg-purple-100/50",
  }
];

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span 
            data-aos="fade-down"
            className="px-4 py-1.5 rounded-full text-blue-600 bg-blue-50 text-xs font-bold uppercase tracking-widest border border-blue-100"
          >
            Workflow
          </span>

          <h2 
            data-aos="fade-up" 
            className="mt-6 text-4xl sm:text-5xl font-black text-gray-900 tracking-tight"
          >
            Start Managing in <span className="text-blue-600">3 Simple Steps</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-12 md:grid-cols-3 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-gray-200 -z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={step.delay}
              className="group relative z-10 flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className={`relative w-24 h-24 ${step.bgColor} ${step.color} rounded-[30px] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-white`}>
                {step.icon}
                
                {/* Step Number Badge */}
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-white shadow-lg rounded-xl flex items-center justify-center text-gray-900 font-black text-sm border border-gray-100">
                  {step.id}
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>

              <p className="text-gray-500 leading-relaxed font-medium px-4">
                {step.desc}
              </p>

              {/* Arrow Indicator for Step 1 and 2 (Desktop Only) */}
              {index < 2 && (
                <div className="hidden lg:block absolute -right-6 top-10 text-gray-300">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div data-aos="fade-up" data-aos-delay="700" className="mt-20 text-center">
            <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200">
                Get Started for Free <ArrowRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  );
}