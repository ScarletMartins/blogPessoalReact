import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPostagem.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import User from '../../../models/User';

function CadastroPostagem() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    const [temas, setTemas] = useState<Tema[]>([]);
  
    useEffect(() => {
      if (token === "") {
        toast.error('Você precisa estar logado', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'light',
            progress: undefined
          });
        navigate("/login");
      }
    }, [token]);

    const [tema,setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null,
        data: '',
        usuario: null
    });

    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

    const [usuario, setUsuario] = useState<User>({
        id: +userId,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
            usuario: usuario
        })
    }, [tema])

    useEffect(() => {
        buscaTema()
        if(id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function buscaTema() {
        await busca('/temas', setTemas, {
            headers: {
                Authorization: token
            }
        })
    }

    useEffect(() => {
        buscaTema()
      }, [temas.length])

    async function findByIdPostagem(id: string) {
        await buscaId(`/postagens/${id}`, setPostagem, {
            headers: {
                Authorization: token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if(id !== undefined) {
            put('/postagens', postagem, setPostagem, {
                headers: {
                    Authorization: token
                }
            })
            toast('Postagem atualizada com sucesso', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'light',
                progress: undefined
              });
        } else {
            post('/postagens', postagem, setPostagem, {
                headers: {
                    Authorization: token
                }
            })    
            toast('Postagem cadastrada com sucesso', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'light',
                progress: undefined
              });
        back()
    }

    function back() {
        navigate('/posts')
    }
}
 
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastro de postagem</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                Authorization: token
                            }
                        })}>
                            {
                                temas.map(tema => (
                                    <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                                ))
                            }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    
                        <Button type="submit" variant="contained" disabled={tema.id === 0} className='post-botton'>
                            Publicar
                        </Button>
                    
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPostagem;