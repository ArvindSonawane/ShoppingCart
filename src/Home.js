import React from 'react';
import ImageSlider from './components/Carousel/ImageSlider';
import { SliderData } from './components/Carousel/SliderData';

function Home() {
  return (
  <> <ImageSlider slides={SliderData}/></>
  )
}

export default Home