import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, ButtonGroup } from '@mui/material'

export default function Footer() {
  return (
    <Grid container p={2} bgcolor={"darkgray"}>
      <Grid item xs={8}></Grid>
      <Grid item xs={4}>
        <Grid container justifyContent="end">
          <ButtonGroup
            variant="text"
            aria-label="outlined primary button group"
          >
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <Button variant="text">twitter</Button>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <Button variant="text">facebook</Button>
            </a>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
}

