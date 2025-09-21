import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";

// Main Hero Section
export const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(135deg, rgba(16, 84, 170, 0.85) 0%, rgba(230, 81, 0, 0.75) 100%), url('/hero-image.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  color: "white",
  overflow: "hidden",
  paddingTop: "80px", // Account for fixed nav
}));

export const HeroContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  paddingRight: 0,
  [theme.breakpoints.up("lg")]: {
    maxWidth: "650px",
    paddingRight: theme.spacing(4),
  },
}));

// Typography Components
export const MainHeadline = styled(Typography)(({ theme }) => ({
  fontSize: "2.75rem",
  fontWeight: 800,
  lineHeight: 1.1,
  marginBottom: theme.spacing(3),
  letterSpacing: "-0.02em",
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4.25rem",
    lineHeight: 1.05,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "4.75rem",
  },
}));

export const GradientText = styled(Box)(({ theme }) => ({
  background: "linear-gradient(45deg, #f57c00 0%, #ff9800 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 500,
  color: "rgba(255, 255, 255, 0.95)",
  marginBottom: theme.spacing(3),
  lineHeight: 1.4,
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  lineHeight: 1.7,
  color: "rgba(255, 255, 255, 0.85)",
  marginBottom: theme.spacing(4),
  maxWidth: "580px",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
    marginBottom: theme.spacing(5),
  },
}));

// Button Components
export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  flexDirection: "column",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(3),
    marginBottom: theme.spacing(8),
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #e65100 0%, #f57c00 100%)",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1.25),
  paddingBottom: theme.spacing(1.25),
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: "50px",
  boxShadow: "0 8px 32px rgba(230, 81, 0, 0.4)",
  textTransform: "none",
  minWidth: "auto",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    background: "linear-gradient(135deg, #bf360c 0%, #e65100 100%)",
    transform: "translateY(-2px)",
    boxShadow: "0 12px 40px rgba(230, 81, 0, 0.5)",
  },
  [theme.breakpoints.up("sm")]: {
    minWidth: "180px",
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    fontSize: "1.125rem",
  },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  borderColor: "rgba(255, 255, 255, 0.3)",
  color: "white",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1.25),
  paddingBottom: theme.spacing(1.25),
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: "50px",
  borderWidth: "2px",
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  textTransform: "none",
  minWidth: "auto",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderColor: "rgba(255, 255, 255, 0.6)",
    transform: "translateY(-2px)",
    borderWidth: "2px",
  },
  [theme.breakpoints.up("sm")]: {
    minWidth: "200px",
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    fontSize: "1.125rem",
  },
}));

// Stats Section Components
export const StatsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingLeft: 0,
  [theme.breakpoints.up("lg")]: {
    justifyContent: "flex-end",
    paddingLeft: theme.spacing(2),
  },
}));

export const StatsContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  [theme.breakpoints.up("lg")]: {
    maxWidth: "420px",
  },
}));

export const StatCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.12)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "20px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  height: "140px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "translateY(-8px) scale(1.02)",
    background: "rgba(255, 255, 255, 0.18)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
  },
  [theme.breakpoints.up("md")]: {
    height: "160px",
  },
}));

export const StatCardContent = styled(CardContent)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3),
    "&:last-child": {
      paddingBottom: theme.spacing(3),
    },
  },
}));

export const StatNumber = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  background: "linear-gradient(45deg, #f57c00 0%, #ff9800 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: theme.spacing(1),
  fontSize: "1.75rem",
  lineHeight: 1.2,
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.25rem",
  },
}));

export const StatLabel = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.9)",
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: 1.3,
  [theme.breakpoints.up("md")]: {
    fontSize: "0.9rem",
  },
}));

// Scroll Indicator Components
export const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 30,
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
  },
  [theme.breakpoints.up("md")]: {
    bottom: 40,
  },
}));

export const ScrollText = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.8)",
  marginBottom: theme.spacing(1),
  fontSize: "0.875rem",
  fontWeight: 500,
  letterSpacing: "0.5px",
}));

export const ScrollIcon = styled(Box)(({ theme }) => ({
  animation: "bounce 2s infinite",
  cursor: "pointer",
}));
