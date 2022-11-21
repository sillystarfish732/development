import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import { Grid, FormControl, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material';



/* ####### this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  const [totalPrice, setPrice] = useState(0)
  const addToCart = (itemName, itemPrice) => {
    setCart([...cart, itemName])
    setPrice(totalPrice + itemPrice);
  }

  return (
    <div className="App">
      <h1>My Bakery!!!</h1> {/* TODO: personalize your bakery (if you want) */}

      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <div>
            <h2>Sort by</h2>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

            <h2>Types</h2>
            <FormControl>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
              </FormGroup>
            </FormControl>
            <h2>Cart</h2>
            {cart.map((itemName, itemPrice) => (
              <p>{itemName}</p>
            ))}
            <p>Total Price: ${totalPrice}</p>
            {/* TODO: render a list of items in the cart */}
          </div>        </Grid>



        <Grid item xs={6} md={8}>
          <div className="bakeryList">
            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
              //<p>Bakery Item {index}</p> // replace with BakeryItem component

              <span style={{ width: "20vw" }}>
                <BakeryItem nameProp={item} prop2={index} priceProp={item} desciptionProp={item}
                  imageProp={item.image} updateCart={addToCart} /></span>
            ))}   </div> </Grid>
      </Grid>


    </div>
  );
}

export default App;
