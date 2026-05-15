export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Area */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
            Effective Date: May 15, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[45px] p-8 md:p-16 border border-gray-100 shadow-sm space-y-12">
          
          <section className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-black text-blue-600 uppercase tracking-tighter">Information</h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What we collect</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                We collect personal information such as your name and email address when you create an account. 
                Additionally, we store task-related data, project descriptions, and team interactions to 
                ensure a seamless experience within TaskHub.
              </p>
            </div>
          </section>

          <hr className="border-gray-50" />

          <section className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-black text-blue-600 uppercase tracking-tighter">Usage</h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How we use it</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-3 font-medium">
                <li>To maintain your secure workspace and project history.</li>
                <li>To send critical system updates and notifications.</li>
                <li>To improve our platform performance based on anonymous usage metrics.</li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-50" />

          <section className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-black text-blue-600 uppercase tracking-tighter">Security</h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Protecting your data</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                All data is encrypted using AES-256 and transmitted over secure SSL channels. 
                We implement industry-standard authentication (JWT) to ensure that your private tasks 
                remain accessible only to you and your authorized team members.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}