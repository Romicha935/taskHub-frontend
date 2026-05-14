

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-blue-600 font-semibold text-sm">
            FEATURES
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Everything You Need to Manage Tasks
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            TaskHub helps you organize work, collaborate with teams,
            and track progress with a modern SaaS dashboard.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border hover:shadow-xl transition">
            <div className="text-3xl">👥</div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Team Collaboration
            </h3>
            <p className="mt-3 text-gray-600 leading-7">
              Work with your team in real time and stay aligned on every task.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border hover:shadow-xl transition">
            <div className="text-3xl">📋</div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Task Management
            </h3>
            <p className="mt-3 text-gray-600 leading-7">
              Create, assign, and track tasks easily with a simple workflow.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border hover:shadow-xl transition">
            <div className="text-3xl">📊</div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Analytics Dashboard
            </h3>
            <p className="mt-3 text-gray-600 leading-7">
              Monitor productivity and get insights about your team performance.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl border hover:shadow-xl transition">
            <div className="text-3xl">🔐</div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Secure Authentication
            </h3>
            <p className="mt-3 text-gray-600 leading-7">
              JWT based authentication keeps your data safe and protected.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-3xl border hover:shadow-xl transition">
            <div className="text-3xl">⚡</div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Real-time Updates
            </h3>
            <p className="mt-3 text-gray-600 leading-7">
              Stay updated instantly when tasks or team changes happen.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-3xl border hover:shadow-xl transition">
            <div className="text-3xl">📱</div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Responsive Design
            </h3>
            <p className="mt-3 text-gray-600 leading-7">
              Works perfectly on mobile, tablet, and desktop devices.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}