import React, { useState } from "react";
import { Container, Grid, Card, Box, Typography } from "@mui/material";
import {
  Mic,
  Tv,
  Edit,
  Email,
  Phone,
  LocationOn,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  Send,
  AccessTime,
} from "@mui/icons-material";
import {
  ContactSection,
  SectionHeader,
  SectionBadge,
  MainTitle,
  AccentText,
  Subtitle,
  ContactOptionsContainer,
  ContactOptionCard,
  ContactOptionContent,
  ContactOptionIconContainer,
  ContactOptionTitle,
  ContactOptionDescription,
  ContactOptionFeaturesList,
  ContactOptionFeature,
  ContactOptionButton,
  ContactFormCard,
  ContactFormTitle,
  ContactFormField,
  ContactFormSubmitButton,
  DirectContactCard,
  DirectContactTitle,
  DirectContactItem,
  DirectContactIcon,
  DirectContactInfo,
  DirectContactLabel,
  DirectContactValue,
  SocialMediaTitle,
  SocialMediaCard,
  SocialMediaIcon,
  SocialMediaHandle,
  ResponseAlert,
  ResponseAlertTitle,
  ResponseAlertText,
} from "./styles";

const Theme31Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "",
  });

  const contactOptions = [
    {
      icon: Mic,
      title: "Speaking Engagements",
      description: "Book keynotes, workshops, and motivational sessions",
      features: [
        "Corporate events & conferences",
        "Educational institutions",
        "Community gatherings",
        "Virtual sessions available",
      ],
      cta: "Book a Talk",
    },
    {
      icon: Tv,
      title: "Media Collaborations",
      description: "Television shows, interviews, and media partnerships",
      features: [
        "Guest appearances",
        "Panel discussions",
        "Documentary features",
        "Podcast interviews",
      ],
      cta: "Media Inquiry",
    },
    {
      icon: Edit,
      title: "Writing & Content",
      description: "Articles, books, and content creation partnerships",
      features: [
        "Guest articles",
        "Book collaborations",
        "Content strategy",
        "Editorial consulting",
      ],
      cta: "Content Request",
    },
  ];

  const directContact = {
    email: "gopinath@voiceofinspiration.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra, India",
  };

  const socialLinks = [
    { icon: Twitter, handle: "@gopinathvoice", url: "#" },
    { icon: LinkedIn, handle: "gopinath-voice", url: "#" },
    { icon: Instagram, handle: "@gopinathvoice", url: "#" },
    { icon: YouTube, handle: "Gopinath Voice", url: "#" },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <ContactSection>
      <Container maxWidth="lg">
        {/* Section Header */}
        <SectionHeader>
          <SectionBadge label="Get in Touch" />
          <MainTitle variant="h2">
            Let's <AccentText>Connect</AccentText> & Create Impact
          </MainTitle>
          <Subtitle variant="body1">
            Ready to inspire your audience, collaborate on meaningful projects,
            or explore partnership opportunities? I'd love to hear from you.
          </Subtitle>
        </SectionHeader>

        {/* Contact Options */}
        <ContactOptionsContainer spacing={4}>
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <ContactOptionCard>
                  <ContactOptionContent>
                    <ContactOptionIconContainer>
                      <IconComponent />
                    </ContactOptionIconContainer>

                    <ContactOptionTitle variant="h5">
                      {option.title}
                    </ContactOptionTitle>

                    <ContactOptionDescription variant="body1">
                      {option.description}
                    </ContactOptionDescription>

                    <ContactOptionFeaturesList>
                      {option.features.map((feature, idx) => (
                        <ContactOptionFeature key={idx} variant="body2">
                          {feature}
                        </ContactOptionFeature>
                      ))}
                    </ContactOptionFeaturesList>

                    <ContactOptionButton variant="contained" fullWidth>
                      {option.cta}
                    </ContactOptionButton>
                  </ContactOptionContent>
                </ContactOptionCard>
              </Grid>
            );
          })}
        </ContactOptionsContainer>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <ContactFormCard>
              <ContactFormTitle variant="h4">Send a Message</ContactFormTitle>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <ContactFormField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ContactFormField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ContactFormField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ContactFormField
                      fullWidth
                      label="Service Type"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ContactFormField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ContactFormField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ContactFormSubmitButton
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                    >
                      Send Message
                    </ContactFormSubmitButton>
                  </Grid>
                </Grid>
              </Box>
            </ContactFormCard>
          </Grid>

          {/* Direct Contact & Social */}
          <Grid item xs={12} md={5}>
            {/* Direct Contact Info */}
            <DirectContactCard>
              <DirectContactTitle variant="h5">
                Direct Contact
              </DirectContactTitle>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <DirectContactItem>
                  <DirectContactIcon as={Email} />
                  <Typography variant="body1">{directContact.email}</Typography>
                </DirectContactItem>
                <DirectContactItem>
                  <DirectContactIcon as={Phone} />
                  <Typography variant="body1">{directContact.phone}</Typography>
                </DirectContactItem>
                <DirectContactItem>
                  <DirectContactIcon as={LocationOn} />
                  <Typography variant="body1">
                    {directContact.location}
                  </Typography>
                </DirectContactItem>
              </Box>
            </DirectContactCard>

            {/* Social Media */}
            <Card
              sx={{
                p: 4,
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                mb: 4,
              }}
            >
              <SocialMediaTitle variant="h5">
                Follow on Social Media
              </SocialMediaTitle>

              <Grid container spacing={2}>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Grid item xs={6} key={index}>
                      <SocialMediaCard>
                        <SocialMediaIcon>
                          <IconComponent />
                        </SocialMediaIcon>
                        <SocialMediaHandle variant="body2">
                          {social.handle}
                        </SocialMediaHandle>
                      </SocialMediaCard>
                    </Grid>
                  );
                })}
              </Grid>
            </Card>

            {/* Quick Response Guarantee */}
            <ResponseAlert icon={<AccessTime />} severity="info">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Quick Response Guarantee
              </Typography>
              <Typography variant="body2">
                I personally respond to all inquiries within 24 hours during
                business days.
              </Typography>
            </ResponseAlert>
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Theme31Contact;
