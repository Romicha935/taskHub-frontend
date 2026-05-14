

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-blue-600 font-semibold text-sm">
            DASHBOARD PREVIEW
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Visualize Your Team Productivity
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            Track tasks, monitor progress, and manage your team from a single dashboard.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT STATS */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-3xl border shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">
                Total Tasks
              </h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                1,240
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">
                Completed Tasks
              </h3>
              <p className="text-3xl font-bold text-green-600 mt-2">
                980
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">
                Active Teams
              </h3>
              <p className="text-3xl font-bold text-indigo-600 mt-2">
                52
              </p>
            </div>

          </div>

          {/* RIGHT MOCK DASHBOARD */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl shadow-2xl">

            <div className="bg-white rounded-2xl p-6">

              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Task Dashboard
                  </h3>
                  <p className="text-sm text-gray-500">
                    Live project overview
                  </p>
                </div>

                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  Live
                </span>
              </div>

              {/* Task list */}
              <div className="mt-6 space-y-4">

                {/* Task 1 */}
                <div className="border rounded-2xl p-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-gray-900">
                      UI Design Update
                    </h4>
                    <span className="text-blue-600 text-sm">
                      70%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                    <div className="bg-blue-600 h-2 rounded-full w-[70%]"></div>
                  </div>
                </div>

                {/* Task 2 */}
                <div className="border rounded-2xl p-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-gray-900">
                      Backend API
                    </h4>
                    <span className="text-green-600 text-sm">
                      100%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                    <div className="bg-green-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>

                {/* Task 3 */}
                <div className="border rounded-2xl p-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-gray-900">
                      Team Meeting
                    </h4>
                    <span className="text-orange-500 text-sm">
                      40%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                    <div className="bg-orange-500 h-2 rounded-full w-[40%]"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}