// TODO: create a component that displays a single bakery item
import { Button, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';


export default function BakeryItem({ nameProp, priceProp, desciptionProp, prop2,
    imageProp, updateCart }) {

    return (
        <div style={{ width: "10vw" }}>
            <img style={{ width: '10vw', marginTop: '3rem' }} src={imageProp}
                alt={nameProp.name} />
            <br></br>
            {prop2} {nameProp.name}<br></br> {priceProp.price} <br></br>
            {desciptionProp.description}<br></br>
            <Button variant="outlined" onClick={() => updateCart(nameProp.name, priceProp.price)}>Add to Cart</Button>


            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCart onClick={() => updateCart(nameProp.name, priceProp.price)} />
            </IconButton></div>




    )
}