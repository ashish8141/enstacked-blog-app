import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE_URL = "https://enstacked.com/wp-json/wp/v2";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center">{post.title.rendered}</h1>
      <div
        className="content mt-3"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
      <div className="mt-4 text-center">
        <a href="/" className="btn btn-primary">Back to Homepage</a>
      </div>
    </div>
  );
};

export default SinglePost;
