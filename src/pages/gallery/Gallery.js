import React, { useEffect, useState } from "react";
import "./gallery.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import { CiPlay1 } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowDown } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";

import {

  EffectCoverflow,
  Navigation,
  Autoplay,
} from "swiper/modules";
// image

import video from "../../assets/video.webm";
import ReactPlayer from "react-player";
// import { BiSolidVideos } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import gallery_top_img from "../../assets/pagetop.webp";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";

// videos
// import gl1 from "../../assets/video/gl_1.webm";
// import gl2 from "../../assets/video/gl_2.webm";
// import gl3 from "../../assets/video/gl_3.webm";
// import gl4 from "../../assets/video/gl_4.webm";
// import gl5 from "../../assets/video/gl_5.webm";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(15);
  const loadMore = () => {
    setVisibleImages((prev) => prev + 15);
  };

 

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

  // const [lightboxVideoOpen, setLightboxvideoOpen] = useState(false);
  // const [selectedVideo, setSelectedVideo] = useState(null);

  // const openLightVideobox = (image) => {
  //   setSelectedVideo(image);
  //   setLightboxvideoOpen(true);
  // };

  // const closeLightvideobox = () => {
  //   setLightboxvideoOpen(false);
  //   setSelectedVideo(null);
  // };

  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [lightboxImageOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const fetchGallery = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/posts?_embed`,
        {
          params: {
            per_page: visibleImages, // Number of images per page
            page: pageNumber,
          },
        }
      );
   
      const data = response.data;

      console.log(data, "dayta")
      console.log(response, "dayta")
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
          return null;
        })
        .filter((item) => item !== null);
console.log(images)
      setImages(images);

     
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, [pageNumber]);

  const openLightbox = (index) => {
    setSelectedImage(index); // Set the clicked image index
    setLightboxOpen(true); // Open the lightbox
  };

  const closeLightbox = () => {
    setLightboxOpen(false); // Close the lightbox
  };

  const ytlinks = [
    "https://www.youtube.com/embed/cn6sKqhjE5c?si=RliRdRvMlYjnJSDf",
    "https://www.youtube.com/embed/YqgxKlGtpYY?si=xxCc016nj2QR67Eb",
    "https://www.youtube.com/embed/ov73yZLWLZo?si=a3Uu9_A0Z0mHsM0s",
    "https://www.youtube.com/embed/M-ZcZwUst28?si=Dzd4Q5iavkjgC-6v",
    "https://www.youtube.com/embed/TWryAu1oi5g?si=26VMpP4coQyiqSHg",
  ];
  return (
    <>
      <Pagetop pageHeader="Moulees's Work" backgroundImage={gallery_top_img} />

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
            {/* <div
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
            </div> */}
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

          <div
            className={
              gallerypages.ytlinkssection
                ? "gallery-section yt-section"
                : "gallery-section"
            }
          >
            {gallerypages.photossection && (
              <>
                {images.slice(0, visibleImages).map((item, index) => (
                  <div
                    className=" class bg-img-cover"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    key={index}
                    onClick={() => openLightbox(index)}
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
                      images.length < visibleImages &&
                      images.length !== visibleImages
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
            {/* {gallerypages.videossection && (
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
            )} */}
            {gallerypages.ytlinkssection && (
              <>
                {ytlinks.map((item, index) => (
                  <div className=" youtube-links " key={index}>
                    <iframe
                      src={item}
                      frameborder="0"
                      className="iframe_tag"
                    ></iframe>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* image popup */}
      {/* {lightboxImageOpen && (
        <div className="image-lightbox" onClick={closeLightbox}>
          <div className="image ">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )} */}

      {lightboxImageOpen && (
        <div className="image-lightbox">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            initialSlide={selectedImage} 
            loop={true}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
      
            modules={[ EffectCoverflow,Autoplay, Navigation]}
            className="mySwiper"
            onClick={closeLightbox}
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}  className="swiperslide" >
                <div
                  className="image bg-img-contain"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                ></div>
              </SwiperSlide>
            ))}

<div className="custom-prev">
            <BsArrowDown />
          </div>
          <div className="custom-next">
            <BsArrowDown />
          </div>
          </Swiper>
        </div>
      )}
      {/* 
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
      )} */}
    </>
  );
};

export default Gallery;
