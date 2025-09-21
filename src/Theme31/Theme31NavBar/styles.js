import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  Drawer,
} from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
  backdropFilter: scrolled ? "blur(20px)" : "none",
  boxShadow: scrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none",
  border: scrolled ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  zIndex: theme.zIndex.appBar + 1,
  "& .MuiToolbar-root": {
    minHeight: scrolled ? "70px" : "80px",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },
}));

export const NavContainer = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(0, 3),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 2),
  },
}));

export const Logo = styled(Typography)(({ theme, scrolled }) => ({
  fontWeight: 900,
  fontSize: "1.75rem",
  letterSpacing: "-0.01em",
  background: scrolled
    ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #1565c0 100%)`
    : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const NavLink = styled(Button)(({ theme, scrolled }) => ({
  color: scrolled ? theme.palette.text.primary : "white",
  fontWeight: 500,
  fontSize: "0.95rem",
  padding: theme.spacing(1, 2),
  borderRadius: "12px",
  textTransform: "none",
  position: "relative",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    background: scrolled
      ? "rgba(25, 118, 210, 0.08)"
      : "rgba(255, 255, 255, 0.1)",
    color: scrolled ? theme.palette.primary.main : "white",
    transform: "translateY(-1px)",
  },
  "&:before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: 0,
    height: "2px",
    background: scrolled ? theme.palette.primary.main : "white",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "translateX(-50%)",
  },
  "&:hover:before": {
    width: "80%",
  },
}));

export const MobileDrawer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #1565c0 100%)`,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
    pointerEvents: "none",
  },
}));

export const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 3),
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  position: "relative",
  zIndex: 1,
}));

export const MobileNavList = styled(List)(({ theme }) => ({
  padding: theme.spacing(3, 0),
  position: "relative",
  zIndex: 1,
}));

export const MobileNavItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
}));

export const CTAButton = styled(Button)(({ theme }) => ({
  borderRadius: "999px",
  padding: theme.spacing(1, 3),
  fontSize: "0.95rem",
  fontWeight: 600,
  textTransform: "none",
  background: `linear-gradient(135deg, #f97316 0%, #ea580c 100%)`,
  color: "white",
  boxShadow: "0 4px 20px rgba(249, 115, 22, 0.3)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    background: `linear-gradient(135deg, #ea580c 0%, #dc2626 100%)`,
    transform: "translateY(-2px)",
    boxShadow: "0 8px 30px rgba(249, 115, 22, 0.4)",
  },
}));

export const CTAButtonNav = styled(Button)(({ theme }) => ({
  borderRadius: "999px",
  padding: theme.spacing(1, 3),
  fontSize: "0.95rem",
  fontWeight: 600,
  textTransform: "none",
  background: `linear-gradient(135deg, #f97316 0%, #ea580c 100%)`,
  color: "white",
  boxShadow: "0 4px 20px rgba(249, 115, 22, 0.3)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  marginLeft: theme.spacing(2),
  "&:hover": {
    background: `linear-gradient(135deg, #ea580c 0%, #dc2626 100%)`,
    transform: "translateY(-2px)",
    boxShadow: "0 8px 30px rgba(249, 115, 22, 0.4)",
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

export const DrawerTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 700,
  color: "white",
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: "white",
}));

export const MobileListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: "12px",
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
  },
}));

export const MobileIcon = styled(Box)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.7)",
  marginRight: theme.spacing(2),
  display: "flex",
  alignItems: "center",
}));

export const MobileListText = styled(Box)(({ theme }) => ({
  "& .MuiTypography-root": {
    color: "white",
    fontWeight: 500,
  },
}));

export const CTAButtonContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const MenuIconButton = styled(IconButton)(({ theme, scrolled }) => ({
  color: scrolled ? theme.palette.primary.main : "white",
  "&:hover": {
    background: scrolled
      ? "rgba(25, 118, 210, 0.1)"
      : "rgba(255, 255, 255, 0.1)",
  },
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  display: { xs: "block", lg: "none" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 280,
    background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
    border: "none",
  },
}));
