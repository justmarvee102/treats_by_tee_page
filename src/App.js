import React from 'react';
import { Navbar } from './components';
import ImageSliders from './components/ImageSliders';
import { images } from './constants';
import './App.scss';

const slide = [
  images.treat,
  images.treats,
  images.treatss,
  images.teeli,
  images.teelic,
  images.delic,
  images.cater,
  images.caterer,
  images.beetasty,
  images.diet,
  images.grand,
  images.ring,
  images.pepper,
  images.food,
  images.spoon,
  images.drink,
  images.service,
  images.fork,
  images.services,
  images.plate,
  images.chef,
  images.salt,
  images.cap,
  images.starbucks,
  images.pot,
  images.by_tee,
];

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <ImageSliders autoSlide autoSlideInterval={5000}>
        {slide.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full"
          />
        ))}
      </ImageSliders>
    </div>
  );
}
