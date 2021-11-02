import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { useHistory } from 'react-router-dom';
import { CardActionArea } from '@mui/material';

type Props = {
  upc: string, 
  name: string,
  price: number,
  availability: number,
}


const ProductCard = (props:Props) => {
  console.log(props);
  var history = useHistory();
  return (
    <Grid>
      <Card>
        <CardActionArea onClick={() => history.push(`/dettaglio/${props.upc}`)}>
          <CardMedia component="img" image="https://via.placeholder.com/350" />
          <CardContent>
            <Typography variant="h5" align="left" component="div">
              {props.name}
            </Typography>
            <Typography color="text.secondary" align="left">$ {props.price}</Typography>
            <Typography color="text.secondary" align="left">
              {props.availability > 0 ? (
                <Chip label="In stock" style={{ marginTop: "12px" }} />
              ) : (
                <Chip label="Out of stock" />
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ProductCard;