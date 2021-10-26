import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Grid } from '@mui/material'
import {ButtonGroup} from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export default function Navbar(props) {
  return (
    <Grid container spacing={2} alignItems="center" borderBottom="solid 1.4px">
      <Grid item xs={4}>
        <img
          src="https://via.placeholder.com/150x80"
          alt="logo"
          style={{ display: "block" }}
        />
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <ButtonGroup color="primary">
          <Button
            variant={props.active === "in" ? "contained" : "outlined"}
            onClick={() =>
              props.active === "in"
                ? props.setActive("none")
                : props.setActive("in")
            }
          >
            In Stock
          </Button>
          <Button
            variant={props.active === "out" ? "contained" : "outlined"}
            onClick={() =>
              props.active === "out"
                ? props.setActive("none")
                : props.setActive("out")
            }
          >
            Out of Stock
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={4}>
        <Grid container spacing={2} alignItems="center" pt={1} pb={2}>
          <Grid item xs={8}>
            <Search>
              <TextField style = {{width: "98%", height: "50px", mt:2}}
                value={props.text}
                id="outlined-basic"
                label="search"
                variant="outlined"
                inputProps={{ "aria-label": "search" }}
                onChange={(event) => props.setText(event.target.value)}
              ></TextField>
            </Search>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              onClick={() => {
                props.setText("");
                // props.setActive("none");
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}


