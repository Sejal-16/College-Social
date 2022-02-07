import React, { useEffect } from "react";
import "./feed.css";
import Share from "../Share/Share";
import Post from "../post/Post";
import { useState } from "react";
import axios from "axios";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = username
          ? await axios.get(
              process.env.REACT_APP_API + `posts/profile/${username}`
            )
          : await axios.get(
              process.env.REACT_APP_API +
                "posts/timeline/61e445a2274735986f69bb3c"
            );

        setPosts(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
