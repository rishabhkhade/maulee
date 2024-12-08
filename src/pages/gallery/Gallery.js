import React, { useEffect, useState } from "react";
import "./gallery.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import { CiPlay1 } from "react-icons/ci";
// image

import video from "../../assets/video.webm";
import ReactPlayer from "react-player";
import { BiSolidVideos } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import gallery_top_img from "../../assets/hero.png";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";

// videos
import gl1 from "../../assets/video/gl_1.webm";
import gl2 from "../../assets/video/gl_2.webm";
import gl3 from "../../assets/video/gl_3.webm";
import gl4 from "../../assets/video/gl_4.webm";
import gl5 from "../../assets/video/gl_5.webm";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(15);
  const loadMore = () => {
    setVisibleImages((prev) => prev + 15);
  };

  const videos = [
    {
      image: gl1,
    },
    {
      image: gl2,
    },
    {
      image: gl3,
    },
    {
      image: gl4,
    },

    {
      image: gl5,
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

  const fetchGallery = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/posts?_embed`,
        {
          params: {
            per_page: 13, // Set per_page here
            page: pageNumber, // Adjust page number as needed
          },
        }
      );

      const data = response.data;
      const images = data
        .filter((post) => {
          return (
            post._embedded &&
            post._embedded["wp:term"] &&
            post._embedded["wp:term"][0].some(
              (category) => category.name === "Gallery"
            )
          );
        })
        .map((post) => {
          if (
            post._embedded &&
            post._embedded["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"].length > 0
          ) {
            const featuredMedia = post._embedded["wp:featuredmedia"][0];
            return {
              imageUrl: featuredMedia.source_url,
              imageId: featuredMedia.id,
            };
          }
          return null; // If no featured media, return null
        })
        .filter((item) => item !== null); // Filter out null values

      console.log(images, "Filtered images with Gallery category");
      setImages(images); // Save filtered images to state
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, [pageNumber]);

  console.log(images.length);
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
            <div
              className={
                gallerypages.ytlinkssection ? "btn-tag active" : "btn-tag"
              }
              onClick={() => {
                closeAll();
                setgalleryPage({
                  ytlinkssection: true,
                });
              }}
            >
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
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    key={index}
                    onClick={() => openLightbox(item.imageUrl)}
                  ></div>
                ))}

                <div className="pagination">
                  <div
                    className={`left-arrow arrow ${
                      pageNumber <= 1 ? "disabled" : "left-arrow arrow"
                    }`}
                    onClick={
                      pageNumber > 1
                        ? () => setPageNumber(pageNumber - 1)
                        : null
                    }
                  >
                    <IoIosArrowBack />
                  </div>
                  <div
                    className={`right-arrow arrow ${
                      images.length < 13 && images.length !== 13
                        ? "disabled"
                        : "right-arrow arrow"
                    }`}
                    onClick={() => setPageNumber(pageNumber + 1)}
                  >
                    <IoIosArrowBack />
                  </div>
                </div>
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
