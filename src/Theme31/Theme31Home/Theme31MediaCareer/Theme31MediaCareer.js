import React from "react";
import { Grid } from "@mui/material";
import { Tv, Visibility, Star, PlayArrow } from "@mui/icons-material";
import {
  MediaCareerSection,
  MediaCareerContainer,
  SectionHeader,
  SectionBadge,
  MainTitle,
  GradientText,
  SectionDescription,
  ShowsContainer,
  ShowCard,
  ShowCardGradient,
  ShowCardContent,
  ShowIconContainer,
  ShowTitle,
  ViewershipContainer,
  ViewershipText,
  ShowDescription,
  ShowStatsContainer,
  RatingContainer,
  RatingText,
  EpisodesText,
  MediaPartnersSection,
  MediaPartnersTitle,
  MediaPartnerCard,
  MediaPartnerText,
  CTACard,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButtonGroup,
  CTAPrimaryButton,
  CTASecondaryButton,
} from "./styles";

const Theme31MediaCareer = () => {
  const shows = [
    {
      title: "Prime Time Talk",
      viewership: "2M+ viewers",
      description:
        "Weekly prime-time show focusing on inspirational stories and social issues",
      rating: 4.8,
      episodes: "150+ Episodes",
    },
    {
      title: "Youth Connect",
      viewership: "800K+ viewers",
      description:
        "Interactive platform connecting youth with opportunities and mentorship",
      rating: 4.9,
      episodes: "200+ Episodes",
    },
    {
      title: "Social Stories",
      viewership: "1.2M+ viewers",
      description:
        "Documentary-style program highlighting community change-makers",
      rating: 4.7,
      episodes: "100+ Episodes",
    },
  ];

  const mediaLogos = [
    "Star TV",
    "Colors",
    "Zee",
    "Sony",
    "Discovery",
    "National Geographic",
  ];

  return (
    <MediaCareerSection>
      <MediaCareerContainer maxWidth="xl">
        {/* Section Header */}
        <SectionHeader>
          <SectionBadge label="Media & Anchoring" />
          <MainTitle variant="h2">
            Television That{" "}
            <GradientText component="span">Transforms</GradientText>
          </MainTitle>
          <SectionDescription variant="body1">
            From prime-time shows to youth-focused programs, my television
            journey has been about creating content that not only entertains but
            also educates and empowers audiences across the nation.
          </SectionDescription>
        </SectionHeader>

        {/* Shows Grid */}
        <ShowsContainer>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {shows.map((show, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ShowCard>
                  {/* Background Gradient */}
                  <ShowCardGradient />
                  <ShowCardContent>
                    {/* TV Icon */}
                    <ShowIconContainer>
                      <Tv sx={{ color: "white", fontSize: 28 }} />
                    </ShowIconContainer>

                    {/* Show Title */}
                    <ShowTitle variant="h5">{show.title}</ShowTitle>

                    {/* Viewership */}
                    <ViewershipContainer>
                      <Visibility sx={{ color: "#1054aa", fontSize: 20 }} />
                      <ViewershipText variant="body2">
                        {show.viewership}
                      </ViewershipText>
                    </ViewershipContainer>

                    {/* Description */}
                    <ShowDescription variant="body2">
                      {show.description}
                    </ShowDescription>

                    {/* Rating and Episodes */}
                    <ShowStatsContainer>
                      <RatingContainer>
                        <Star sx={{ color: "#f57c00", fontSize: 18 }} />
                        <RatingText variant="body2">{show.rating}</RatingText>
                      </RatingContainer>
                      <EpisodesText variant="body2">
                        {show.episodes}
                      </EpisodesText>
                    </ShowStatsContainer>
                  </ShowCardContent>
                </ShowCard>
              </Grid>
            ))}
          </Grid>
        </ShowsContainer>

        {/* Media Partners Section */}
        <MediaPartnersSection>
          <MediaPartnersTitle variant="h4">
            Trusted by Leading Media Networks
          </MediaPartnersTitle>
          <Grid container spacing={3} justifyContent="center">
            {mediaLogos.map((logo, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <MediaPartnerCard>
                  <MediaPartnerText variant="body2">{logo}</MediaPartnerText>
                </MediaPartnerCard>
              </Grid>
            ))}
          </Grid>
        </MediaPartnersSection>

        {/* CTA Section */}
        <CTACard>
          <CTAContent>
            <Star
              sx={{
                fontSize: { xs: 48, md: 64 },
                color: "rgba(255, 255, 255, 0.3)",
                mb: 3,
              }}
            />
            <CTATitle variant="h3">Bringing Stories to Life</CTATitle>
            <CTADescription variant="body1">
              Ready to collaborate on meaningful television content that
              inspires and transforms? Let's create something extraordinary
              together.
            </CTADescription>
            <CTAButtonGroup>
              <CTAPrimaryButton
                variant="contained"
                size="large"
                startIcon={<PlayArrow />}
              >
                View Media Kit
              </CTAPrimaryButton>
              <CTASecondaryButton variant="outlined" size="large">
                Discuss Collaboration
              </CTASecondaryButton>
            </CTAButtonGroup>
          </CTAContent>
        </CTACard>
      </MediaCareerContainer>
    </MediaCareerSection>
  );
};

export default Theme31MediaCareer;
