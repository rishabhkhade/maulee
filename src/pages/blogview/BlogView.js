import React, { useEffect, useState } from "react";
import Pagetop from "../../comp/pagetop/Pagetop";
import "./blogview.scss";
import axios from "axios";
import gallery_top_img from "../../assets/hero.png";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";

const BlogView = ({ blogview }) => {
  const [blogviewdata, setBlogviewData] = useState(null);
  const [searchParams] = useSearchParams();
  const blogId = searchParams.get("title");

  const fetchBlogDataById = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/posts?slug=${id}&_embed` // Fetch single post by ID
      );

      // const post = response.data;
      // const featuredMedia = post._embedded["wp:featuredmedia"]?.[0] || {};

      // const postData = {
      //   id: post.id,
      //   title: post.title.rendered,
      //   description: post.content.rendered,
      //   uploadDate: post.date,
      //   imageUrl: featuredMedia.source_url || "",
      //   imageId: featuredMedia.id || null,
      //   category: "Blog",
      // };

      setBlogviewData(response.data[0]); // Set the blog data based on the single post

    
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (blogId) {
      fetchBlogDataById(blogId); // Fetch the blog post data based on the id from URL
    }
  }, [blogId]);

  return (
    <>
      <Helmet>
        <title>
          Inspiring Stories and Vibrant Insights | Moulee's Tattoo Art Blog
        </title>
        <meta
          name="description"
          content="Explore the Moulee's Tattoo Art blog for expert insights, tattoo care tips, creative inspiration, and the latest trends in tattooing and art. Stay updated with stories, advice, and guides from our skilled artists."
        />
        <meta
          name="keywords"
          content="Tattoo blog,Art inspiration,
          Tattoo care tips,Tattoo trends 2024,Creative tattoo ideas,
          Moulee's Tattoo Art blog,Best tattoo designs,
          Tattooing advice,Tattoo and piercing tips,
          Artistic insights,Tattoo stories Pune,Tattoo aftercare guides"
        />
        <link rel="canonical" href="https://www.mouleestattooart.com/blog" />
      </Helmet>

      <Pagetop pageHeader="Blogs View" backgroundImage={gallery_top_img} />
      <div className="blogView-section parent">
        <div className="blog-view-cont cont">
          {blogviewdata ? (
            <>
              <div className="image">
                <img
                  src={
                    blogviewdata?._embedded?.["wp:featuredmedia"]?.[0]
                      ?.source_url || "default-image.jpg"
                  }
                  alt={blogviewdata?.title?.rendered || "Blog Image"}
                />
              </div>
              <div class="top-line">
                <h1>{blogviewdata?.title?.rendered}</h1>
                <p>{blogviewdata?.date?.split("T")[0]}</p>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: blogviewdata?.content?.rendered }}
              />
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
