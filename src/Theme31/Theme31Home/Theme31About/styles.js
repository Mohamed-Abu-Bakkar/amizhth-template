import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

// Main Section
export const AboutSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(16),
  backgroundColor: "#f8f9fa",
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

// Journey Header Section
export const JourneyHeader = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(8),
  },
}));

export const JourneyBadge = styled(Chip)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: "rgba(16, 84, 170, 0.1)",
  color: "#1054aa",
  fontWeight: 600,
  fontSize: "0.9rem",
  border: "1px solid rgba(16, 84, 170, 0.2)",
  borderRadius: "20px",
}));

export const JourneyTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  color: "#1a1a1a",
  fontSize: "2.8rem",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  maxWidth: "900px",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
  },
}));

export const PurposeText = styled("span")({
  background: "linear-gradient(135deg, #1054aa 0%, #1976d2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const ImpactText = styled("span")({
  background: "linear-gradient(135deg, #e65100 0%, #f57c00 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const JourneyDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  lineHeight: 1.7,
  color: "#666",
  maxWidth: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
}));

// Main Content Section
export const MainContent = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

export const ContentGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(8),
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1.5fr 1fr",
    gap: theme.spacing(12),
  },
}));

// Image Section
export const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  minHeight: "400px",
  [theme.breakpoints.up("md")]: {
    minHeight: "500px",
  },
  [theme.breakpoints.up("lg")]: {
    minHeight: "600px",
  },
  [theme.breakpoints.down("md")]: {
    order: -1,
    minHeight: "350px",
  },
}));

export const ProfileImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  borderRadius: "24px",
}));

export const ExperienceBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  background: "linear-gradient(135deg, #f57c00 0%, #ff9800 100%)",
  color: "white",
  borderRadius: "16px",
  padding: theme.spacing(2.5),
  textAlign: "center",
  minWidth: "100px",
  boxShadow: "0 8px 24px rgba(245, 124, 0, 0.4)",
}));

export const ExperienceNumber = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "1.8rem",
  lineHeight: 1,
  marginBottom: theme.spacing(0.5),
}));

export const ExperienceLabel = styled(Typography)(({ theme }) => ({
  fontSize: "0.85rem",
  fontWeight: 600,
  opacity: 0.95,
}));

// Content Section
export const ContentSection = styled(Box)(({ theme }) => ({
  // Content styling
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(4),
  color: "#1a1a1a",
  fontSize: "2rem",
  lineHeight: 1.3,
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
}));

export const ContentParagraph = styled(Typography)(({ theme }) => ({
  fontSize: "1.05rem",
  lineHeight: 1.7,
  color: "#555",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
}));

// Quote Section
export const QuoteSection = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  borderRadius: "24px",
  padding: theme.spacing(4),
  position: "relative",
  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
  border: "1px solid rgba(0,0,0,0.06)",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(5),
  },
}));

export const QuoteIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(3),
  left: theme.spacing(3),
  width: "40px",
  height: "40px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #f57c00 0%, #ff9800 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "20px",
}));

export const QuoteText = styled(Typography)(({ theme }) => ({
  fontSize: "1.15rem",
  lineHeight: 1.6,
  color: "#1a1a1a",
  fontStyle: "italic",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(3),
  paddingLeft: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
    paddingLeft: theme.spacing(7),
  },
}));

export const QuoteAuthor = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: theme.spacing(1),
}));

export const AuthorName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#1054aa",
  fontSize: "1rem",
}));

// Legacy styled components (keeping existing ones for backward compatibility)
export const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(8),
  },
}));

export const SectionBadge = styled(Chip)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: "rgba(16, 84, 170, 0.08)",
  color: "#1054aa",
  fontWeight: 600,
  fontSize: "0.95rem",
  border: "1px solid rgba(16, 84, 170, 0.15)",
  borderRadius: "25px",
}));

export const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(4),
  color: "#1a1a1a",
  fontSize: "2.5rem",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  maxWidth: "900px",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.75rem",
  },
}));

export const AccentText = styled("span")({
  background: "linear-gradient(135deg, #1054aa 0%, #1976d2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const OrangeAccentText = styled("span")({
  background: "linear-gradient(135deg, #e65100 0%, #f57c00 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  lineHeight: 1.7,
  color: "#555",
  maxWidth: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
}));

// Journey Milestones Section
export const MilestonesSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(6),
  },
}));

export const MilestonesTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textAlign: "center",
  marginBottom: theme.spacing(8),
  color: "#1a1a1a",
  fontSize: "2.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
}));

export const MilestonesGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

export const MilestoneCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  padding: theme.spacing(4),
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  border: "1px solid rgba(0,0,0,0.06)",
  transition: "all 0.3s ease",
  position: "relative",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  },
}));

export const MilestoneIcon = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #1054aa 0%, #1976d2 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  color: "white",
  fontSize: "24px",
}));

export const MilestoneYear = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "1.5rem",
  color: "#1054aa",
  marginBottom: theme.spacing(1),
}));

export const MilestoneTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.1rem",
  color: "#1a1a1a",
  marginBottom: theme.spacing(1.5),
}));

export const MilestoneDescription = styled(Typography)(({ theme }) => ({
  fontSize: "0.95rem",
  color: "#666",
  lineHeight: 1.6,
}));

// Legacy components for backward compatibility
export const Wrapper = styled(Box)(({ theme }) => ({
  padding: "80px 0",
  backgroundColor: "#f8f9fa",
  color: "#1a1a1a",
  minHeight: "60vh",
}));

export const Inner = styled(Box)(({ theme }) => ({
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px",
}));
