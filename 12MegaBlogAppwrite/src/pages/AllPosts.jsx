import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/configuration";
import { Container, PostCard } from "../components";
// import { Button } from "../components";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  // const userData = useSelector((state) => state.auth.userData);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      console.log("posts", posts);
      setPosts(posts.documents);
    }
  });

  // const deletePost = () => {
  //   appwriteService.deletePost(posts.$id).then((status) => {
  //     if (status) {
  //       appwriteService.deleteFile(posts.featured_image);
  //       navigate("/");
  //     }
  //   });
  // };

  return (
    <Container>
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post} />
            {/* {userData && (
              <div className="flex justify-end mt-2">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgColor="bg-green-500"
                    className="text-white hover:bg-green-400 mr-2"
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-500"
                  className="text-white hover:bg-red-400"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default AllPosts;
