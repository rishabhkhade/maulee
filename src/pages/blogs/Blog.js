import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { GoClock } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import Pagetop from "../../comp/pagetop/Pagetop";
import axios from "axios";
import gallery_top_img from "../../assets/hero.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Blog({ setBlogView }) {
  const navigate = useNavigate()
  const [blogData, setBlogData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const blogViewPage = (id)=>{
    setBlogView(id);
    navigate("/blogView")
  }
  const blogsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/posts?_embed`,
        {
          params: {
            per_page: 100,
          },
        }
      );

      const data = response.data;
      const blogPosts = data
        .filter((post) => {
          // Check if the post belongs to the 'Blog' category
          return (
            post._embedded &&
            post._embedded["wp:term"] &&
            post._embedded["wp:term"][0].some(
              (category) => category.name === "Blog"
            )
          );
        })
        .map((post) => {
          const featuredMedia = post._embedded["wp:featuredmedia"]?.[0] || {};
          return {
            title: post.title.rendered,
            description: post.excerpt.rendered,
            uploadDate: post.date,
            imageUrl: featuredMedia.source_url || "",
            imageId: featuredMedia.id || null,
            category: "Blog",
          };
        });

      setBlogData(blogPosts);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    blogsData();
  }, []);

  const startOffset = currentPage * itemsPerPage;
  const paginatedBlogs = blogData.slice(
    startOffset,
    startOffset + itemsPerPage
  );

  const handleNextPage = () => {
    if (startOffset + itemsPerPage < blogData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Pagetop pageHeader="Blogs" backgroundImage={gallery_top_img} />

      <div className="blog-parent parent">
        <div className="blog-container cont">
          <div className="search-input">
            <input
              type="search"
              className="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </div>
          <div className="blog-data-cont">
            {paginatedBlogs.filter((item)=>search === " " ? true :item.title.toLowerCase().includes(search.toLocaleLowerCase())).map((item, index) => {
              return (
                <div
                  className="blog-card"
                  key={index}
                 onClick={()=>blogViewPage(item.imageId)}
                >
                  <div className="blog-img-box">
                    <div className="card-img-overlay">
                      <span className="plus-icon">
                        <FiPlus />
                      </span>
                    </div>
                    <div
                      className="blog-img bg-img-cover"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    >
                      <p className="cat">{item.category}</p>
                    </div>
                  </div>
                  <div className="blog-content-section">
                    <h2 className="blog-title">{item.title}</h2>
                    <p
                      className="blog-description"
                      dangerouslySetInnerHTML={{
                        __html: item.description.slice(0, 50),
                      }}
                    />
                    <div className="date-comment-box">
                      <p className="date">
                        <span className="d-icon">
                          <GoClock />
                        </span>
                        <span>
                          {new Date(item.uploadDate).toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pagination">
            <div
              className={`left-arrow arrow ${
                currentPage === 0 ? "disabled" : ""
              }`}
              onClick={handlePreviousPage}
            >
              <IoIosArrowBack />
            </div>
            <div
              className={`right-arrow arrow ${
                startOffset + itemsPerPage >= blogData.length ? "disabled" : ""
              }`}
              onClick={handleNextPage}
            >
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
