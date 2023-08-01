import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Post } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const responseBody = await response.json();
        setPosts(responseBody);
      } catch (err) {
        console.log("Error while fetching posts");
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 &&
        posts.map((p) => {
          return <Post id={p.id} title={p.title} body={p.body} />;
        })}
    </div>
  );
}

export default App;
