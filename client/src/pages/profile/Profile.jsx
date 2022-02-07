import React from "react";
import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/feed";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(
          process.env.REACT_APP_API + `users?username=${username}`
        );
        setUser(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={user.coverPicture} alt="" />
              <img
                className="profileUserImg"
                src={user.profilePicture}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
