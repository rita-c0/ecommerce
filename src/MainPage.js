import * as React from 'react';
import Grid from '@mui/material/Grid';
import Prodotto from './Prodotto';
import {stockData} from './data';
import Navbar from './Navbar';
import { useState } from 'react';
import Footer from './Footer';



export default function ResponsiveGrid() {

  const [text, setText] = useState("");

  const [active, setActive] = useState("none");

  const searchFilter = (prod) => {
    return prod.name.toLowerCase().includes(text.toLowerCase());
  };

  const activeFilter = (prod) => {
    switch (active) {
      case "in":
        return prod.availability.stock > 0;
      case "out":
        return prod.availability.stock <= 0;
      default:
        return true;
    }
  };

  return (
    <React.Fragment>
      <Grid container direction="column" minHeight="100vh">
        <Navbar
          text={text}
          setText={setText}
          active={active}
          setActive={setActive}
        />

        <Grid
          container
          spacing={2}
          flex={1}
          p={2}
          direction="row"
          justifyContent="start"
        >
          {stockData
            .filter(activeFilter)
            .filter(searchFilter)
            .map((e, index) => (
              <Grid item xs={4} sm={4} md={3} key={index}>
                <Prodotto
                  upc={e.UPC}
                  name={e.name}
                  price={e.price.current.value}
                  availability={e.availability.stock}
                  details={false}
                />
              </Grid>
            ))}
        </Grid>
        <Footer/>
      </Grid>
    </React.Fragment>
  );
}
