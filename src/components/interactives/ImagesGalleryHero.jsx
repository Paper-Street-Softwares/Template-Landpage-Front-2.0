import React from "react";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGalleryHero(props) {
  const { slide1, slide2, slide3 } = props;

  ImagesGalleryHero.propTypes = {
    slide1: PropTypes.any,
    slide2: PropTypes.any,
    slide3: PropTypes.any,
  };

  const images = [
    {
      original: slide1,
      thumbnail: slide1,
      originalAlt: "Produto para limpeza de piscina",
    },
    {
      original: slide2,
      thumbnail: slide2,
      originalAlt: "Produto para tratamento de água de piscina",
    },
    {
      original: slide3,
      thumbnail: slide3,
      originalAlt: "Cloros para tratamento de piscinas",
    },
  ];

  return (
    <div>
      <ImageGallery
        items={images}
        showBullets={false}
        autoPlay={true}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        showThumbnails={false}
        showNav={false}
        slideInterval={2500}
      />
    </div>
  );
}
