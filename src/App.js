import "./App.css";
import { useEffect, useState } from "react";
import { Post } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then((body) => setPosts(body))
      .catch((err) => console.log("Error while fetching posts"));
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
