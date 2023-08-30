import Link from "next/link";
import React from "react";
import Tutorial1Img from "../../assets/Tutorial1.jpg";

const products = [
  {
    id: 1,
    name: "Course 1",
    imageSrc: Tutorial1Img.src,
    price: 120.0,
  },
  {
    id: 2,
    name: "Course 2",
    imageSrc: Tutorial1Img.src,
    price: 130.0,
  },
  {
    id: 3,
    name: "Course 3",
    imageSrc: Tutorial1Img.src,
    price: 140.0,
  },
  {
    id: 4,
    name: "Course 4",
    imageSrc: Tutorial1Img.src,

    price: 150.0,
  },
  {
    id: 5,
    name: "Course 5",
    imageSrc: Tutorial1Img.src,
    price: 120.0,
  },
  {
    id: 6,
    name: "Course 6",
    imageSrc: Tutorial1Img.src,
    price: 130.0,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer transform transition-transform hover:scale-105">
      <div className="w-full aspect-w-1 aspect-h-1">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>

        <p className="text-black font-medium text-lg mt-auto">
          INR {product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold text-black mb-12 text-center text-cyan">
        New arrivals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/products" legacyBehavior>
          <a className="bg-cyan text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition-colors duration-300">
            Load More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
