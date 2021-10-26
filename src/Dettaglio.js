import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { stockData } from './data';
import Prodotto from './Prodotto';
import Grid from '@mui/material/Grid';





//   function verifica(stock) {
//   if (stock > 0) 
//   {
//   alert ("Prodotto disponibile")      
//   }
//   else  alert ("Prodotto non disponibile")
// }

// function scopri(stock) {
//     alert("Quantità disponibile " + stock)
// }

export default function MediaCard(props) {
    const prodotto = stockData.find((x) => x.UPC === props.match.params.id);

    console.log(props.match.params.id)
    return (
      <Grid item xs={4} sm={4} md={3}>
      <Prodotto
        upc={prodotto.UPC}
        name={prodotto.name}
        price={prodotto.price.current.value}
        availability={prodotto.availability.stock}
        details={true}
      />
      </Grid>

    );
  }