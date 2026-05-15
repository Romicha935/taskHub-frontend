export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Area */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
            Last Updated: May 15, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[45px] p-8 md:p-16 border border-gray-100 shadow-sm space-y-12">
          
          <section className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-black text-indigo-600 uppercase tracking-tighter">Access</h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                By accessing or using TaskHub, you agree to be bound by these Terms of Service. 
                Our platform is designed for professional task management and team collaboration.
              </p>
            </div>
          </section>

          <hr className="border-gray-50" />

          <section className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-black text-indigo-600 uppercase tracking-tighter">Prohibitions</h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Responsible Use</h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-4">Users are strictly prohibited from:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 font-medium">
                <li>Attempting to breach security protocols or reverse-engineer the API.</li>
                <li>Uploading malicious content or using the platform for spam activities.</li>
                <li>Sharing account credentials with unauthorized third parties.</li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-50" />

          <section className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-black text-indigo-600 uppercase tracking-tighter">Disclaimer</h2>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Warranty Notice</h3>
              <p className="text-gray-600 leading-relaxed font-medium italic">
                TaskHub is a production-style software prototype. While we strive for 100% uptime, 
                the service is provided &ldquo;as is.&ldquo; We are not liable for any data loss resulting 
                from server maintenance or unforeseen technical issues.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}