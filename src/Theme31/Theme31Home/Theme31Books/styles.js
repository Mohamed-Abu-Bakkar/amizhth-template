import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Rating,
  TextField,
} from "@mui/material";

// Main Section
export const BooksSection = styled(Box)(({ theme }) => ({
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
  backgroundColor: "rgba(245, 124, 0, 0.1)",
  color: "#f57c00",
  fontWeight: 600,
  border: "1px solid rgba(245, 124, 0, 0.2)",
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
  background: "linear-gradient(135deg, #f57c00 0%, #ff9800 100%)",
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

// Books Section
export const BooksContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
}));

export const BookCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(0,0,0,0.05)",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(245, 124, 0, 0.15)",
    borderColor: "rgba(245, 124, 0, 0.2)",
  },
}));

export const BookCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  background: "linear-gradient(135deg, #f57c00 0%, #ff9800 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
}));

export const BookPagesBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 16,
  right: 16,
  backgroundColor: "rgba(255,255,255,0.2)",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  borderRadius: "12px",
}));

export const BookCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
}));

export const BookCategory = styled(Chip)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: "rgba(245, 124, 0, 0.1)",
  color: "#f57c00",
  fontSize: "0.75rem",
  fontWeight: 600,
}));

export const BookTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  color: "#1a1a1a",
  fontSize: "1.25rem",
  lineHeight: 1.3,
}));

export const BookSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: "#f57c00",
  fontSize: "0.9rem",
}));

export const BookDescription = styled(Typography)(({ theme }) => ({
  color: "#666",
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
  fontSize: "0.9rem",
}));

export const BookRatingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

export const BookRatingText = styled(Typography)(({ theme }) => ({
  color: "#666",
  fontSize: "0.875rem",
}));

export const BookPriceContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const BookPrice = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#1054aa",
  fontSize: "1.25rem",
}));

export const BookOrderButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #f57c00, #ff9800)",
  color: "white",
  borderRadius: "8px",
  "&:hover": {
    background: "linear-gradient(45deg, #e65100, #f57c00)",
  },
}));

// Quote Section
export const QuoteCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #1054aa 0%, #1976d2 100%)",
  borderRadius: "24px",
  padding: theme.spacing(10),
  marginBottom: theme.spacing(8),
  color: "white",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
}));

export const QuoteBackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage:
    "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
  borderRadius: "24px",
}));

export const QuoteContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
}));

export const QuoteText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  lineHeight: 1.5,
  fontSize: "1.5rem",
  fontStyle: "italic",
  maxWidth: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.75rem",
  },
}));

export const QuoteAuthor = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  opacity: 0.9,
}));

// Articles Section
export const ArticlesContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: "center",
  marginBottom: theme.spacing(6),
  color: "#1a1a1a",
  fontSize: "2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.25rem",
  },
}));

export const ArticleCard = styled(Card)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(3),
  borderRadius: "16px",
  border: "1px solid rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    borderColor: "#f57c00",
    backgroundColor: "rgba(245, 124, 0, 0.02)",
    transform: "translateY(-2px)",
  },
}));

export const ArticleMeta = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const ArticleMetaText = styled(Typography)(({ theme }) => ({
  color: "#666",
  fontSize: "0.75rem",
}));

export const ArticleTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: "#1a1a1a",
  fontSize: "1.1rem",
  lineHeight: 1.4,
}));

export const ArticleExcerpt = styled(Typography)(({ theme }) => ({
  color: "#666",
  lineHeight: 1.5,
  fontSize: "0.9rem",
}));

// Newsletter Section
export const NewsletterCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #f57c00 0%, #ff9800 100%)",
  borderRadius: "24px",
  padding: theme.spacing(6),
  color: "white",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
}));

export const NewsletterBackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage:
    "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)",
  borderRadius: "24px",
}));

export const NewsletterContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
}));

export const NewsletterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: "2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
}));

export const NewsletterDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  lineHeight: 1.6,
  marginBottom: theme.spacing(4),
  opacity: 0.9,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}));

export const NewsletterForm = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

export const NewsletterTextField = styled(TextField)(({ theme }) => ({
  flex: 1,
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.7)",
      opacity: 1,
    },
  },
}));

export const NewsletterButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f57c00",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "#e65100",
  },
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
