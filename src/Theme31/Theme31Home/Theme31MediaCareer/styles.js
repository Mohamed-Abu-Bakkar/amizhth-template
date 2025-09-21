import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";

// Main Section
export const MediaCareerSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(16),
  background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
  },
}));

export const MediaCareerContainer = styled(Container)(({ theme }) => ({
  // Using Container with maxWidth="xl"
}));

// Section Header Components
export const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(12),
  },
}));

export const SectionBadge = styled(Chip)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: "rgba(230, 81, 0, 0.08)",
  color: "#e65100",
  fontWeight: 600,
  fontSize: "0.95rem",
  border: "1px solid rgba(230, 81, 0, 0.15)",
  borderRadius: "25px",
}));

export const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: "#1a1a1a",
  fontSize: "2.5rem",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  maxWidth: "900px",
  margin: "0 auto",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.75rem",
  },
}));

export const GradientText = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #e65100 0%, #f57c00 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline",
}));

export const SectionDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  lineHeight: 1.7,
  color: "#555",
  maxWidth: "700px",
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
}));

// Shows Grid Components
export const ShowsContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(12),
  },
}));

export const ShowCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "24px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(0,0,0,0.05)",
  background: "linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)",
  overflow: "hidden",
  position: "relative",
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: "0 20px 40px rgba(230, 81, 0, 0.15)",
    borderColor: "rgba(230, 81, 0, 0.1)",
  },
}));

export const ShowCardGradient = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "6px",
  background: "linear-gradient(90deg, #e65100 0%, #f57c00 100%)",
}));

export const ShowCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));

export const ShowIconContainer = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: "16px",
  background: "linear-gradient(135deg, #e65100 0%, #f57c00 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  boxShadow: "0 8px 24px rgba(230, 81, 0, 0.25)",
}));

export const ShowTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: "#1a1a1a",
  fontSize: "1.25rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
}));

export const ViewershipContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const ViewershipText = styled(Typography)(({ theme }) => ({
  color: "#1054aa",
  fontWeight: 600,
  fontSize: "0.95rem",
}));

export const ShowDescription = styled(Typography)(({ theme }) => ({
  color: "#666",
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
  fontSize: "0.9rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));

export const ShowStatsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: theme.spacing(2),
  borderTop: "1px solid rgba(0,0,0,0.06)",
}));

export const RatingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const RatingText = styled(Typography)(({ theme }) => ({
  color: "#1a1a1a",
  fontWeight: 600,
}));

export const EpisodesText = styled(Typography)(({ theme }) => ({
  color: "#666",
  fontSize: "0.85rem",
}));

// Media Partners Section
export const MediaPartnersSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(10),
  },
}));

export const MediaPartnersTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 700,
  marginBottom: theme.spacing(6),
  color: "#1a1a1a",
  fontSize: "1.75rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.25rem",
  },
}));

export const MediaPartnerCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  borderRadius: "16px",
  border: "1px solid rgba(0,0,0,0.06)",
  backgroundColor: "#ffffff",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  "&:hover": {
    backgroundColor: "#fafbfc",
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },
}));

export const MediaPartnerText = styled(Typography)(({ theme }) => ({
  color: "#666",
  fontWeight: 600,
  fontSize: "0.9rem",
}));

// CTA Section Components
export const CTACard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #1054aa 0%, #1976d2 100%)",
  borderRadius: "32px",
  padding: theme.spacing(4),
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8),
  },
}));

export const CTAContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
}));

export const CTATitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "white",
  marginBottom: theme.spacing(2),
  fontSize: "1.75rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
}));

export const CTADescription = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "1rem",
  lineHeight: 1.6,
  maxWidth: "600px",
  margin: "0 auto",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    fontSize: "1.125rem",
  },
}));

export const CTAButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  justifyContent: "center",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

export const CTAPrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "#1054aa",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  borderRadius: "50px",
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    transform: "translateY(-2px)",
  },
}));

export const CTASecondaryButton = styled(Button)(({ theme }) => ({
  borderColor: "rgba(255, 255, 255, 0.4)",
  color: "white",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  borderRadius: "50px",
  fontWeight: 600,
  borderWidth: "2px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "white",
    borderWidth: "2px",
  },
}));
