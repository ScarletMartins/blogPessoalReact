import { alpha, AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box, InputBase, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="toolbar">
          <Box className="cabecalho">
            <img
              src="https://imgur.com/JrQAbe2.png"
              alt=""
              style={{ height: 30, width: 100}}
            />
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            style={{ color: "#fff" }}
            marginLeft={5}
          >
            <Box mx={1} className="cabecalho">
              <Link to="/home" className="text-decorator-none">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Link>
            </Box>
            <Box mx={1} className="cabecalho">
              <Link to="/posts" className="text-decorator-none">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Link>
            </Box>
            <Box mx={1} className="cabecalho">
              <Link to="/temas" className="text-decorator-none">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Link>
            </Box>
            <Box mx={1} className="cabecalho">
              <Typography
                variant="h6"
                color="inherit"
                className="text-decorator-none"
              >
                Cadastrar Tema
              </Typography>
            </Box>
            <Link to="/login" className="text-decorator-none">
              <Box>
                <a href="">
                  <LogoutIcon
                    style={{
                      color: "#fff",
                      position: "absolute",
                      right: 10,
                      width: "40",
                      height: "40",
                    }}
                  />
                </a>
              </Box>
            </Link>

            <Box>
              <Link to='/home'>
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
                  color: "#fff",
                  backgroundColor: "#5A4F58",
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  style={{ fontWeight: "bold" }}
                />
              </Search>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
