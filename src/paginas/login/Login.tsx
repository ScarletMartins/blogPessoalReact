import { Button } from "@material-ui/core";
import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box padding={20}>
                        <form>
                            <Typography variant="h3" gutterBottom color='textPrimary' component='h3' align='center' className="textos">Entrar</Typography>
                            <TextField id="usuario"  variant="outlined" label='Usuário (e-mail)' name='usuario' fullWidth margin="normal"/>
                            <TextField id="senha" variant="outlined" label='Senha' name='senha' type='password' fullWidth margin="normal"/>
                            <Box marginBottom={2} textAlign='center'>
                                <Link to='/home' className="text-decorator-none">
                                    <Button type="submit" variant="contained" color="primary">Entrar</Button>
                                </Link>
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant="subtitle1" gutterBottom align="center">Ainda não tem uma conta?</Typography>
                            </Box>
                                <Typography variant="subtitle1" gutterBottom align="center" className="textos">Cadastre-se</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className='fundoLogin'></Grid>
            </Grid>
        </>
    )
}

export default Login;