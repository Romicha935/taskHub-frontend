

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-blue-600 font-semibold text-sm">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Start Managing Tasks in 3 Simple Steps
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            Get started quickly with TaskHub and improve your team productivity.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {/* Step 1 */}
          <div className="text-center p-8 border rounded-3xl hover:shadow-xl transition">
            <div className="text-4xl">📝</div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Create Account
            </h3>
            <p className="mt-3 text-gray-600">
              Sign up in seconds and set up your workspace.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center p-8 border rounded-3xl hover:shadow-xl transition">
            <div className="text-4xl">👥</div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Add Your Team
            </h3>
            <p className="mt-3 text-gray-600">
              Invite team members and start collaborating.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center p-8 border rounded-3xl hover:shadow-xl transition">
            <div className="text-4xl">🚀</div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Manage Tasks
            </h3>
            <p className="mt-3 text-gray-600">
              Create tasks, track progress and get things done.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}