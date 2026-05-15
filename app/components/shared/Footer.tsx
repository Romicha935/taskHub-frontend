"use client";

import Link from "next/link";
import { Send, Mail } from "lucide-react";
import { DiGithub } from "react-icons/di";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section: Newsletter & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-16">
          
          {/* Newsletter Section (Left) */}
          <div className="lg:col-span-5 bg-blue-50/50 p-8 md:p-12 rounded-[40px] border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
              Get TaskHub Updates
            </h3>
            <p className="text-gray-500 font-medium mb-8 leading-relaxed">
              Stay updated with the latest productivity tips and features. No spam, we promise!
            </p>
            
            <form className="relative group">
              <input 
                type="email" 
                placeholder="yourname@email.com" 
                className="w-full bg-white border-2 border-gray-100 rounded-[22px] py-4 pl-6 pr-16 focus:border-blue-600 outline-none transition-all shadow-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-5 rounded-[18px] hover:bg-blue-700 transition-all shadow-md active:scale-95">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Links Section (Right) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-gray-900 font-black uppercase tracking-widest text-xs">Platform</h4>
              <ul className="space-y-4 font-bold text-gray-500">
                <li><Link href="#features" className="hover:text-blue-600 transition-colors">Features</Link></li>
                <li><Link href="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link></li>
                <li><Link href="/signup" className="hover:text-blue-600 transition-colors">Get Started</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-gray-900 font-black uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4 font-bold text-gray-500">
                <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-gray-900 font-black uppercase tracking-widest text-xs">Connect</h4>
              <div className="flex gap-4">
                <Link href="#" className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:-translate-y-1">
                  <DiGithub className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:-translate-y-1">
                  <LiaLinkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs">TH</div>
            <span className="font-black text-gray-900 text-lg">TaskHub.</span>
          </div>

          <p className="text-gray-400 font-bold text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm font-bold text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Systems Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}