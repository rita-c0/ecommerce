import * as React from 'react';
import Grid from '@mui/material/Grid';
import Prodotto from './Prodotto';
import {stockData} from './data';
import Navbar from './Navbar';
import { useState } from 'react';
import Footer from './Footer';



export default function ResponsiveGrid() {
  // STATE

  const [text, setText] = useState("");

  const [active, setActive] = useState("none");

  
  // const [inStock, setInStock] = useState(false);

  // const [outStock, setOutStock] = useState(false);

  // FUNZIONI PER LA GESTIONE TRA PARENT E CHILD

  //   const gestioneTestoScritto = (testoInserito) => {
  //     console.log(testoInserito);
  //     setText(testoInserito);
  //  };

  //  const gestioneInStock = (booleanoInStock) => {
  //     console.log(booleanoInStock);
  //     setInStock(booleanoInStock);
  //     setOutStock(false);
  //  };

  //  const gestioneOutStock = (booleanoOutStock) => {
  //   console.log(booleanoOutStock);
  //   setOutStock(booleanoOutStock);
  //   setInStock(false);
  // };

  // const gestioneReset = () => {
  //   setText('');
  //   setInStock(false);
  //   setOutStock(false);
  // }

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

  //  let filteredArray = [];

  //     stockData.forEach(el => {
  //       if(inStock == false && outStock == false) {
  //         if(el.name.toLowerCase().includes(text)) {
  //           filteredArray.push(el);
  //         }
  //       }
  //       else if(inStock == true) {
  //         if(el.name.toLowerCase().includes(text) && el.availability.stock>0) {
  //           filteredArray.push(el);
  //         }
  //       }
  //       else if(outStock == true) {
  //         if(el.name.toLowerCase().includes(text) && el.availability.stock==0) {
  //           filteredArray.push(el);
  //         }
  //       }
  //   });

  return (
    <React.Fragment>
      <Grid container direction="column" minHeight="100vh">
        <Navbar
          // testoScritto={gestioneTestoScritto}
          // inStockProds={gestioneInStock}
          // outStockProds={gestioneOutStock}
          // reset={gestioneReset}
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
