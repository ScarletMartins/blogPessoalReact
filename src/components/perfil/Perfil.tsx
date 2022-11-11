import { Avatar, Container } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import User from "../../models/User";
import { buscaId } from "../../service/Service";
import { TokenState } from "../../store/tokens/tokensReducer";

function Perfil() {
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUsuario, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getUserById(+userId);
  }, []);

  return (
    <>
      <Container>
        <Grid container marginTop={5}>
          <Grid xs={3} alignItems="center" justifyContent="center">
            <Avatar src={usuario.foto} alt="" />
            <Typography variant="h5" align="center">
              {usuario.nome}
            </Typography>
          </Grid>
          <Grid xs={9} justifyContent="center">
            <Typography variant="h4" align="center">
              Postagens de {usuario.nome}
            </Typography>
            Total de postagens feitas: {usuario.postagem?.length}
            {usuario.postagem?.map((post) => (
              <p>{post.titulo}</p>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Perfil;
