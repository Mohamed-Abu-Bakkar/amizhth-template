import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  TextField,
  IconButton,
  Alert,
} from "@mui/material";

// Main Section
export const ContactSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(12),
  backgroundColor: "#ffffff",
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
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
  lineHeight: 1.2,
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
}));

export const AccentText = styled("span")({
  background: "linear-gradient(135deg, #1054aa 0%, #1976d2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  lineHeight: 1.6,
  color: "#666",
  maxWidth: "700px",
  marginLeft: "auto",
  marginRight: "auto",
}));

// Contact Options Cards
export const ContactOptionsContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

export const ContactOptionCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(0,0,0,0.05)",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(16, 84, 170, 0.15)",
    borderColor: "rgba(16, 84, 170, 0.2)",
  },
}));

export const ContactOptionContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
}));

export const ContactOptionIconContainer = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: "50%",
  backgroundColor: "rgba(16, 84, 170, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: theme.spacing(3),
}));

export const ContactOptionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#1a1a1a",
  marginBottom: theme.spacing(2),
}));

export const ContactOptionDescription = styled(Typography)(({ theme }) => ({
  color: "#666",
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
}));

export const ContactOptionFeaturesList = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const ContactOptionFeature = styled(Typography)(({ theme }) => ({
  color: "#555",
  marginBottom: theme.spacing(1),
  fontSize: "0.9rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:before": {
    content: '"•"',
    color: "#1054aa",
    marginRight: theme.spacing(1),
    fontWeight: "bold",
  },
}));

export const ContactOptionButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #1054aa, #1976d2)",
  color: "white",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  borderRadius: "12px",
  "&:hover": {
    background: "linear-gradient(45deg, #0d47a1, #1054aa)",
  },
}));

// Contact Form
export const ContactFormCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
}));

export const ContactFormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  color: "#1a1a1a",
}));

export const ContactFormField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
  },
}));

export const ContactFormSubmitButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #e65100, #f57c00)",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  borderRadius: "12px",
  "&:hover": {
    background: "linear-gradient(45deg, #bf360c, #e65100)",
  },
}));

// Direct Contact Card
export const DirectContactCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  marginBottom: theme.spacing(3),
}));

export const DirectContactTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  color: "#1a1a1a",
}));

export const DirectContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "&:last-child": {
    marginBottom: 0,
  },
}));

export const DirectContactIcon = styled(IconButton)(({ theme }) => ({
  color: "#1054aa",
  marginRight: theme.spacing(2),
  padding: theme.spacing(1),
}));

export const DirectContactInfo = styled(Box)(({ theme }) => ({
  flex: 1,
}));

export const DirectContactLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#1a1a1a",
  fontSize: "0.9rem",
  marginBottom: theme.spacing(0.5),
}));

export const DirectContactValue = styled(Typography)(({ theme }) => ({
  color: "#666",
  fontSize: "0.9rem",
}));

// Social Media Section
export const SocialMediaTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  color: "#1a1a1a",
}));

export const SocialMediaCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(16, 84, 170, 0.05)",
    transform: "translateY(-2px)",
  },
}));

export const SocialMediaIcon = styled(IconButton)(({ theme }) => ({
  color: "#1054aa",
  marginBottom: theme.spacing(1),
}));

export const SocialMediaHandle = styled(Typography)(({ theme }) => ({
  color: "#666",
  fontSize: "0.8rem",
}));

// Response Guarantee Alert
export const ResponseAlert = styled(Alert)(({ theme }) => ({
  borderRadius: "12px",
  backgroundColor: "rgba(16, 84, 170, 0.05)",
  color: "#1054aa",
  "& .MuiAlert-icon": {
    color: "#1054aa",
  },
}));

export const ResponseAlertTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

export const ResponseAlertText = styled(Typography)(({ theme }) => ({
  // Default styling from theme
}));

// Legacy components for backward compatibility
export const Wrapper = styled(Box)(({ theme }) => ({
  padding: "80px 0",
  backgroundColor: "#ffffff",
  color: "#1a1a1a",
  minHeight: "60vh",
}));

export const Inner = styled(Box)(({ theme }) => ({
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px",
}));
