import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

if(token != '') {
  footerComponent = <Grid alignItems="center" item xs={12} className="redes-bg">
  <Box>
    <Box
      paddingTop={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <h6 className="chamada">Me siga nas redes sociais </h6>
    </Box>
    <Box display="flex" alignItems="center" justifyContent="center">
      <a href="https://github.com/ScarletMartins" target="_blank">
        <GitHubIcon className="redes" />
      </a>
      <a
        href="https://www.instagram.com/_scarletmartins/?r=nametag"
        target="_blank"
      >
        <InstagramIcon className="redes" />
      </a>
      <a
        href="https://www.linkedin.com/in/scarletmartins/"
        target="_blank"
      >
        <LinkedInIcon className="redes" />
      </a>
    </Box>
  </Box>
  <Box className="box2">
    <Box paddingTop={1}>
      <Typography
        variant="subtitle2"
        align="center"
        gutterBottom
        className="texto"
      >
        © 2022 Copyright:
      </Typography>
    </Box>
    <Box>
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        href="https://github.com/ScarletMartins"
      >
        <Typography
          variant="subtitle2"
          gutterBottom
          className="texto"
          align="center"
        >
          Scarlet Martins
        </Typography>
      </a>
    </Box>
  </Box>
</Grid>
}

  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;
