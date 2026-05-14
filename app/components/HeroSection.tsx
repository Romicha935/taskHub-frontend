// components/home/Hero.tsx

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Smart SaaS Task Management
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Manage Teams &
              <span className="block text-blue-600">
                Tasks Smarter
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
              TaskHub helps teams collaborate, manage projects,
              track tasks, and boost productivity with a clean
              and modern SaaS dashboard.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-2xl font-medium text-center transition-all duration-300"
              >
                Get Started Free
              </Link>

              <Link
                href="/login"
                className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-7 py-4 rounded-2xl font-medium text-center transition-all duration-300"
              >
                Live Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  10K+
                </h3>
                <p className="text-gray-500 mt-1">
                  Active Users
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  500+
                </h3>
                <p className="text-gray-500 mt-1">
                  Teams Managed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  99%
                </h3>
                <p className="text-gray-500 mt-1">
                  Task Completion
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            
            {/* Main Dashboard Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-2xl p-5">
                
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-bold text-lg text-gray-900">
                      Team Dashboard
                    </h2>

                    <p className="text-sm text-gray-500">
                      Manage all tasks
                    </p>
                  </div>

                  <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                    Active
                  </div>
                </div>

                {/* Task Cards */}
                <div className="mt-6 space-y-4">
                  
                  {/* Card 1 */}
                  <div className="border border-gray-200 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        Design Landing Page
                      </h3>

                      <span className="text-sm text-blue-600">
                        In Progress
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                      <div className="bg-blue-600 h-2 rounded-full w-[70%]"></div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="border border-gray-200 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        API Integration
                      </h3>

                      <span className="text-sm text-green-600">
                        Completed
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="border border-gray-200 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        Team Meeting
                      </h3>

                      <span className="text-sm text-orange-500">
                        Pending
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                      <div className="bg-orange-500 h-2 rounded-full w-[35%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-5 w-56">
              <p className="text-sm text-gray-500">
                Productivity Growth
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-2">
                +85%
              </h3>

              <p className="text-green-600 text-sm mt-1">
                Increased this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}