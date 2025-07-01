import React from 'react';
export default function CallToAction() {
  return (
    <section className="w-full bg-[#0d1b2a] text-pastelCream py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
          Coming Soon on Your Favorite Platforms
        </h2>
        <div className="flex justify-center items-center gap-6 mb-10 flex-wrap">
          <img src="/assets/app-store-coming-soon.png" alt="App Store Coming Soon" className="h-12" />
          <img src="/assets/google-play-coming-soon.png" alt="Google Play Coming Soon" className="h-12" />
        </div>

        <h3 className="text-xl font-medium mb-6">Want early access? Join the waitlist.</h3>
        <form className="text-left space-y-4 max-w-md mx-auto">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 rounded bg-[#1b263b] border border-pastelCream text-pastelCream"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded bg-[#1b263b] border border-pastelCream text-pastelCream"
            />
          </div>
          <div>
            <label htmlFor="platform" className="block mb-1">Preferred Platform</label>
            <select
              id="platform"
              name="platform"
              required
              className="w-full p-2 rounded bg-[#1b263b] border border-pastelCream text-pastelCream"
            >
              <option value="">Select one</option>
              <option value="ios">iOS</option>
              <option value="android">Android</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-pastelCream text-[#0d1b2a] font-semibold rounded hover:bg-opacity-90 transition"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}
