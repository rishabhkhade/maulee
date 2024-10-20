import React, { useEffect, useState } from "react";
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
import gallery_top_img from "../../assets/hero.png";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(15);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 15);
  };

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

  const [images, setImages] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  const photos = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/media?page=${pageNumber}`
      );
      setImages(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    photos();
  }, [pageNumber]);

  return (
    <>
      <Pagetop pageHeader="Maulees's Work" backgroundImage={gallery_top_img} />

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
                {images.slice(0, visibleImages).map((item, index) => (
                  <div
                    className=" class bg-img-cover"
                    style={{ backgroundImage: `url(${item.source_url})` }}
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
          {visibleImages < images.length && (
            <button onClick={loadMore} className="read-more">
              Read More
            </button>
          )}

          <div className="pagination">
            <div
              className={`left-arrow arrow ${
                pageNumber <= 1 ? "disabled" : "left-arrow arrow"
              }`}
              onClick={
                pageNumber > 1 ? () => setPageNumber(pageNumber - 1) : null
              }
            >
              <IoIosArrowBack />
            </div>
            <div
              className="right-arrow arrow"
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              <IoIosArrowBack />
            </div>
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
