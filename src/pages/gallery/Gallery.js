import React, { useState } from "react";
import "./gallery.scss";
import Pagetop from "../../comp/pagetop/Pagetop";

// image
import image from "../../assets/IMG_9164.jpg";
import video from "../../assets/video.webm";
import ReactPlayer from "react-player";
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
  const videos = [
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
    {
      image: video,
    },
  ];

  const [gallerypages, setgalleryPage] = useState({
    photos: true,
    videos: false,
    ytlinks: false,
  });

  const closeAll = () => {
    setgalleryPage({
      photos: false,
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
              onClick={() => {
                closeAll(); 
                setgalleryPage({
                  ...gallerypages,
                  photos: true,
                });
                
              }}
            >
              Photos
            </div>
            <div
              className={gallerypages.videos ? "btn-tag active" : "btn-tag"}
             onClick={() => {
              closeAll();
                setgalleryPage({
                  ...gallerypages,
                  videos: true,
                });
               
              }}
            >
              Videos
            </div>
            <div className="btn-tag">YT Links</div>
          </div>

          <div className="gallery-section">
            {gallerypages.photos && (
              <>
                {images.map((item, index) => (
                  <div
                    className=" class bg-img-cover"
                    style={{ backgroundImage: `url(${item.image})` }}
                    key={index}
                  ></div>
                ))}
              </>
            )}
            {gallerypages.videos && (
              <>
                {videos.map((item, index) => (
                  <div
                    className=" class bg-img-cover"
               
                    key={index}
                  >
                    <ReactPlayer
                      className="react-player"
                      url={item.image}
                      width="100%"
                      height="100%"
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
