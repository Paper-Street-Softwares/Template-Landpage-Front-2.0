import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGallery() {
  const images = [
    {
      original: "https://picsum.photos/id/504/1110/500.jpg",
      thumbnail: "https://picsum.photos/id/504/250/150.jpg",
    },
    {
      original: "https://picsum.photos/id/668/1110/500.jpg",
      thumbnail: "https://picsum.photos/id/668/250/150.jpg",
    },
    {
      original: "https://picsum.photos/id/445/1110/500.jpg",
      thumbnail: "https://picsum.photos/id/445/250/150.jpg",
    },
  ];

  return (
    <div>
      <ImageGallery items={images} showBullets="true" autoPlay="true" />
    </div>
  );
}
