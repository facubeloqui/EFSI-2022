import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default function Slider() {
  return (
      <>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/img/isabel.jpeg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/img/aliados.jpeg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/img/pink.jpeg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</>
  )
}
