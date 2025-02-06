import React from 'react';

const StayUpdated = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
      link: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
      link: "https://www.twitter.com",
    },
    {
      name: "Instagram",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
      link: "https://www.instagram.com",
    },
    {
      name: "LinkedIn",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      link: "https://www.linkedin.com",
    },
    {
      name: "YouTube",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174883.png",
      link: "https://www.youtube.com",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Stay Updated</h2>
        <p className="text-center text-gray-600 mb-8">
          Subscribe to our newsletter and follow us on social media for the latest updates.
        </p>

        {/* Email Input Field */}
        <div className="max-w-md mx-auto mb-12">
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6">
          {socialMediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-10 h-10"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;