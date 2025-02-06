import React from 'react';

const ReviewCard = () => {
  const data = [
    {
      name: "Omjee Jaiswal",
      img: "https://via.placeholder.com/100", // Replace with actual image URL
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "John Doe",
      img: "https://via.placeholder.com/100", // Replace with actual image URL
      review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Jane Smith",
      img: "https://via.placeholder.com/100", // Replace with actual image URL
      review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Alice Johnson",
      img: "https://via.placeholder.com/100", // Replace with actual image URL
      review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Bob Brown",
      img: "https://via.placeholder.com/100", // Replace with actual image URL
      review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
              <p className="text-gray-600">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;