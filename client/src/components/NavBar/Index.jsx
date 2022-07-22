import React, { useState, useEffect } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import Model from "./Model"

const pagesIfVisitor = ["Learn more", "Log in", "Sign up"]
const pagesIfLog = ["Learn more", "My reservations"]
const settingsIfLog = ["Profile", "Account", "Dashboard", "Logout"]

const NavBarComponent = () => {
  const [isUser, setIsUser] = useState(false)
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const user = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    checkIfUserLogIn()
  }, [])

  const checkIfUserLogIn = () => {
    // checking local storage if user is logged in
    if (localStorage.getItem("user")) {
      console.log("user is logged in", JSON.parse(localStorage.getItem("user")))
      setIsUser(true)
    }
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogOut = () => {
    localStorage.removeItem("user")
    setIsUser(false)
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Veículo
          </Typography>
          {/* Menu when using small devices */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {isUser
                ? pagesIfLog.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))
                : pagesIfVisitor.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
          {/* ends of menu to small devices */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Veículo
          </Typography>
          {/* Menu for desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              marginRight: 5,
            }}
          >
            {isUser
              ? pagesIfLog.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ ml: 4, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))
              : pagesIfVisitor.map((page) => {
                  if (page === "Log in") {
                    return (
                      // return a button to log in with model
                      <Button
                        key={page}
                        sx={{ ml: 4, color: "white", display: "block" }}
                      >
                        <Model pageName={page} />
                      </Button>
                    )
                  }
                  return (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ ml: 4, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  )
                })}
          </Box>
          {/* ends of menu */}
          {/* login profile */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {isUser ? (
                <Avatar alt={user.name} src={user.picture} />
              ) : (
                <PersonOutlineIcon />
              )}
            </IconButton>
            {isUser ? (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {isUser &&
                  settingsIfLog.map((setting) => {
                    if (setting === "Logout") {
                      return (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                          <Typography onClick={handleLogOut} textAlign="center">
                            {setting}
                          </Typography>
                        </MenuItem>
                      )
                    }
                    return (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    )
                  })}
              </Menu>
            ) : (
              <Menu sx={{ mt: "45px" }}></Menu>
            )}
          </Box>
          {/* ends of login profile */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBarComponent