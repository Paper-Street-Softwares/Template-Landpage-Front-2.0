import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGallery2Slides(props) {
  const { slide1, slide2 } = props;

  ImagesGallery2Slides.propTypes = {
    slide1: PropTypes.any,
    slide2: PropTypes.any,
  };

  const images = [
    {
      original: slide1,
      thumbnail: slide1,
    },
    {
      original: slide2,
      thumbnail: slide2,
    },
  ];

  return (
    <div>
      <ImageGallery
        items={images}
        showBullets="true"
        autoPlay="false"
        showFullscreenButton={false}
        showThumbnails={false}
      />
    </div>
  );
}
