import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/configuration";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-16 bg-gray-100">
        <Container>
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-semibold text-gray-700 hover:text-gray-500 transition duration-300">
              No posts available. Please login to read posts.
            </h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
