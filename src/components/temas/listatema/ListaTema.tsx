import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import { Box } from '@mui/material';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../service/Service';

function ListaTema() {

  //const para armazenar temas do backend
  const [temas, setTemas] = useState<Tema[]>([])

  //const para acessar o token
  const [token, setToken] = useLocalStorage('token');

  //solicita os temas do backend
  async function buscaTema() {
    await busca('/temas', setTemas, {
      headers: {
        Authorization: token
      }
    })
  }

  //roda assim que a tela for aberta pelo user
  useEffect(() => {
    buscaTema()
  }, [])

  return (
    <>
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              Minha descrição
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}


export default ListaTema;