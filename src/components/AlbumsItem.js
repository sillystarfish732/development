// TODO: create a component that displays a single bakery item
import { Button} from '@mui/material';
//import { AddShoppingCart } from '@mui/icons-material';


export default function AlbumsItem({ nameProp, tracksProp, artistProp, prop2,
    imageProp, updateCart, obscrureProp, newProp }) {

    return (
        <div style={{ width: "20vw" }}>
            <img style={{ width: '18vw', marginTop: '3rem' }} src={imageProp}
                alt={nameProp.name} /> <br></br>
            {nameProp.name} <br></br> 
            by {artistProp.artist}<br></br> 
            {tracksProp.tracks} tracks <br></br>
            {obscrureProp.obscure}, {newProp.nut}
            <br></br><br></br>
            <Button variant="outlined" onClick={() => updateCart(nameProp.name,
                tracksProp.tracks)}>Add to Playlist</Button>

        </div>
    )
}