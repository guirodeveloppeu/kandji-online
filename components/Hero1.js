
    "use client";
    import Image from 'next/image';
    import bg from "../app/img/bg6.jpg"
    import { useState, useEffect } from 'react';
    import slid1 from "../app/img/slide1.png"
    import slid2 from "../app/img/slide2.png"
    import slid3 from "../app/img/slide3.png"


    const slides = [
      {
        image: slid1,
        title: 'Welcome to Our Site',
        description: 'Discover amazing products and services tailored just for you.',
      },
      {
        image: slid2,
        title: 'Explore Our Collection',
        description: 'Find the perfect items to suit your needs and style.',
      },
      {
        image: slid3,
        title: 'Explore Our Collection',
        description: 'Find the perfect items to suit your needs and style.',
      },
      // Add more slides as needed
    ];

    function Hero() {
      const [currentSlide, setCurrentSlide] = useState(0);
      const [isVisible, setIsVisible] = useState(true);

      useEffect(() => {
        const slideInterval = setInterval(() => {
          setIsVisible(false);
          setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            setIsVisible(true);
          }, 500); // Wait for fade out before changing slide
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(slideInterval);
      }, []);

      return (
        <div className="relative h-screen overflow-hidden flex-1  w-full  px-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center transition-opacity duration-500 ${
                currentSlide === index && isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`w-full md:w-1/2 transform transition-transform duration-1000 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={600}
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className={`w-full md:w-1/2 p-8 transform transition-transform duration-1000 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-6">{slide.description}</p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                  See More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

export default Hero