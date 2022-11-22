import { alpha, AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box, InputBase, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import {toast} from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>;


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#ffb703", 0.3),
  color: alpha("#283618", 1),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    toast('Usuário deslogado', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: 'light',
      progress: undefined
    });
    navigate("/login");
  }

  var navbarComponent;

  if(token != ''){
    navbarComponent = <AppBar position="static" className='shadow'>
    <Toolbar variant="dense" className="toolbar">

      <Box
        display="flex"
        justifyContent="center"
        style={{ color: "#fff" }}
        marginLeft={5}
      >
        <Link to="/home" className="text-decorator-none">
          <Box mx={1} className="cabecalho">
            <Typography variant="h6" color="inherit">
              Home
            </Typography>
          </Box>
        </Link>
        <Link to="/posts" className="text-decorator-none">
          <Box mx={1} className="cabecalho">
            <Typography variant="h6" color="inherit">
              Postagens
            </Typography>
          </Box>
        </Link>
        <Link to="/temas" className="text-decorator-none">
          <Box mx={1} className="cabecalho">
            <Typography variant="h6" color="inherit">
              Temas
            </Typography>
          </Box>
        </Link>
        <Link to="/formularioTema" className="text-decorator-none">
          <Box mx={1} className="cabecalho">
            <Typography variant="h6" color="inherit">
              Novo tema
            </Typography>
          </Box>
        </Link>

        <Box onClick={goLogout}>
          <a href="">
            <LogoutIcon
              style={{
                color: "#000",
                position: "absolute",
                right: 10,
                width: "40",
                height: "40",
              }}
            />
          </a>
        </Box>

        <Box>
          <Link to="/perfil">
            <Avatar
              style={{ position: "absolute", right: 60 }}
              alt="Scarlet"
              src="https://github.com/ScarletMartins.png"
            />
          </Link>
        </Box>
        <Box>
          <Search
            style={{
              position: "absolute",
              right: 210,
              color: "#000",
              backgroundColor: "#fff",
              border: "1px solid #e10096",
              borderRadius: '15px'
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ "aria-label": "search" }}
              style={{ fontWeight: "bold" }}
            />
          </Search>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
