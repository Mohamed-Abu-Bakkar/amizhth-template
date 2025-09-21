import React from "react";
import { Divider, Grid } from "@mui/material";
import {
  Favorite,
  Email,
  Phone,
  LocationOn,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  MenuBook,
  Mic,
  Group,
  Event,
} from "@mui/icons-material";
import {
  FooterContainer,
  MainContainer,
  MainFooterContent,
  BrandTitle,
  BrandDescription,
  TaglineBox,
  Tagline,
  ContactInfo,
  ContactItem,
  ContactText,
  SectionTitle,
  LinksList,
  FooterLink,
  ServicesList,
  ServiceItem,
  ServiceText,
  SocialLinksContainer,
  SocialIconButton,
  NewsletterText,
  NewsletterBox,
  NewsletterField,
  SubscribeButton,
  DividerStyled,
  BottomFooter,
  CopyrightText,
  BottomLinks,
  BottomLink,
  MadeWithLove,
} from "./styles";

const Theme31Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Media", href: "#media" },
    { label: "Speaking", href: "#speaking" },
    { label: "Books", href: "#books" },
    { label: "Social Impact", href: "#social-impact" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Keynote Speaking", icon: Mic },
    { label: "Corporate Training", icon: Group },
    { label: "Media Consulting", icon: MenuBook },
    { label: "Event Hosting", icon: Event },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: LinkedIn, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: YouTube, href: "#", label: "YouTube" },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <FooterContainer component="footer">
      <MainContainer maxWidth="lg">
        {/* Main Footer Content */}
        <MainFooterContent>
          <Grid container spacing={4}>
            {/* Brand Section */}
            <Grid item xs={12} md={6} lg={3}>
              <BrandTitle variant="h4">Gopinath</BrandTitle>
              <BrandDescription>
                TV Anchor | Motivational Speaker | Writer | Social Entrepreneur
              </BrandDescription>
              <TaglineBox>
                <Tagline>"Inspiring Lives. One Voice at a Time."</Tagline>
              </TaglineBox>

              {/* Contact Info */}
              <ContactInfo>
                <ContactItem>
                  <Email sx={{ fontSize: 16, color: "#f57c00" }} />
                  <ContactText>gopinath@example.com</ContactText>
                </ContactItem>
                <ContactItem>
                  <Phone sx={{ fontSize: 16, color: "#f57c00" }} />
                  <ContactText>+91 98765 43210</ContactText>
                </ContactItem>
                <ContactItem>
                  <LocationOn sx={{ fontSize: 16, color: "#f57c00" }} />
                  <ContactText>Mumbai, India</ContactText>
                </ContactItem>
              </ContactInfo>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={6} lg={2}>
              <SectionTitle variant="h6">Quick Links</SectionTitle>
              <LinksList>
                {quickLinks.map((link) => (
                  <FooterLink
                    key={link.label}
                    component="a"
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.label}
                  </FooterLink>
                ))}
              </LinksList>
            </Grid>

            {/* Services */}
            <Grid item xs={12} md={6} lg={3}>
              <SectionTitle variant="h6">Services</SectionTitle>
              <ServicesList>
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <ServiceItem key={service.label}>
                      <IconComponent sx={{ fontSize: 16, color: "#f57c00" }} />
                      <ServiceText>{service.label}</ServiceText>
                    </ServiceItem>
                  );
                })}
              </ServicesList>
            </Grid>

            {/* Social & Newsletter */}
            <Grid item xs={12} md={6} lg={4}>
              <SectionTitle variant="h6">Stay Connected</SectionTitle>

              {/* Social Links */}
              <SocialLinksContainer>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <SocialIconButton
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                    >
                      <IconComponent sx={{ fontSize: 20 }} />
                    </SocialIconButton>
                  );
                })}
              </SocialLinksContainer>

              {/* Newsletter */}
              <div>
                <NewsletterText>
                  Subscribe for updates and insights
                </NewsletterText>
                <NewsletterBox>
                  <NewsletterField
                    type="email"
                    placeholder="Email"
                    size="small"
                  />
                  <SubscribeButton size="small">
                    <Email sx={{ fontSize: 16 }} />
                  </SubscribeButton>
                </NewsletterBox>
              </div>
            </Grid>
          </Grid>
        </MainFooterContent>

        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} />

        {/* Bottom Footer */}
        <BottomFooter>
          <CopyrightText>© 2024 Gopinath. All rights reserved.</CopyrightText>

          <BottomLinks>
            <BottomLink component="a" href="#">
              Privacy Policy
            </BottomLink>
            <BottomLink component="a" href="#">
              Terms of Service
            </BottomLink>
            <BottomLink component="a" href="#">
              Sitemap
            </BottomLink>
          </BottomLinks>

          <MadeWithLove>
            <span>Made with</span>
            <Favorite sx={{ fontSize: 16, color: "#f57c00" }} />
            <span>for positive impact</span>
          </MadeWithLove>
        </BottomFooter>
      </MainContainer>
    </FooterContainer>
  );
};

export default Theme31Footer;
