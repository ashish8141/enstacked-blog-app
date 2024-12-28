import React, { useEffect, useState } from "react";

const API_BASE_URL = "https://enstacked.com/wp-json/wp/v2";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Custom Posts</h1>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <a href={`/post/${post.id}`}>{post.title.rendered}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
