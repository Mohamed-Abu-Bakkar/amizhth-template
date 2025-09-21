import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Avatar,
  LinearProgress,
} from "@mui/material";

export const SocialImpactSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(12),
  backgroundColor: "#f8f9fa",
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(8),
}));

export const SectionBadge = styled(Chip)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: "rgba(230, 81, 0, 0.1)",
  color: "#e65100",
  fontWeight: 600,
  border: "1px solid rgba(230, 81, 0, 0.2)",
}));

export const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  color: "#1a1a1a",
  fontSize: "2.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
  },
}));

export const AccentText = styled("span")({
  color: "#e65100",
});

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  lineHeight: 1.7,
  color: "#666",
  maxWidth: "800px",
  margin: "0 auto",
}));

export const InitiativeCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(0,0,0,0.05)",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(230, 81, 0, 0.15)",
    borderColor: "rgba(230, 81, 0, 0.2)",
  },
}));

export const InitiativeCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: "50%",
  backgroundColor: "rgba(230, 81, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

export const InitiativeTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#1a1a1a",
  marginBottom: theme.spacing(1),
}));

export const ImpactText = styled(Typography)(({ theme }) => ({
  color: "#e65100",
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

export const InitiativeDescription = styled(Typography)(({ theme }) => ({
  color: "#666",
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
}));

export const AchievementsContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const AchievementsTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 600,
}));

export const AchievementItem = styled(Typography)(({ theme }) => ({
  color: "#666",
  marginBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(2),
  position: "relative",
  "&:before": {
    content: '"•"',
    color: "#e65100",
    position: "absolute",
    left: 0,
  },
}));

export const ProgressContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const ProgressHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: theme.spacing(1),
}));

export const ProgressLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

export const ProgressValue = styled(Typography)(({ theme }) => ({
  color: "#e65100",
  fontWeight: 600,
}));

export const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: "rgba(230, 81, 0, 0.1)",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#e65100",
    borderRadius: 4,
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: "center",
  marginBottom: theme.spacing(6),
  color: "#1a1a1a",
}));

export const StoryCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "16px",
  border: "1px solid rgba(230, 81, 0, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#e65100",
    backgroundColor: "rgba(230, 81, 0, 0.02)",
  },
}));

export const StoryHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const StoryAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#e65100",
  width: 50,
  height: 50,
}));

export const StoryInfo = styled(Box)(({ theme }) => ({}));

export const StoryName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#1a1a1a",
}));

export const StoryLocation = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
}));

export const StoryLocationText = styled(Typography)(({ theme }) => ({
  color: "#666",
}));

export const StoryQuote = styled(Typography)(({ theme }) => ({
  color: "#666",
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
  fontStyle: "italic",
}));

export const ProgramChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "rgba(230, 81, 0, 0.1)",
  color: "#e65100",
}));

export const EventCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "16px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
  },
}));

export const EventDate = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const EventDateText = styled(Typography)(({ theme }) => ({
  color: "#e65100",
  fontWeight: 600,
}));

export const EventTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#1a1a1a",
  marginBottom: theme.spacing(1),
}));

export const EventLocation = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  marginBottom: theme.spacing(2),
}));

export const EventLocationText = styled(Typography)(({ theme }) => ({
  color: "#666",
}));

export const EventDescription = styled(Typography)(({ theme }) => ({
  color: "#666",
  lineHeight: 1.5,
  marginBottom: theme.spacing(2),
}));

export const EventAttendees = styled(Typography)(({ theme }) => ({
  color: "#e65100",
  fontWeight: 600,
}));

export const CTACard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #e65100 0%, #f57c00 100%)",
  borderRadius: "24px",
  padding: theme.spacing(4),
  color: "white",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
  },
}));

export const CTABackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: -40,
  right: -40,
  opacity: 0.1,
  transform: "rotate(15deg)",
}));

export const CTAContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
}));

export const CTATitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: "2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
}));

export const CTASubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  lineHeight: 1.7,
  marginBottom: theme.spacing(4),
  opacity: 0.9,
  maxWidth: "600px",
  margin: `0 auto ${theme.spacing(4)}px auto`,
}));

export const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1054aa",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  fontSize: "1.1rem",
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "#0d47a1",
  },
}));

// Join Movement CTA Components
export const CTACardMovement = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #e65100 0%, #f57c00 100%)",
  borderRadius: "24px",
  padding: theme.spacing(4, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
  },
  color: "white",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
}));

export const CTAIconBackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-40px",
  right: "-40px",
  opacity: 0.1,
  transform: "rotate(15deg)",
}));

export const CTAMovementContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
}));

export const CTAMovementTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: "2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
}));

export const CTAMovementDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  lineHeight: 1.7,
  marginBottom: theme.spacing(4),
  opacity: 0.9,
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto",
}));

export const CTAMovementButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1054aa",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  fontSize: "1.1rem",
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "#0d47a1",
  },
}));
