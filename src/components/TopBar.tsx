import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import { MouseEvent } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useGetAllCategory from "../hooks/useCategory";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/GlobalConst";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const TopBar = (): JSX.Element => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [categoryAnchor, setcategoryAnchor] = useState<null | HTMLElement>(
    null
  );
  const [writeAnchor, setWriteAnchor] = useState<null | HTMLElement>(null);
  const [category] = useGetAllCategory();

  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickProfile = (value: string) => {
    setAnchorEl(null);
    if (value === "mybooks") navigate(ROUTES.myBooks);
  };

  // Category button handlers
  const openCategory = Boolean(categoryAnchor);
  const handleClickCategory = (event: MouseEvent<HTMLElement>) => {
    setcategoryAnchor(event.currentTarget);
  };
  const handleCloseCategory = () => {
    setcategoryAnchor(null);
  };

  // Write button handlers
  const openWrite = Boolean(writeAnchor);
  const handleClickWrite = (event: MouseEvent<HTMLElement>) => {
    setWriteAnchor(event.currentTarget);
  };
  const handleCloseWrite = () => {
    setWriteAnchor(null);
    navigate(ROUTES.newBook);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "rgb(31 41 55)" }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              E-Library
            </Typography>
            <Button
              id="fade-button"
              aria-controls={openCategory ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openCategory ? "true" : undefined}
              onClick={handleClickCategory}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                fontSize: "1em",
                paddingLeft: "2em",
                paddingTop: "10px",
                color: "white",
              }}
            >
              Category
            </Button>
            <Search sx={{ flexGrow: 1 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Button
              id="write-menu"
              aria-controls={openWrite ? "write-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openWrite ? "true" : undefined}
              onClick={handleClickWrite}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                fontSize: "1em",
                paddingLeft: "1em",
                paddingTop: "10px",
                color: "white",
              }}
            >
              Write
            </Button>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleClickProfile("mybooks")}>
          My Books
        </MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      {/* Category Button */}
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={categoryAnchor}
        open={openCategory}
        onClose={handleCloseCategory}
        TransitionComponent={Fade}
      >
        {category.map((items) => (
          <MenuItem onClick={handleCloseCategory} key={items.id}>
            {items.name}
          </MenuItem>
        ))}
      </Menu>
      {/* Write Button */}
      <Menu
        id="write-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={writeAnchor}
        open={openWrite}
        onClose={handleCloseWrite}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleCloseWrite}>Create a new story</MenuItem>
      </Menu>
    </>
  );
};

export default TopBar;
