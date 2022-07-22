import React, { useEffect, useState } from 'react';
import banner_img from './banner_img.png';
import mobile_img from './mobile_img.png';
export default function Banner() {
  const [bg, setBg] = useState();

  useEffect(() => {
    if (window.innerWidth < 800) {
      setBg(mobile_img);
    } else {
      setBg(banner_img);
    }
  }, []);
  return (
    <div
      className="container banner"
      onClick={() => window.open('https://clubapparel.com/', '_blank')}
    >
      <img src={bg} alt="bannerImage" />
    </div>
  );
}
