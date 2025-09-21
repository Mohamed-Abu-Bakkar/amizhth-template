import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#1054aa",
  color: "white",
}));

export const MainContainer = styled(Container)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const MainFooterContent = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

export const BrandTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

export const BrandDescription = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.8)",
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
}));

export const TaglineBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const Tagline = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "#f57c00",
  marginBottom: theme.spacing(1),
}));

export const ContactInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
}));

export const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
}));

export const ContactText = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

export const LinksList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const FooterLink = styled(Box)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.8)",
  textDecoration: "none",
  fontSize: "0.875rem",
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#f57c00",
  },
}));

export const ServicesList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const ServiceItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const ServiceText = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "0.875rem",
}));

export const SocialLinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(3),
}));

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  width: 40,
  height: 40,
  borderRadius: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#f57c00",
    color: "white",
  },
}));

export const NewsletterText = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  color: "rgba(255, 255, 255, 0.8)",
  marginBottom: theme.spacing(1.5),
}));

export const NewsletterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

export const NewsletterField = styled(TextField)(({ theme }) => ({
  flex: 1,
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    fontSize: "0.875rem",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.4)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f57c00",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.6)",
      opacity: 1,
    },
  },
}));

export const SubscribeButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f57c00",
  color: "white",
  minWidth: "auto",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "rgba(245, 124, 0, 0.9)",
  },
}));

export const DividerStyled = styled("hr")(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  border: "none",
  height: "1px",
  margin: 0,
}));

export const BottomFooter = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const CopyrightText = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  color: "rgba(255, 255, 255, 0.6)",
}));

export const BottomLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  fontSize: "0.875rem",
  color: "rgba(255, 255, 255, 0.6)",
}));

export const BottomLink = styled(Box)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#f57c00",
  },
}));

export const MadeWithLove = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  fontSize: "0.875rem",
  color: "rgba(255, 255, 255, 0.6)",
}));
