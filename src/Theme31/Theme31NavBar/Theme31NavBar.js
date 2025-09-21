import React, { useState, useEffect } from "react";
import {
  Typography,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home,
  Person,
  Tv,
  Mic,
  MenuBook,
  Favorite,
  ContactMail,
} from "@mui/icons-material";
import {
  StyledAppBar,
  StyledToolbar,
  Logo,
  NavLinks,
  NavLink,
  MobileDrawer,
  DrawerHeader,
  DrawerTitle,
  CloseButton,
  MobileNavList,
  MobileNavItem,
  MobileListItemButton,
  MobileIcon,
  MobileListText,
  CTAButton,
  CTAButtonNav,
  CTAButtonContainer,
  MenuIconButton,
  StyledDrawer,
} from "./styles";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "About", href: "#about", icon: Person },
    { label: "Media", href: "#media", icon: Tv },
    { label: "Speaking", href: "#speaking", icon: Mic },
    { label: "Books", href: "#books", icon: MenuBook },
    { label: "Impact", href: "#impact", icon: Favorite },
    { label: "Contact", href: "#contact", icon: ContactMail },
  ];

  const mobileDrawer = (
    <MobileDrawer>
      <DrawerHeader>
        <DrawerTitle variant="h6">Gopinath</DrawerTitle>
        <CloseButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </CloseButton>
      </DrawerHeader>
      <MobileNavList>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <MobileNavItem key={item.label}>
              <MobileListItemButton onClick={() => handleNavClick(item.href)}>
                <MobileIcon>
                  <Icon />
                </MobileIcon>
                <MobileListText>
                  <ListItemText primary={item.label} />
                </MobileListText>
              </MobileListItemButton>
            </MobileNavItem>
          );
        })}
        <CTAButtonContainer>
          <CTAButton
            variant="contained"
            fullWidth
            onClick={() => handleNavClick("#contact")}
          >
            Get in Touch
          </CTAButton>
        </CTAButtonContainer>
      </MobileNavList>
    </MobileDrawer>
  );

  return (
    <>
      <StyledAppBar position="fixed" scrolled={scrolled}>
        <Container maxWidth="xl">
          <StyledToolbar>
            <Logo
              variant="h5"
              component="div"
              onClick={() => handleNavClick("#hero")}
              scrolled={scrolled}
            >
              Gopinath
            </Logo>

            {!isMobile ? (
              <NavLinks>
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    scrolled={scrolled}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <CTAButtonNav
                  variant="contained"
                  onClick={() => handleNavClick("#contact")}
                >
                  Get in Touch
                </CTAButtonNav>
              </NavLinks>
            ) : (
              <MenuIconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                scrolled={scrolled}
              >
                <MenuIcon />
              </MenuIconButton>
            )}
          </StyledToolbar>
        </Container>
      </StyledAppBar>

      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {mobileDrawer}
      </StyledDrawer>
    </>
  );
};

export default Navigation;
