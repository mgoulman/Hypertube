import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
}));

const calcImages = (images) => {
  let len = 0;
  if (images != null) {
    len = images.length;
    if (len > 4) {
      return false;
    }
  }
  return true;

}
const Picture = (props) => {

  const { fileChangedHandler, images } = props;
  const classes = useStyles();

  return (
    <Container>
      <CssBaseline />
      <Grid container justify="center">
        <div>
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={fileChangedHandler} />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <AddIcon style={{ fontSize: 70 }} />
            </IconButton>
          </label>
        </div>
      </Grid>
    </Container>
  )
}

export default Picture;