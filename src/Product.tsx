import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import {Link} from 'react-router-dom';

type Props = {
  upc: string;
  name: string;
  price: number;
  availability: number;
};

const ProductCard = (props: Props) => {
  return (
    <Grid>
      <Card>
        <Link
          to={`/dettaglio/${props.upc}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardMedia component="img" image="https://via.placeholder.com/350" />
          <CardContent>
            <Typography variant="h5" align="left" component="div">
              {props.name}
            </Typography>
            <Typography color="text.secondary" align="left">
              $ {props.price}
            </Typography>
            <Typography color="text.secondary" align="left">
              {props.availability > 0 ? (
                <Chip label="In stock" style={{ marginTop: "12px" }} />
              ) : (
                <Chip label="Out of stock" />
              )}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};

export default ProductCard;