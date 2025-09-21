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
  Rating,
} from "@mui/material";

// Main Section
export const SpeakingSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(12),
  backgroundColor: "#f8f9fa",
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const SpeakingContainer = styled(Container)(({ theme }) => ({
  // Using Container with maxWidth="lg"
}));

// Section Header Components
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
  backgroundColor: "rgba(16, 84, 170, 0.1)",
  color: "#1054aa",
  fontWeight: 600,
  border: "1px solid rgba(16, 84, 170, 0.2)",
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
  color: "#1054aa",
});

export const SectionDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  lineHeight: 1.7,
  color: "#666",
  maxWidth: "800px",
  margin: "0 auto",
}));

// Animated Counters Section
export const CountersContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

export const CounterItem = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));

export const CounterNumber = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  fontSize: "2.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
}));

export const CounterLabel = styled(Typography)(({ theme }) => ({
  color: "#666",
  fontWeight: 500,
}));

// Speaking Topics Section
export const TopicsSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

export const TopicsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: "center",
  marginBottom: theme.spacing(4),
  color: "#1a1a1a",
}));

export const TopicCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(3),
  borderRadius: "16px",
  border: "1px solid rgba(16, 84, 170, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#1054aa",
    backgroundColor: "rgba(16, 84, 170, 0.05)",
  },
}));

export const TopicText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#1a1a1a",
}));

// Why Choose Section
export const WhyChooseSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

export const WhyChooseTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: "center",
  marginBottom: theme.spacing(6),
  color: "#1a1a1a",
}));

export const WhyChooseItem = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const WhyChooseContent = styled(Box)(({ theme }) => ({
  flex: 1,
}));

export const WhyChooseItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#1a1a1a",
  marginBottom: theme.spacing(1),
}));

export const WhyChooseItemDescription = styled(Typography)(({ theme }) => ({
  color: "#666",
  lineHeight: 1.6,
}));

// Testimonials Section
export const TestimonialsSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
}));

export const TestimonialsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: "center",
  marginBottom: theme.spacing(6),
  color: "#1a1a1a",
}));

export const TestimonialCard = styled(Card)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(4),
  borderRadius: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  transition: "all 0.4s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 20px 40px rgba(16, 84, 170, 0.15)",
  },
}));

export const TestimonialRating = styled(Rating)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: "#f57c00",
}));

export const TestimonialFeedback = styled(Typography)(({ theme }) => ({
  color: "#666",
  lineHeight: 1.7,
  marginBottom: theme.spacing(3),
  fontStyle: "italic",
}));

export const TestimonialAuthor = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#1054aa",
  width: 50,
  height: 50,
}));

export const TestimonialAuthorInfo = styled(Box)(({ theme }) => ({
  flex: 1,
}));

export const TestimonialAuthorName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#1a1a1a",
}));

export const TestimonialAuthorPosition = styled(Typography)(({ theme }) => ({
  color: "#666",
}));

export const TestimonialAuthorLocation = styled(Typography)(({ theme }) => ({
  color: "#1054aa",
}));

// CTA Section Components
export const CTACard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #1054aa 0%, #1976d2 100%)",
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
  left: -40,
  opacity: 0.1,
  transform: "rotate(-15deg)",
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

export const CTADescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  lineHeight: 1.7,
  opacity: 0.9,
  maxWidth: "600px",
  margin: "0 auto",
  marginBottom: theme.spacing(4),
}));

export const CTAButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  justifyContent: "center",
  flexWrap: "wrap",
}));

export const CTAPrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#e65100",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  fontSize: "1.1rem",
  borderRadius: "12px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#bf360c",
  },
}));

export const CTASecondaryButton = styled(Button)(({ theme }) => ({
  borderColor: "white",
  color: "white",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  fontSize: "1.1rem",
  borderRadius: "12px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderColor: "white",
  },
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
