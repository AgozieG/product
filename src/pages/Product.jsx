


import Card from '../components/card';
import './product.css';

function Product() {

    
    return(
        <>
        <div className='container'>
            <Card 
            image ="src\picture\bag.webp"
            title="Bag"
            description="this is a bag"
            />
            <Card 
            image ="src\picture\shoe.webp"
            title="Shoe"
            description="this is a shoe"
            />
            <Card 
            image ="src\picture\clothes.webp"
            title="Clothes"
            description="this is a cloth"
            />
            <Card 
            image ="src\picture\phone.webp"
            title="Phone"
            description="this is a phone"
            />
        </div>
        </>
    )
}

export default Product;