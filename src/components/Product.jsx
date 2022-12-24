import axios from "axios";
import React from "react";
import { useEffect } from "react";

const URL = "https://dummyjson.com/products";

const Product = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(URL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>Products</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Product