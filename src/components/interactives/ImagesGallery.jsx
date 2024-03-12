import ImageGallery from "react-image-gallery";
import slide1 from "../../assets/banners/aboutUs/slide1bigPool.jpg";
import slide2 from "../../assets/banners/aboutUs/slide2smallPool.jpg";
import slide3 from "../../assets/banners/aboutUs/slide3cleanWater.jpg";

import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGallery() {
  const images = [
    {
      original: slide1,
      thumbnail: slide1,
    },
    {
      original: slide2,
      thumbnail: slide2,
    },
    {
      original: slide3,
      thumbnail: slide3,
    },
  ];

  return (
    <div>
      <ImageGallery items={images} showBullets="true" autoPlay="true" />
    </div>
  );
}
