"use client";

import { useEffect } from "react";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { CheckCircle2, Layout, Users, Activity, ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Mock Data for Chart
const data = [
  { name: "Mon", tasks: 40 },
  { name: "Tue", tasks: 60 },
  { name: "Wed", tasks: 45 },
  { name: "Thu", tasks: 90 },
  { name: "Fri", tasks: 75 },
  { name: "Sat", tasks: 95 },
  { name: "Sun", tasks: 110 },
];

export default function DashboardPreview() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            <Activity className="w-4 h-4" /> Real-time Analytics
          </div>

          <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Visualize Your Team <span className="text-blue-600">Productivity</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="mt-6 text-lg text-gray-500 leading-relaxed">
            Stop guessing and start measuring. Get deep insights into your team&apos;s 
            performance with our interactive data visualizations.
          </p>
        </div>

        {/* Main Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT STATS - 4 Columns */}
          <div className="lg:col-span-4 space-y-6" data-aos="fade-right">
            
            <div className="group bg-white p-8 rounded-[35px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
                  <Layout className="w-6 h-6" />
                </div>
                <span className="flex items-center gap-1 text-green-500 font-bold text-sm bg-green-50 px-2 py-1 rounded-lg">
                  <ArrowUpRight className="w-4 h-4" /> 12%
                </span>
              </div>
              <h3 className="text-gray-500 font-bold text-sm mt-6 uppercase tracking-wider">Total Tasks</h3>
              <p className="text-4xl font-black text-gray-900 mt-1">1,240</p>
            </div>

            <div className="group bg-white p-8 rounded-[35px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-green-50 rounded-2xl text-green-600 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="flex items-center gap-1 text-green-500 font-bold text-sm bg-green-50 px-2 py-1 rounded-lg">
                  <ArrowUpRight className="w-4 h-4" /> 8%
                </span>
              </div>
              <h3 className="text-gray-500 font-bold text-sm mt-6 uppercase tracking-wider">Completed</h3>
              <p className="text-4xl font-black text-gray-900 mt-1">980</p>
            </div>

            <div className="group bg-white p-8 rounded-[35px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-gray-500 font-bold text-sm mt-6 uppercase tracking-wider">Active Teams</h3>
              <p className="text-4xl font-black text-gray-900 mt-1">52</p>
            </div>

          </div>

          {/* RIGHT MOCK DASHBOARD - 8 Columns */}
          <div className="lg:col-span-8 bg-white rounded-[45px] border border-gray-100 shadow-2xl p-2" data-aos="fade-left">
            <div className="bg-gray-50 rounded-[40px] p-8">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                <div>
                  <h3 className="text-2xl font-black text-gray-900">Weekly Performance</h3>
                  <p className="text-gray-500 font-medium">Task completion rate this week</p>
                </div>
                <div className="flex gap-2">
                  <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 text-sm font-bold text-gray-700">7 Days</div>
                  <div className="bg-blue-600 px-4 py-2 rounded-xl shadow-md text-sm font-bold text-white cursor-pointer">Export</div>
                </div>
              </div>

              {/* Real Chart Implementation */}
              <div className="h-[300px] w-full bg-white rounded-3xl p-6 shadow-inner border border-gray-100">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="tasks" 
                      stroke="#2563eb" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorTasks)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Mini Task Tracker Below Chart */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-3xl border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                    <span className="font-bold text-gray-800">UI Design Update</span>
                  </div>
                  <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">IN PROGRESS</span>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-bold text-gray-800">Backend API</span>
                  </div>
                  <span className="text-xs font-black text-green-600 bg-green-50 px-2 py-1 rounded-lg">COMPLETED</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}