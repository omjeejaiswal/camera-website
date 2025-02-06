import React from 'react';

const WeOffer = () => {
  const offers = [
    {
      id: 1,
      title: "Product/Service Name 1",
      description: "A brief description of the product or service.",
      image: "https://www.cpplusworld.com/prodassets/weofferbanners/ed058313-1855-42f5-a527-938a44dc209b.jpg", // Replace with your image URL
    },
    {
      id: 2,
      title: "Product/Service Name 2",
      description: "A brief description of the product or service.",
      image: "https://www.cpplusworld.com/prodassets/weofferbanners/2c0d47da-8983-4729-a25e-568ebd2b84bd.jpg", // Replace with your image URL
    },
    {
      id: 3,
      title: "Product/Service Name 3",
      description: "A brief description of the product or service.",
      image: "https://www.cpplusworld.com/prodassets/weofferbanners/535916d9-e22f-4e7f-8050-92f547673c03.jpg", // Replace with your image URL
    },
  ];

  return (
    <section className=" py-5 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">We Offer</h2>
        <p className="text-center text-gray-600 mb-12">
          At <strong>CP Plus World</strong>, offers a comprehensive range of advanced security and surveillance solutions to meet the ever-changing requirements of different industries. At present, we are serving many different verticals comprising defence, government, hotels, hospitals, educational institutes, homes, infrastructure, and transportation among others. Being a major surveillance system brand globally, we bring efficient, reliable, scalable, and integrated solutions to our customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOffer;