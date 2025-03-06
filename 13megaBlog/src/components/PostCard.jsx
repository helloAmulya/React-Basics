import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredimage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-xl p-3 ">
        <div className="justify-center mb-2">
          <img
            src={appwriteService.getFilePreview(featuredimage)}
            alt="title"
            className="rounded-xl "
          />
        </div>
        <h2 className="text-2xl text-black font-mono">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
