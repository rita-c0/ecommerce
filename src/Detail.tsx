import * as React from 'react';
import { stockData } from './data';
import Product from './Product';
import Grid from '@mui/material/Grid';
import {useParams} from 'react-router-dom'

type Props = {
  upc: number, 
  name: string,
  price: number,
  availability: number,
  // details: boolean,
}

const ProductCard = (props:Props) => {
    const {id} = useParams<{id:string}>()
    const prodotto: any = stockData.find((x) => x.UPC === id);
    console.log(id)
    return (
      <Grid item xs={4} sm={4} md={3}>
      <Product
        upc={prodotto.UPC}
        name={prodotto.name}
        price={prodotto.price.current.value}
        availability={prodotto.availability.stock}
        // details={true}
      />
      </Grid>

    );
  }

  export default ProductCard;