import React, { useEffect, useState } from "react";
import Pagetop from "../../comp/pagetop/Pagetop";
import "./blogview.scss";
import axios from "axios";
import gallery_top_img from "../../assets/hero.png";
import { Helmet } from "react-helmet";

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
            description: post.content.rendered,
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
                <img src={blogviewdata.imageUrl} alt={blogviewdata.title} />
              </div>
              <div class="top-line">
                <h1>{blogviewdata.title}</h1>
                <p>{new Date(blogviewdata.uploadDate).toLocaleDateString()}</p>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: blogviewdata.description }}

              
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
