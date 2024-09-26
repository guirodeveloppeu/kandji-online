
    "use client";
    import Image from 'next/image';
    import bg from "../app/img/bg7.jpg"
    import { useState, useEffect } from 'react';
    import slid1 from "../app/img/slide1.png"
    import slid2 from "../app/img/slide2.png"



    const slides = [
      {
        image: slid1,
        title: 'KPANDJI DJETRAN',
        description: 'Fait pour ceux qui aiment la puissance et le luxe.',
      },
      {
        image: slid2,
        title: 'KPANDJI RL9',
        description: 'Vivez déjà la future dans le confort',
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
            {/* Background Image */}
            <Image
            src={bg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute z-0 "
          />

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center transition-opacity duration-500 ${
                currentSlide === index && isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              
              <div className={`w-full md:w-1/2 p-8 transform transition-transform duration-1000 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <h1 className="text-4xl font-bold mb-4 text-white">{slide.title}</h1>
                <p className="text-lg mb-6 text-white">{slide.description}</p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                  Plus Détails
                </button>
              </div>


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
            </div>
          ))}
        </div>
      );
    }

export default Hero