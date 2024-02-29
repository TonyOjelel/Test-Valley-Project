import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch('https://api.testvalley.kr/main-banner/all')
      .then(response => response.json())
      .then(data => setBanners(data))
      .catch(error => console.error('Error fetching banners:', error));
  }, []);

  return (
    <div>
      {banners.map(banner => (
        <div key={banner.mainBannerId}>
          <h2>{banner.title}</h2>
          <img src={banner.pcImageUrl} alt={banner.title} />
          <a href={banner.linkUrl}>Link</a>
        </div>
      ))}
    </div>
  );
};

export default Banner;
