import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#fff1cc", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "#606c38" }}>Me siga nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/ScarletMartins" target="_blank">
                                <GitHubIcon style={{ fontSize: 60, color: "#ffb703" }} />
                            </a>
                            <a href="https://www.instagram.com/_scarletmartins/?r=nametag" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "#ffb703" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/scarletmartins/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#ffb703" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#ffb703", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a style={{textDecoration: "none"}} target="_blank" href="https://github.com/ScarletMartins">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Scarlet Martins</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;