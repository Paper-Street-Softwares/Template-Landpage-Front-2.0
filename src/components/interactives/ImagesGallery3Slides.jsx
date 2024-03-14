import React from "react";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGallery3Slides(props) {
  const { slide1, slide2, slide3 } = props;

  ImagesGallery3Slides.propTypes = {
    slide1: PropTypes.any,
    slide2: PropTypes.any,
    slide3: PropTypes.any,
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
    {
      original: slide3,
      thumbnail: slide3,
    },
  ];

  return (
    <div>
      <ImageGallery
        items={images}
        showBullets={true}
        autoPlay={true}
        showFullscreenButton={false}
        useBrowserFullscreen={true}
      />
    </div>
  );
}
