import React from 'react';
import './rightbar.css';
import birthDay from '../../assets/gift.png';
import Ad from '../../assets/ad.jpg';
import {Users} from "../../dummyData.js";
import Online from "../online/Online.jsx";
import Person from '../../assets/person/person5.jpg';


const Rightbar = ({profile}) => {
  const HomeRightBar = () =>{
    return(
      <>
          <div className='birthdayContainer'>
            <img className='birthdayImg' src = {birthDay} alt = ""/>
            <span className='birthdayText'>
              <b>Rachel Green</b> and <b>4 other friends</b> have a birthday today.
            </span>
          </div>
          <img className='rightbarAd' alt = "" src = {Ad}/>
          <h4 className='rightbarTitle'>Online Friends</h4>
          <ul className='rightbarFriendList'>
            {Users.map((u)=>(
              <Online key = {u.id} user = {u}/>
            ))}
            
            
          </ul>

      </>


    )
  }

  const ProfileRightBar = () =>{
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>New York</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>Pune</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship</span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={Person}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={Person}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={Person}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={Person}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

      </>
    )
  }
  return (
    <div className='rightbar'>
        <div className='rightbarWrapper'>
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
        </div>
    </div>
  )
};

export default Rightbar;
