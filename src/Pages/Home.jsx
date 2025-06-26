import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Import your CSS styles


const OfferSlider = () => {
  const offers = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHwwfDB8fHww",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vYmlsZXxlbnwwfDB8MHx8fDA%3D",
    },
    {
      id: 6,
      image: "https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHwwfDB8fHww",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <button className="slick-next"></button>,
    prevArrow: <button className="slick-prev"></button>,
  };

  return (
    <div className="offer-slider">
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="slide">
            <img
              src={offer.image}
              alt={`Offer ${offer.id}`}
              className="slide-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferSlider;
