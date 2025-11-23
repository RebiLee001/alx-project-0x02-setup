import React from "react";
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return { props: { posts } };
}

export default Posts;
