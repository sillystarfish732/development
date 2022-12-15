import "./App.css";
import { useState } from "react";
import albumsData from "./assets/album-data.json";
import AlbumsItem from "./components/AlbumsItem";
import Cart from "./components/Cart";
import {
  Grid, FormControl, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox} from '@mui/material';
/* ####### this makes the image URLs work ####### */
albumsData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */


albumsData.sort((a, b) => a.name > b.name)
function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  const [totalPrice, setCartPrice] = useState(0)
  const addToCart = (itemName, itemPrice) => {
    setCart([...cart, [itemName, itemPrice]])
    setCartPrice(totalPrice + itemPrice);
  }
  const [newFilter, setNewFilter] = useState(false);
  const [obscureFilter, setObscureFilter] = useState(false);
  const [sortingType, changeSort] = useState("alphaAlbum");
  const [sortedList, setSortedList] = useState(albumsData);
  const sortList = sortType => {
    if (sortType === "alphaAlbum") {
      //console.log("al")
      setSortedList(albumsData.sort((a, b) => a.name > b.name?1:-1))
      changeSort("alphaAlbum")
      //console.log(sortedList)
    }
    if (sortType === "zAlphaAlbum") {
      setSortedList(albumsData.sort((a, b) => a.name < b.name?1:-1))
      changeSort("zAlphaAlbum")
    }

    if (sortType === "alphaArtist") {
      //console.log("alphaArtist")
      setSortedList(albumsData.sort((a, b) => a.artist > b.artist?1:-1))
      changeSort("alphaArtist")
      //console.log(sortedList)
    }

    if (sortType === "zAlphaArtist") {
      setSortedList(albumsData.sort((a, b) => a.artist < b.artist?1:-1))
      changeSort("zAlphaArtist")
    }
  }


  const deleteItem = (itemInfo, index) => {
    setCart(cart.filter((item, i) => {
      return i !== index;
    }))
    setCartPrice(totalPrice-itemInfo[1])
  }

  const selectFilterType = eventKey => {
    if (eventKey === "obs") {
      setObscureFilter(!obscureFilter)
    }
    if (eventKey === "newAl") {
      setNewFilter(!newFilter)
    }
    ;
  }

  return (
    <div className="App">
      <h1>MegaPlaylist Maker</h1> {/* TODO: personalize your bakery (if you want) */}

      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <div>
            <h2>Sort by</h2>
            <FormControl>
              <RadioGroup
                aria-labelledby="radio-buttons-sorting"
                defaultValue="alphabeticallyAlbum"
                name="radio-buttons-group"
              >
                <FormControlLabel value="alphabeticallyAlbum" control={<Radio />} label="Album Title A-Z"
                  onClick={() => sortList("alphaAlbum")}
                />
                <FormControlLabel value="zAlphabeticallyAlbum" control={<Radio />} label="Album Title Z-A"
                  onClick={() => sortList("zAlphaAlbum")}
                />
                <FormControlLabel value="alphabeticallyArtist" control={<Radio />} label="Artist A-Z"
                  onClick={() => sortList("alphaArtist")}
                />
                <FormControlLabel value="zAlphabeticallyArist" control={<Radio />} label="Artist Z-A"
                  onClick={() =>  sortList("zAlphaArtist")}
                />
              </RadioGroup>
            </FormControl>

            <h2>Filter</h2>
            <FormControl>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Obscure Artist"
                  onChange={() => selectFilterType("obs")}
                />
                <FormControlLabel control={<Checkbox />} label="New Albums"
                  onChange={() => selectFilterType("newAl")}
                />
              </FormGroup>
            </FormControl>


            <h2>My MegaPlaylist</h2>
            <Cart cartArray={cart} deleteCartItem={deleteItem}/>

            <p>playlist length: {totalPrice} tracks long</p>
           </div> </Grid>

        <Grid item xs={6} md={9}>
          <div className="bakeryList">
            {sortedList.map(
              (item, index  
              ) => (newFilter && obscureFilter && item.obscure === "obscure artist" && item.nut === "released in 2022") ||
                (newFilter && !obscureFilter && item.nut === "released in 2022") ||
                (obscureFilter && !newFilter && item.obscure === "obscure artist") ||
                (!newFilter && !obscureFilter) ? (
                  <span style={{ width: "20vw", fontFamily: "'Manrope', sans-serif,"  }}>
                    <AlbumsItem nameProp={item} prop2={index} tracksProp={item} artistProp={item}
                      imageProp={item.image} updateCart={addToCart} obscrureProp={item} newProp={item} /></span>
                ) : (
                  null
                )

            )}</div> </Grid>

      </Grid>


    </div>
  );
}


export default App;
