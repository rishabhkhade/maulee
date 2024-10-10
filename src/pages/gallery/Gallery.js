import React, { useState } from "react";
import "./gallery.scss";
import Pagetop from "../../comp/pagetop/Pagetop";

// image
import image from "../../assets/IMG_9164.jpg";
const Gallery = () => {
  const images = [
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
    {
      image: image,
    },
  ];

  const [gallerypages, setgalleryPage] = useState({
    photos: true,
    videos: false,
    ytlinks: false,
  });

  const closeAll = () => {
    setgalleryPage({
      photos: true,
      videos: false,
      ytlinks: false,
    });
  };
  return (
    <>
      <Pagetop pageHeader="Maulees's Work" />

      <div className="gallery-parent parent">
        <div className="gallery-cont cont">
          <div className="btn-list">
            <div
              className={gallerypages.photos ? "btn-tag active" : "btn-tag"}
              onClick={() =>
                setgalleryPage({
                  ...gallerypages,
                  photos: true,
                },
                closeAll())
                
              }
            >
              Photos
            </div>
            <div className="btn-tag">Videos</div>
            <div className="btn-tag">YT Links</div>
          </div>

          <div className="gallery-section">
        {gallerypages.photos &&
          <>
          {images.map((item, index) => (
                <div
                  className=" class bg-img-cover"
                  style={{ backgroundImage: `url(${item.image})` }}
                  key={index}
                ></div>
              ))}
          </>
        }
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
