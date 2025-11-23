// pages/posts.tsx
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard"; // if using posts
import { PostProps } from "@/interfaces";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header /> {/* Add the Header component here */}
      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Posts</h1>
        <div className="grid grid-cols-3 gap-4">
          {posts?.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
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
