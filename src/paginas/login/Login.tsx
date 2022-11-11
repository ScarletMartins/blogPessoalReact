import { Button } from "@material-ui/core";
import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../../service/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addId, addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
  let history = useNavigate();

  //novo metodo de login usando redux
  const dispatch = useDispatch();

  const [token, setToken] = useState("");

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    token: "",
  });

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      history("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setRespUserLogin);

      toast("Usuário cadastrado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        progress: undefined,
      });
    } catch (error) {
      toast("Usuário não encontrado. Verifique novamente", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        progress: undefined,
      });
    }
  }

  useEffect(() => {
    if(respUserLogin.token !== ''){
        dispatch(addToken(respUserLogin.token))
        dispatch(addId(respUserLogin.id.toString()))
        history('/home');
    }
  }, [respUserLogin.token])

  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Box padding={20}>
            <form onSubmit={onSubmit}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="textos"
              >
                Entrar
              </Typography>
              <TextField
                value={userLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="usuario"
                variant="outlined"
                label="Usuário (e-mail)"
                name="usuario"
                fullWidth
                margin="normal"
              />
              <TextField
                value={userLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                variant="outlined"
                label="Senha"
                name="senha"
                type="password"
                fullWidth
                margin="normal"
              />
              <Box marginBottom={2} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#e10096", fontWeight: "bold" }}
                >
                  Entrar
                </Button>
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Ainda não tem uma conta?
                </Typography>
              </Box>
              <Link to="/cadastrousuario" className="cad-link">
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  className="textos"
                >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} className="fundoLogin"></Grid>
      </Grid>
    </>
  );
}

export default Login;
