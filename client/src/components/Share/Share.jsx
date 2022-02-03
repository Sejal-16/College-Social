import React from 'react';
import Profile from "../../assets/person/person1.jpg";
import {PermMedia , Room , Label , EmojiEmotions} from '@material-ui/icons';
import './Share.css';

function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
          <div className='shareTop'>
            <img src = {Profile} alt = "" className='shareProfileImg'></img>
            <input className='shareInput' placeholder="What's in your mind Sejal?"></input>
          </div>
          <hr className='shareHr'/>
          <div className='shareBottom'>
            <div className='shareOptions'>
              <div className='shareOption'>
                  <PermMedia htmlColor='tomato' className='shareIcon'/>
                  <span className='shareOptionText'>Photo/Video</span>
              </div>
              <div className='shareOption'>
                  <Label htmlColor='blue' className='shareIcon'/>
                  <span className='shareOptionText'>Tag</span>
              </div>
              <div className='shareOption'>
                  <Room htmlColor='green' className='shareIcon'/>
                  <span className='shareOptionText'>Location</span>
              </div>
              <div className='shareOption'>
                  <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                  <span className='shareOptionText'>Feelings</span>
              </div>
              <button className='shareButton'>Share</button>

            </div>
              
          </div>
      </div>
        
    </div>
)
}

export default Share;
