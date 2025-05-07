import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Show one slide at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,  // For larger screens (desktops)
        settings: {
          slidesToShow: 1, // Show one slide at a time
          centerMode: true,
          centerPadding: '8px',  // Further reduced padding for a smaller view
        }
      },
      {
        breakpoint: 768,  // For tablets and smaller screens
        settings: {
          slidesToShow: 1,  // Show one slide at a time on small screens
          centerMode: true, // Keep slides centered
          centerPadding: '8px',  // Adjust padding for smaller view
        }
      },
      {
        breakpoint: 480,  // For mobile devices
        settings: {
          slidesToShow: 1,  // Still show one slide
          centerMode: true,
          centerPadding: '5px',  // Padding for mobile, making it even more compact
        }
      }
    ]
  };

  return (
    <Box sx={{ maxWidth: '100%', marginBottom: 5 }}>
      {/* <h1 style={{ textAlign: "center", fontFamily: "Pacifico", fontSize: '1.5rem' }}>Where Every Second Counts</h1> */}
      <Slider {...settings}>
        <div>
          <img
            src="https://www.cnet.com/a/img/resize/617a7390f9f6856e540dc96da35c0e3e1cb323e1/hub/2022/10/14/6fad9d02-7af1-46f0-a7fa-a9591910442f/20221007-pixel-watch.jpg?auto=webp&fit=crop&height=675&width=1200"
            alt="watches"
            style={{
              width: '100%',  // Slightly smaller image width
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              margin: '0 auto',
            }}
          />
        </div>
        <div>
          <img
            src="https://cdn.mos.cms.futurecdn.net/6up7VZb5T9GbQGFmpixwaB-1200-80.jpg"
            alt="watches"
            style={{
              width: '100%',  // Slightly smaller image width
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              margin: '0 auto',
            }}
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_1280.jpg"
            alt="watches "
            style={{
              width: '100%',  // Slightly smaller image width
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              margin: '0 auto',
            }}
          />
        </div>
      </Slider>
    </Box>
  );
};

export default HeroSlider;                                               