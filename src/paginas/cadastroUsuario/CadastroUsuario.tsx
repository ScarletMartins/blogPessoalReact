import { Grid, Box, Typography, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./CadastroUsuario.css";
import User from "../../models/User";
import { cadastroUsuario } from "../../service/Service";
import { toast } from "react-toastify";

function CadastroUsuario() {
  let history = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (userResult.id != 0) {
      history("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(user);
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      try {
        await cadastroUsuario("/usuarios/cadastrar", user, setUserResult);
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
        alert("Falha no servidor");
      }
    } else {
      toast.error("Dados inconsistentes. Verificar novamente", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        progress: undefined,
      });

      setUser({ ...user, senha: "" });
      setConfirmarSenha("");
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h4"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastrar
            </Typography>
            <TextField
              value={user.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              id="nome"
              variant="outlined"
              label="Nome"
              name="nome"
              fullWidth
              margin="normal"
              className="cad-shadow"
            />
            <TextField
              value={user.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              id="usuario"
              variant="outlined"
              label="Usuário (e-mail)"
              name="usuario"
              fullWidth
              margin="normal"
              className="cad-shadow"
            />
            <TextField
              value={user.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              id="senha"
              variant="outlined"
              label="Senha"
              name="senha"
              type="password"
              fullWidth
              margin="normal"
              className="cad-shadow"
            />
            <TextField
              value={confirmarSenha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(event)
              }
              id="confirmarSenha"
              variant="outlined"
              label="Confirmar Senha"
              name="confirmarSenha"
              type="password"
              fullWidth
              margin="normal"
              className="cad-shadow"
            />
            <Box marginBottom={2} marginTop={3} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button variant="contained" className="btnCancelar">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                className="btnCadastrar"
              >
                Cadastrar
              </Button>
            </Box>
          </form>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography align="center">Já tem uma conta?</Typography>
          </Box>
          <Link to="/login" className="cad-ent">
            <Typography variant="subtitle1" gutterBottom align="center">
              Entre aqui ➜
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
