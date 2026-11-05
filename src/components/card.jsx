
import "./card.css"
import LikeButton from "./likebutton";

function Card({image,title,description}) {
    return(
    <>
    <div className="card">
        <img src={image} alt="anything" className="picture"/>
        <div className="container2">
            <h1 className="title">{title}</h1>
            <LikeButton />
        </div>
        
        <p className="description">{description}</p>
        
    </div>
    </>
    )
    
}

export default Card;