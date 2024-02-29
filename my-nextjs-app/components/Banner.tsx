// components/Banner.tsx
"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner: React.FC = () => {
  const [banners, setBanners] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.testvalley.kr/main-banner/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBanners(data);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {banners.map(banner => (
          <div key={banner.mainBannerId}>
            <h2>{banner.title}</h2>
            <img src={banner.pcImageUrl} alt={banner.title} />
            <a href={banner.linkUrl}>Link</a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
