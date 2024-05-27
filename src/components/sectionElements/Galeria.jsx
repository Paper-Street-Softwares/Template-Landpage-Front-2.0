import React from "react";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGallerySlides(props) {
  const { slide1, slide2, slide3, slide4, slide5 } = props;

  ImagesGallerySlides.propTypes = {
    slide1: PropTypes.string.isRequired,
    slide2: PropTypes.string.isRequired,
    slide3: PropTypes.string.isRequired,
    slide4: PropTypes.string.isRequired,
    slide5: PropTypes.string.isRequired,
  };

  const images = [
    { original: slide1, thumbnail: slide1, originalAlt: "" },
    { original: slide2, thumbnail: slide2, originalAlt: "" },
    { original: slide3, thumbnail: slide3, originalAlt: "" },
    { original: slide4, thumbnail: slide4, originalAlt: "" },
    { original: slide5, thumbnail: slide5, originalAlt: "" },
  ];

  return (
    <div>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showBullets={false}
        autoPlay={true}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={false}
        slideInterval={3000}
        slideDuration={500} // Duração da transição para criar o efeito de fade curto
        useBrowserFullscreen={false}
      />
    </div>
  );
}
