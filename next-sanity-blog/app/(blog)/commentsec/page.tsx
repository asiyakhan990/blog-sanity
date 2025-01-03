"use client";
import React, { useState, useEffect } from "react";

const CommentSec = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<
    { username: string; comment: string }[]
  >([]);

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && comment) {
      const newComment = { username, comment };
      setComments([newComment, ...comments]);
      setUsername("");
      setComment("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit Comment
        </button>
      </form>

      <div>
        {comments.map((item, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <p className="font-semibold">{item.username}</p>
            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSec;
