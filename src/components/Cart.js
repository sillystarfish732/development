// TODO: create a component that displays a single bakery item
import { IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';


export default function Cart({cartArray, deleteCartItem}) {

    return (
        cartArray.map((itemInfo, index) => (
            <p>{itemInfo[0]}
              <IconButton color="primary" aria-label="add to megaplaylist">
                <DeleteOutline onClick={() => deleteCartItem(itemInfo, index)} />
              </IconButton> </p>
          ))
    )
}