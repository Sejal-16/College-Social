import React, { useContext, useEffect } from "react";
import "./feed.css";
import Share from "../Share/Share";
import Post from "../post/Post";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = username
          ? await axios.get(
              process.env.REACT_APP_API + `posts/profile/${username}`
            )
          : await axios.get(
              process.env.REACT_APP_API + `posts/timeline/${user._id}`
            );

        setPosts(
          result.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
