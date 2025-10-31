import  { useState } from "react";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    travelers: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted Successfully!");
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Booking Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Next Adventure 🌍
          </h1>
          <p className="text-gray-600 mb-6">
            Whether you're planning a romantic getaway, family vacation, or group tour — we’ll
            handle everything for you. Fill out the form and we’ll get in touch to confirm your
            details.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Hassle-free trip planning</li>
            <li>✅ Customizable packages</li>
            <li>✅ 24/7 customer support</li>
            <li>✅ Best price guaranteed</li>
          </ul>
        </div>

        {/* Right: Booking Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Booking Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Destination</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                placeholder="e.g. Bali, Paris, Dubai..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">No. of Travelers</label>
                <input
                  type="number"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  min="1"
                  required
                  placeholder="e.g. 2"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Travel Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Tell us more about your trip..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-sky-700 transition"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Need Help Planning Your Trip?
        </h3>
        <p className="text-gray-600 mb-6">
          Our travel experts are ready to help you create the perfect itinerary.
        </p>
        <a
          href="/contact"
          className="inline-block bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-sky-700 transition"
        >
          Contact Our Team
        </a>
      </div>
    </div>
  );
};

export default Book;