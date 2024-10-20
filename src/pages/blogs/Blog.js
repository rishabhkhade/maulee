import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { GoClock } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import Pagetop from "../../comp/pagetop/Pagetop";
import axios from "axios";
import gallery_top_img from "../../assets/hero.png";
function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [search, setSearch] = useState("");
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;

  // Fetch the blog data from the API
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
      setBlogData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    blogsData();
  }, []);

  // Filter the blog data based on the search query
  const filteredData = blogData.filter((item) =>
    item.title.rendered.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    setItemOffset(newOffset);
  };


  console.log(blogData)
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
            {currentItems.map((item, index) => {
              // Get the image URL from the embedded field
              const imageUrl =
                item._embedded?.["wp:featuredmedia"]?.[0]?.source_url; // Fallback image
//  // Get categories from the embedded field
//  const categories = item._embedded?.["wp:term"]?.[0] || [];
              
//  // Example: Select the first category or filter based on your criteria
//  const specificCategory = categories.length > 0 ? categories[0].name : "Uncategorized";

              return (
                <div className="blog-card" key={index}>
                  {/* <h1>{specificCategory}</h1> */}
                  <div className="blog-img-box">
                    <div className="card-img-overlay">
                      <span className="plus-icon">
                        <FiPlus />
                      </span>
                    </div>
                    <div
                      className="blog-img bg-img-cover"
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                  </div>
                  <div className="blog-content-section">
                    {/* <div className="section-indicator-2">{item.categories[0]}</div> */}
                    <h2 className="blog-title">{item.title.rendered}</h2>
                    <p
                      className="blog-description"
                      dangerouslySetInnerHTML={{
                        __html: item.excerpt.rendered.slice(0, 50),
                      }}
                    />
                    <div className="date-comment-box">
                      <p className="date">
                        <span className="d-icon">
                          <GoClock />
                        </span>
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2} // Number of middle page numbers
            marginPagesDisplayed={2} // Number of pages shown at the beginning and end
            pageCount={pageCount} // Total number of pages (dynamic)
            previousLabel="< "
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
