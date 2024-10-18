import React, { useState } from "react";
import "./gallery.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import { CiPlay1 } from "react-icons/ci";
// image
import image from "../../assets/IMG_9164.jpg";
import video from "../../assets/video.webm";
import ReactPlayer from "react-player";
import { BiSolidVideos } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
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
    photossection: true,
    videossection: false,
    ytlinkssection: false,
  });

  const closeAll = () => {
    setgalleryPage({
      photossection: false,
      videossection: false,
      ytlinkssection: false,
    });
  };

  const [lightboxImageOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [lightboxVideoOpen, setLightboxvideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openLightVideobox = (image) => {
    setSelectedVideo(image);
    setLightboxvideoOpen(true);
  };

  const closeLightvideobox = () => {
    setLightboxvideoOpen(false);
    setSelectedVideo(null);
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
      <Pagetop pageHeader="Maulees's Work" />

      <div className="gallery-parent parent">
        <div className="gallery-cont cont">
          <div className="btn-list">
            <div
              className={
                gallerypages.photossection ? "btn-tag active" : "btn-tag"
              }
              onClick={() => {
                closeAll();
                setgalleryPage({
                  photossection: true,
                });
              }}
            >
              <span className="icon">
              <IoMdPhotos />
              </span>

              <p className="text">Photos</p>
            </div>
            <div
              className={
                gallerypages.videossection ? "btn-tag active" : "btn-tag"
              }
              onClick={() => {
                closeAll();
                setgalleryPage({
                  videossection: true,
                });
              }}
            >
              <span className="icon">
                <BiSolidVideos />
              </span>

              <p className="text">Videos</p>
            </div>
            <div className="btn-tag">
              {" "}
              <span className="icon">
              <BsYoutube />
              </span>
              <p className="text">YT links</p>
            </div>
          </div>

          <div className="gallery-section">
            {gallerypages.photossection && (
              <>
                {images.map((item, index) => (
                  <div
                    className=" class bg-img-cover"
                    style={{ backgroundImage: `url(${item.image})` }}
                    key={index}
                    onClick={() => openLightbox(item.image)}
                  ></div>
                ))}
              </>
            )}
            {gallerypages.videossection && (
              <>
                {videos.map((item, index) => (
                  <div className=" class bg-img-cover" key={index}>
                    <ReactPlayer
                      config={{
                        file: {
                          forceVideo: true,
                          attributes: {
                            preload: "metadata",
                          },
                        },
                      }}
                      muted
                      controls={false}
                      playing={false}
                      width="100%"
                      height="100%"
                      className="video"
                      url={item.image}
                    />

                    <div
                      className="play-button"
                      onClick={() => openLightVideobox(item.image)}
                    >
                      <CiPlay1 />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* image popup */}
      {lightboxImageOpen && (
        <div className="image-lightbox" onClick={closeLightbox}>
          <div className="image ">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}

      {lightboxVideoOpen && (
        <div className="image-lightbox" onClick={closeLightvideobox}>
          <div className="image ">
            <ReactPlayer
              config={{
                file: {
                  forceVideo: true,
                  attributes: {
                    preload: "metadata",
                  },
                },
              }}
              muted
              controls={true}
              autoplay
              playing={true}
              width="100%"
              height="100%"
              className="video"
              url={selectedVideo}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
