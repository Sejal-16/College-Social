import React from 'react';
import './profile.css';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/feed';
import Post from '../../assets/posts/post3.jpg';
import Person from '../../assets/person/person3.jpg';

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={Post}
                alt=""
              />
              <img
                className="profileUserImg"
                src={Person}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Sejal Zambare</h4>
                <span className="profileInfoDesc">Hello there!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;
