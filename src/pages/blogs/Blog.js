import React, { useState } from "react";
import "./Blog.scss";
import { GoClock } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import aboutImg from "../../assets/IMG_0055.jpg";
import ReactPaginate from "react-paginate";
import Pagetop from "../../comp/pagetop/Pagetop";

function Blog() {
  const blogData = [
    {
      id: 1,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "Finance",
      date: "29 Jun, 2024",
    },
    {
      id: 2,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "marketing",
      date: "29 Jun, 2024",
    },
    {
      id: 3,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "Finance",
      date: "29 Jun, 2024",
    },
    {
      id: 4,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "Finance",
      date: "29 Jun, 2024",
    },
    {
      id: 5,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "Finance",
      date: "29 Jun, 2024",
    },
    {
      id: 6,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "Finance",
      date: "29 Jun, 2024",
    },
    {
      id: 7,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "Finance",
      date: "29 Jun, 2024",
    },
    {
      id: 8,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "Finance",
      date: "29 Jun, 2024",
    },
    {
      id: 9,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "Finance",
      date: "40 Jun, 2024",
    },
    {
      id: 10,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "Finance",
      date: "80 Jun, 2024",
    },
    {
      id: 11,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "Finance",
      date: "2 Jun, 2024",
    },
    {
      id: 12,
      image: aboutImg,
      heading: "Accounting Support During the Exponential Growth",
      category: "rishbh",
      date: "30 Jun, 2024",
    },
  ];

  const [search, setSearch] = useState("");
  const filteredData = blogData.filter(
    (item) =>
      item.heading.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Pagetop  pageHeader="Blogs" />

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
            {currentItems.map((item, index) => (
              <div className="blog-card" key={index}>
                <div className="blog-img-box">
                  <div className="card-img-overlay">
                    <span className="plus-icon">
                      <FiPlus />
                    </span>
                  </div>
                  <div
                    className="blog-img bg-img-cover"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                </div>
                <div className="blog-content-section">
                  <div className="section-indicator-2">{item.category}</div>
                  <h3 className="blog-title">{item.heading}</h3>
                  {/* <hr className="blog-hr" /> */}
                  <div className="date-comment-box">
                    <p className="date">
                      <span className="d-icon">
                        <GoClock />
                      </span>
                      <span>{item.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
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