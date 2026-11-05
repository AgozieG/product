
import bagImage from "../picture/bag.webp";
import shoeImage from "../picture/shoe.webp";
import clothesImage from "../picture/clothes.webp";
import phoneImage from "../picture/phone.webp";
import Card from '../components/card';
import './product.css';

function Product() {
    return(
        <>
        <div className='container'>
            <Card 
            image={bagImage}
            title="Bag"
            description="this is a bag"
            />
            <Card 
            image={shoeImage}
            title="Shoe"
            description="this is a shoe"
            />
            <Card 
            image={clothesImage}
            title="Clothes"
            description="this is a cloth"
            />
            <Card 
            image={phoneImage}
            title="Phone"
            description="this is a phone"
            />
        </div>
        </>
    )
}

export default Product;