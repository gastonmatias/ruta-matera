import Slider from "react-slick";

import hoja  from '../../assets/carousel_home/hoja.jpg'
import mate1 from '../../assets/carousel_home/mate1.webp'
import mate2 from '../../assets/carousel_home/mate2.jpg'
import mateW from '../../assets/carousel_home/matewoman.webp'
import yerba from '../../assets/carousel_home/yerba.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlickSlider = () => {

  let images = [mate2,mateW,mate1,hoja,yerba]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade:true,
    lazyLoad: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  return (
    <Slider {...settings}>
      {images.map((item,i) => (
          <img
          key={i} src={item}
          style={{
              height: '100%',
              // objectFit:'contain',
              objectFit:'fill',
              padding: 0,
              margin: 0,
          }}
          alt='img caoruseel' 
      />
      ))}
    </Slider>
  )
}