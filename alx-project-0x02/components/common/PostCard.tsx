import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="p-4 border rounded shadow mb-4 hover:shadow-lg transition">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p>{body}</p>
      <small>User ID: {userId} | Post ID: {id}</small>
    </div>
  );
};

export default PostCard;
