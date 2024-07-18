import React from 'react';
import { Navbar } from './components';
import ImageSliders from './components/ImageSliders';
import { images } from './constants';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'; // Adjust path as necessary
import About from './components/About'; // Adjust path as necessary
import Work from './components/Work'; // Adjust path as necessary
import Skills from './components/Skills'; // Adjust path as necessary
import Contact from './components/Contact'; // Adjust path as necessary

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
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
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
