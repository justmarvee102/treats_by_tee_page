import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { motion } from 'framer-motion';

import { images } from '../constants';

function ImageSliders({
  children: slide = [],
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slide.length - 1 : curr - 1));
  const next = useCallback(
    () => setCurr((curr) => (curr === slide.length - 1 ? 0 : curr + 1)),
    [slide.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const items = [
    {
      title: 'Typography',
      description: [
        'Clean and modern fonts to ensure readability and aesthetic appeal',
      ],
    },
    {
      title: 'Project Duration',
      description: ['May 2023-January 2024'],
    },

    {
      title: 'Role and Responsibility',
      description: ['Graphic Designer'],
    },
  ];

  const items2 = [
    {
      title: 'Objectives',
      description: [
        "1. Develop a modern and appealing brand identity that resonates with Treats By Tee's target audience.",
        <br />,
        '2. Create versatile designs that can be used across various mediums, including, social media, and print.',
        <br />,
        "3. Enhance the visual appeal of Treats By Tee's offerings to attract more clients and boost brand recognition.",
      ],
    },
    {
      title: 'Challenges & Solutions',
      description: [
        '1. Challenge: Ensuring that the designs stood out in a competitive market.',
        <br />,
        " Solution: I focused on creating unique and eye-catching visuals that highlight the artisanal quality of Treats By Tee's products.",
        <br />,
        '2. Challenge: Balancing modern design elements with a warm and inviting feel.',
        <br />,
        ' Solution: I utilized a combination of elegant fonts, vibrant colors, and soft textures to create a welcoming and memorable brand identity.',
      ],
    },

    {
      title: 'Client Information',
      description: [
        'Treats By Tee is a local catering service specializing in custom desserts and savory dishes for events and celebrations. Known for their unique flavors and artistic presentation, Treats By Tee aims to make every event memorable with their exquisite culinary offerings.',
      ],
    },
  ];

  const items3 = [
    {
      title: 'Result',
      description: [
        'The new branding has been well-received by clients, leading to increased bookings and online engagement.',
      ],
    },
    {
      title: 'Result',
      description: [
        "The cohesive visual identity has strengthened Treats By Tee's market position and helped build a loyal customer base.",
      ],
    },

    {
      title: 'Result',
      description: [
        'The eye-catching promotional materials have made the catering service more attractive, encouraging inquiries and repeat business.',
      ],
    },
  ];

  const items4 = [
    {
      title: 'Scope of Work',
      title2: 'Logo Design',
      description: [
        'I designed new logos that captures the essence of Treats By Tee. The logos incorporate elegant elements and a color palette that evokes the sophistication and creativity of the catering service.',
      ],
    },
    {
      title: 'Scope of Work',
      title2: 'Social Media Templates',
      description: [
        "I developed a set of social media templates for Instagram, Facebook, and Twitter. These templates are easy to use and maintain a cohesive look across all posts, showcasing the catering service's offerings and promotions effectively.",
      ],
    },

    {
      title: 'Scope of Work',
      title2: 'Promotional Materials',
      description: [
        "I designed flyers and posters for Treats By Tee. These materials are used for local advertising and events, helping to spread the word about the catering service's delicious and beautifully presented offerings.",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center  justify-center p-6 sm:p-12 min-h-screen ">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-4xl w-full box overflow-hidden shadow-lg bg-white lg:mt-9 sm:mt-11 mt-20 ">
          <div className="relative lg:w-3/6 sm:w-4/4 w-3/4 overflow-hidden">
            <motion.div
              className="flex transition-transform ease-out duration-500 h-full mt-6 "
              style={{ transform: `translateX(-${curr * 100}%)` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {slide.map((child, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center">
                    {child}
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prev}
                className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                <ChevronRight size={22} />
              </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
              <div className="flex items-center justify-center space-x-0.4">
                {slide.map((_, i) => (
                  <div
                    key={i}
                    className={`transition-all w-2 h-2 rounded-full ${
                      curr === i ? 'bg-black p-1' : 'bg-black bg-opacity-20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-3/6 p-6 sm:w-2/2">
            <div className="bold-text mb-3">
              Graphic Design for Treats By Tee
            </div>
            <p className="s-text mb-4">
              Treats By Tee approached me to revamp their brand identity and
              create a cohesive visual language that would enhance their
              presence both online and offline. The project involved designing
              new logos, packaging, social media templates, and promotional
              materials that reflect the catering service's dedication to
              quality and creativity.
            </p>
            <div className="flex flex-col mb-3">
              <span className="font-semibold">Organization Name:</span>
              <span className="s-text">Treats By Tee</span>
            </div>
            <div className="font-semibold mb-1">Tools Used:</div>
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex flex-col items-center">
                <img src={images.canva} alt="Canva" className="w-7 h-7 mt-1" />
                <span className="s-text">Canva</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={images.photoshop}
                  alt="Photoshop"
                  className="w-7 h-7 mt-1 rounded"
                />
                <span className="s-text">Photoshop</span>
              </div>
            </div>
            <div className="flex-col flex mb-4">
              <div className="font-semibold">Color Palette:</div>
              <h2 className="s-text mb-2">
                Natural and vibrant tones to reflect the appeal of fresh food.
              </h2>
              <div className="flex-row flex ">
                <img
                  src={images.treat}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />
                <div className="colors">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>

              <div className="flex-row flex mt-2">
                <img
                  src={images.treats}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />

                <div className="colors2">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>

              <div className="flex-row flex mt-2">
                <img
                  src={images.food}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />

                <div className="colors3">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className="font-semibold mb-2">Project Link:</div>
              <a href="blank" className="text-blue-500 underline">
                *Check out a full PDF of the graphics*
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className="font-semibold text-center ">Other Important Info:</h1>
      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-white w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
              backgroundColor: '#f0f0f0',
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              backgroundColor: '#f0f0f0',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center">{item.title}</div>
            {item.description.map((desc, i) => (
              <h2 key={i} className="h-text text-center">
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-7 w-full px-6 sm:px-10 lg:px-14 py-4 sm:py-8 lg:py-10">
        {items2.map((item2, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-white w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
              backgroundColor: '#f0f0f0',
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              backgroundColor: '#f0f0f0',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center">{item2.title}</div>
            {item2.description.map((desc, i) => (
              <h2 key={i} className="h-text text-center">
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-7 w-full px-6 sm:px-10 lg:px-14 py-4 sm:py-8 lg:py-10">
        {items3.map((item3, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-white w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
              backgroundColor: '#f0f0f0',
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              backgroundColor: '#f0f0f0',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center">{item3.title}</div>
            {item3.description.map((desc, i) => (
              <h2 key={i} className="h-text text-center">
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-7 w-full px-6 sm:px-10 lg:px-14 py-4 sm:py-8 lg:py-10">
        {items4.map((item4, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-white w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
              backgroundColor: '#f0f0f0',
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              backgroundColor: '#f0f0f0',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center">{item4.title}</div>
            <div className="font-semibold text-gray-500 mb-2 text-center">
              {item4.title2}
            </div>
            {item4.description.map((desc, i) => (
              <h2 key={i} className="h-text text-center">
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default ImageSliders;
