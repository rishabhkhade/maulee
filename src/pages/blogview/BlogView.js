import React, { useEffect, useState } from 'react';
import Pagetop from "../../comp/pagetop/Pagetop";
import "./blogview.scss";
import axios from 'axios';
import gallery_top_img from "../../assets/hero.png";
const BlogView = ({ blogview }) => {
  const [blogviewdata, setBlogviewData] = useState(null);

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
            id: post.id, // Include an ID or unique identifier
            title: post.title.rendered,
            description: post.excerpt.rendered,
            uploadDate: post.date,
            imageUrl: featuredMedia.source_url || "",
            imageId: featuredMedia.id || null,
            category: "Blog",
          };
        });

      // Filter based on the blogview index
      const filteredData = blogPosts.find((item) => item.imageId === blogview);
      setBlogviewData(filteredData);

      console.log(filteredData, "filteredData");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    blogsData();
  }, [blogview]);

  return (
    <>
      <Pagetop pageHeader="Blogs View" backgroundImage={gallery_top_img} />
      <div className="blogView-section parent">
        <div className="blog-view-cont cont">
          {blogviewdata ? (
            <>
              <div className="image"  >
                <img src={blogviewdata.imageUrl} alt={blogviewdata.title} />
              </div>
             <div class="top-line">
             <h1>{blogviewdata.title}</h1>
             <p>{new Date(blogviewdata.uploadDate).toLocaleDateString()}</p>
             </div>
              <div dangerouslySetInnerHTML={{ __html: blogviewdata.description }} />
             
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogView;
