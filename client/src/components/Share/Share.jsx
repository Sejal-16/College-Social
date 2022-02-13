import React from "react";
import { PermMedia, Room, Label, EmojiEmotions } from "@material-ui/icons";
import "./Share.css";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Share() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("image", file);
      data.append("name", fileName);

      try {
        const img_result = await axios.post(
          process.env.REACT_APP_API + "upload",
          data
        );
        newPost.img = img_result.data.img;
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post(process.env.REACT_APP_API + "posts", newPost);
      history.push(`/profile/${user.username}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={user.profilePicture}
            alt="profilePic"
            className="shareProfileImg"
          ></img>
          <input
            className="shareInput"
            placeholder={`What's in your mind ${user.username}?`}
            ref={desc}
          ></input>
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
              <input
                type="file"
                id="file"
                name="image"
                style={{ display: "none" }}
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
            <button className="shareButton" type="submit">
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Share;
