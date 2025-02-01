import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/configuration";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;
  console.log("isAuthor", isAuthor);
  console.log("slug", slug);

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featured_image);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 bg-gray-50">
      <Container>
        <div className="relative">
          <img
            src={appwriteService.getFilePreview(post.featured_image)}
            alt={post.title}
            className="w-full h-72 object-cover rounded-xl mb-6 shadow-lg"
          />
          {isAuthor && (
            <div className="absolute right-6 top-6 flex space-x-3">
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-green-500"
                  className="text-white hover:bg-green-400"
                >
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-500"
                onClick={deletePost}
                className="text-white hover:bg-red-400"
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">{post.title}</h1>
        </div>
        <div className="prose max-w-none text-gray-700">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
