import React from "react";
import { Typography, Grid, Button, TextField } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function Home() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} className="loginPage">
          <Box className="card">
            <Typography variant="h3">Login</Typography>

            <form>
              <TextField
                id="standard-basic"
                label="E-mail"
                variant="standard"
              />
              <TextField id="standard-basic" label="Senha" variant="standard" />
              <Button variant="contained" className="botao">
                Entrar
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;