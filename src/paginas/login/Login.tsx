import { Button } from "@material-ui/core";
import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../service/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";

function Login() {

    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: '',
            token: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>){
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }
        
            useEffect(() => {
                if (token !== '') {
                    history('/home');
                }
            }, [token]);

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)

                alert('Usuário logado com sucesso!');
            }catch(error){
                alert('Usuário não encontrado. Tente novamente!');
            }
        }

    return (
        <>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Box padding={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant="h3" gutterBottom color='textPrimary' component='h3' align='center' className="textos">Entrar</Typography>
                            <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel} id="usuario"  variant="outlined" label='Usuário (e-mail)' name='usuario' fullWidth margin="normal"/>
                            <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel} id="senha" variant="outlined" label='Senha' name='senha' type='password' fullWidth margin="normal"/>
                            <Box marginBottom={2} textAlign='center'>
                                    <Button type="submit" variant="contained" color="primary">Entrar</Button> 
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant="subtitle1" gutterBottom align="center">Ainda não tem uma conta?</Typography>
                            </Box>
                                 <Link to='/cadastrousuario'>
                                    <Typography variant="subtitle1" gutterBottom align="center" className="textos">Cadastre-se</Typography>
                                </Link>   
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className='fundoLogin'></Grid>
            </Grid>
        </>
    )
}

export default Login;