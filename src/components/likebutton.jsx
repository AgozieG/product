


import "./likebutton.css"
import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(124);
    const [isLiked,setIsLiked] = useState(false);

    const handleLikeClick = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1)
        }
        setIsLiked(!isLiked)
    };

    return(
        <button className="buttonStyle" onClick={handleLikeClick}>
            {isLiked ? '❤' :' 🤍'} | {likes}
        </button>
    )


}

export default LikeButton;