import React from "react";

function Contact() {
  return (
    <section className="bg-[black] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="bg-transparent border border-[#55E6A5] text-[#55E6A5] px-4 py-1 rounded-full text-sm font-medium">
            Contact Us
          </span>
          <h2 className="text-4xl font-bold mt-6">Contact Us</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Let us know what you think!
            </h3>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
              phasellus mollis sit aliquam sit nullam.
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <span className="bg-[#55E6A5] text-black w-8 h-8 flex items-center justify-center rounded-full">
                  📧
                </span>
                Email: contact@brix.com
              </p>
              <p className="flex items-center gap-3">
                <span className="bg-[#55E6A5] text-black w-8 h-8 flex items-center justify-center rounded-full">
                  📞
                </span>
                Phone: 01316203355
              </p>
            </div>
          </div>


          <div className="bg-transparent border border-gray-700 rounded-xl p-6">
            <form className="space-y-5">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name*"
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#55E6A5]"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email*"
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#55E6A5]"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Enter your message..."
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#55E6A5]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#55E6A5] text-black font-medium px-6 py-3 rounded-full hover:bg-[#44c78a] transition w-full md:w-auto"
              >
                Submit →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;