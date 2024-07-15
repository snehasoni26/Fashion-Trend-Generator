import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from '../ui/NavBar';

const catalogItems = [
  {
    id: 1,
    title: 'Catalog Item 1',
    image: 'about1.jpg', // Replace with actual image URL
    author: 'Author 1',
    likes: 15,
    views: 2700,
  },
  // Add more items here...
];

const CatalogPage = () => {
  return (
    <div>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Catalog Page</h1>
        <p className="text-center mb-8">
          Inspirational designs, illustrations, and graphic elements from the world's best designers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.map((item) => (
            <div key={item.id} className="relative group bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-red-500">
                <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                </button>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600">by {item.author}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-gray-600">
                    <span className="mr-2">
                    <FontAwesomeIcon icon="fa-solid fa-bookmark" /> {item.likes}
                    </span>
                    <span>
                    <FontAwesomeIcon icon="fa-solid fa-bookmark" />{item.views}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CatalogPage;
