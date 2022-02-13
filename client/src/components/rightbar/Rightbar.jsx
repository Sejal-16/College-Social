import React, { useEffect, useState, useContext } from "react";
import "./rightbar.css";
import birthDay from "../../assets/gift.png";
import Ad from "../../assets/ad.jpg";
// import { Users } from "../../dummyData.js";
// import Online from "../online/Online.jsx";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";

const Rightbar = ({ user }) => {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(
    currentUser.following.includes(user?._id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(
          process.env.REACT_APP_API + "users/friends/" + user._id
        );
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
    return () => {
      setFriends([]);
    };
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(
          process.env.REACT_APP_API + `users/${user._id}/unfollow`,
          { userId: currentUser._id }
        );
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(
          process.env.REACT_APP_API + `users/${user._id}/follow`,
          {
            userId: currentUser._id,
          }
        );
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={birthDay} alt="sample_image" />
          <span className="birthdayText">
            <b>Rachel Green</b> and <b>4 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img className="rightbarAd" alt="" src={Ad} />
        {/* <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul> */}
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => {
            return (
              <div className="rightbarFollowing">
                <Link to={`/profile/${friend.username}`}>
                  <img
                    src={friend.profilePicture}
                    alt="profilePic"
                    className="rightbarFollowingImg"
                  />
                </Link>
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
