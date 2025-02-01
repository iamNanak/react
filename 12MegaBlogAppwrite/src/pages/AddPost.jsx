import React from "react";
import { Container, PostForm } from "../components";

function AddPosts() {
  return (
    <div className="py-10 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create a New Post
        </h2>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPosts;
