import React, { useState, useEffect } from "react";
import "./Post.css";
import Heart from "../../assets/heart.png";
import Like from "../../assets/like.png";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData.js";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

function Post({ post }) {
  //console.log(post);

  //const user = Users.filter((u)=> u.id === 1);
  //console.log(user[0].username);

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(
          process.env.REACT_APP_API + `users?userId=${post.userId}`
        );
        setUser(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePicture}
                className="postProfileImg"
                alt="userProfilePic"
              />
            </Link>

            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.img} className="postImg" alt=""></img>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={Like}
              alt=""
              onClick={likeHandler}
            ></img>
            <img
              className="likeIcon"
              src={Heart}
              alt=""
              onClick={likeHandler}
            ></img>
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
