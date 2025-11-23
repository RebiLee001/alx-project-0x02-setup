import React, { useState } from "react";

interface PostData {
  title: string;
  content: string;
}

interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<PostData>({ title: "", content: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={post.title}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          <textarea
            name="content"
            placeholder="Content"
            value={post.content}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            rows={4}
          />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
