import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGallery() {
  const images = [
    {
      original: "https://picsum.photos/id/479/1110/500.jpg",
      thumbnail: "https://picsum.photos/id/479/250/150.jpg",
    },
    {
      original: "https://picsum.photos/id/480/1110/500.jpg",
      thumbnail: "https://picsum.photos/id/480/250/150.jpg",
    },
    {
      original: "https://picsum.photos/id/481/1110/500.jpg",
      thumbnail: "https://picsum.photos/id/481/250/150.jpg",
    },
  ];

  return (
    <div>
      <ImageGallery items={images} showBullets="true" autoPlay="true" />
    </div>
  );
}
