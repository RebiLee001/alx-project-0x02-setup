import React, { useState } from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

interface PostData {
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (newPost: PostData) => {
    setPosts(prev => [...prev, newPost]);
  };

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Post
        </button>

        {posts.map((post, idx) => (
          <Card key={idx} title={post.title} content={post.content} />
        ))}

        {isModalOpen && <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />}
      </main>
    </div>
  );
};

export default Home;
