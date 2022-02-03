import React , {useState} from 'react';
import './Post.css';
import Heart from "../../assets/heart.png";
import Like from "../../assets/like.png";
import { MoreVert} from '@material-ui/icons';
import {Users} from "../../dummyData.js";





function Post({post}) {
    //console.log(post);

    //const user = Users.filter((u)=> u.id === 1);
    //console.log(user[0].username);

    const [like , setLike] = useState(post.like);
    const [isLiked , setIsLiked] = useState(false);

    const likeHandler = () =>{
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }


  return (
    <div className='post'>
      <div className='postWrapper'>
       <div className='postTop'>
           <div className='postTopLeft'>
               <img src={Users.filter((u)=> u.id === post?.userId)[0].profilePicture} className='postProfileImg' alt = ""></img>
               <span className='postUsername'>{Users.filter((u)=> u.id === post?.userId)[0].username}</span>
               <span className='postDate'>{post.date}</span>
           </div>
           <div className='postTopRight'>
               <MoreVert className=''/>
           </div>
       </div>
       <div className='postCenter'>
           <span className='postText'>{post.desc}</span>
           <img src={post.photo} className='postImg' alt = ""></img>

       </div>
       <div className='postBottom'>
           <div className='postBottomLeft'>
               <img className='likeIcon' src = {Like} alt = "" onClick = {likeHandler}></img>
               <img className = 'likeIcon' src = {Heart} alt = "" onClick = {likeHandler}></img>
               <span className='postLikeCounter'>{like} people liked it</span>
           </div>
           <div className='postBottomRight'>
               <span className='postCommentText'>{post.comment} comments</span>
           </div>
       </div>

      </div>

    </div>
  )
}

export default Post;
