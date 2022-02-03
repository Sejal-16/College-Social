import React from 'react';
import './topbar.css';
import {Search , Person , Chat , Notifications} from '@material-ui/icons';
import Profile from "../../assets/person/person1.jpg";

const Topbar = () => {
  return (
    <div className='topbarContainer'>
       <div className='topbarLeft'>
           <span className='logo'>College Social</span>
       </div>
       <div className='topbarCenter'>
          <div className='searchbar'>
            <input placeholder="Search for a friend , post or video" className='searchbar'></input>

          </div>
           
       </div>
       <div className='topbarRight'>
         <div className='topbarLinks'>
            <span className='topbarLink'>Homepage</span>
            <span className='topbarLink'>Timeline</span>

         </div>
         <div className='topbarIcons'>
           <div className='topbarIconItem'>
              <Person/>
              <span className='topbarIconBadge'>1</span>

           </div>
           <div className='topbarIconItem'>
              <Chat/>
              <span className='topbarIconBadge'>2</span>

           </div>
           <div className='topbarIconItem'>
              <Notifications/>
              <span className='topbarIconBadge'>3</span>

           </div>

        </div>
        <img src={Profile} alt="" className="topbarImg"/>
       </div>

    </div>

  )
  
};

export default Topbar;
