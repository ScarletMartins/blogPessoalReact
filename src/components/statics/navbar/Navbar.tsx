import {
  alpha,
  AppBar,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Box, InputBase, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";

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
        <Toolbar variant="dense" style={{ backgroundColor: "#fff1cc" }}>
          <Box className="cabecalho">
            <Avatar src="https://imgur.com/3xqIYLH.png" style={{height: 58, width: 60, left: 10}}></Avatar>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            style={{ color: "#606c38" }}
            marginLeft={5}
          >
            <Box
              mx={1}
              className="cabecalho"
            >
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            <Box
              mx={1}
              className="cabecalho"
            >
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box
              mx={1}
              className="cabecalho"
            >
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box
              mx={1}
              className="cabecalho"
            >
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
            <Box>
              <a href="">
                <LogoutIcon
                  style={{
                    color: "#ffb703",
                    position: "absolute",
                    right: 10,
                    width: "40",
                    height: "40",
                  }}
                />
              </a>
            </Box>
            <Box>
              <Avatar
                style={{ position: "absolute", right: 60}}
                alt="Scarlet"
                src="https://github.com/ScarletMartins.png"
              />
            </Box>
            <Box>
              <Search style={{ position: "absolute", right: 210 }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
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
