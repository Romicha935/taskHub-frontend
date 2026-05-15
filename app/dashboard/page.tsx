// app/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <div>
      
      {/* Welcome */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 mt-2">
          Here’s what’s happening with your projects today.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500 text-sm">
            Total Tasks
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-2">
            124
          </h3>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500 text-sm">
            Completed
          </p>

          <h3 className="text-3xl font-bold text-green-600 mt-2">
            98
          </h3>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500 text-sm">
            Pending
          </p>

          <h3 className="text-3xl font-bold text-orange-500 mt-2">
            26
          </h3>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <p className="text-gray-500 text-sm">
            Teams
          </p>

          <h3 className="text-3xl font-bold text-blue-600 mt-2">
            12
          </h3>
        </div>

      </div>

      {/* Recent Tasks */}
      <div className="mt-10 bg-white rounded-3xl border p-6 shadow-sm">
        
        <h3 className="text-xl font-bold text-gray-900">
          Recent Tasks
        </h3>

        <div className="mt-6 space-y-4">

          <div className="flex items-center justify-between border rounded-2xl p-4">
            <div>
              <h4 className="font-semibold text-gray-900">
                Build Dashboard UI
              </h4>

              <p className="text-sm text-gray-500">
                Due Tomorrow
              </p>
            </div>

            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              In Progress
            </span>
          </div>

          <div className="flex items-center justify-between border rounded-2xl p-4">
            <div>
              <h4 className="font-semibold text-gray-900">
                Connect Backend API
              </h4>

              <p className="text-sm text-gray-500">
                Completed
              </p>
            </div>

            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
              Done
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}