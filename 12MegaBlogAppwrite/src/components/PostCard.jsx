import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/configuration";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";

function PostCard({ $id, title, featured_image }) {
  const { slug } = useParams();
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = posts && userData ? posts.userId === userData.$id : false;

  // console.log("slug", slug);
  // console.log("posts", posts);
  // console.log("isAuthor", isAuthor);
  // console.log("userData", userData);

  useEffect(() => {
    if (slug) {
      appwriteService.getPosts(slug).then((posts) => {
        if (posts) setPosts(posts);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(posts.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(posts.featured_image);
        navigate("/");
      }
    });
  };

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col">
        <div className="w-full flex justify-center mb-6">
          <img
            src={appwriteService.getFilePreview(featured_image)}
            alt={title}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        {/* <p className="text-sm text-gray-500 line-clamp-3">{content}</p> */}
        <div className="flex justify-between items-center">
          {posts && isAuthor && (
            <div className="flex justify-end w-10 h-10">
              <Link to={`/edit-post/${posts.$id}`}>
                <Button
                  bgColor="bg-green-500"
                  className="text-white hover:bg-green-400"
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
          )}
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
