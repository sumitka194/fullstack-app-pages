import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Post() {
  const [post, setPost] = useState<{ id: number; title: string; text: string; published_at: string } | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getPost = async () => {
      if (id) {
        const response = await fetch(`/api/post/${id}`);
        const data = await response.json();
        setPost(data);
      }
    };

    getPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <p>
        <em>Published at: {new Date(post.published_at).toLocaleString()}</em>
      </p>
      <p>
        <Link to="/">Back to Posts</Link>
      </p>
    </div>
  );
}

export default Post;