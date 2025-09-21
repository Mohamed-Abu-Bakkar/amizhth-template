import React from "react";
import { Grid } from "@mui/material";
import { PlayArrow, KeyboardArrowDown } from "@mui/icons-material";
import {
  HeroSection,
  HeroContainer,
  ContentWrapper,
  MainHeadline,
  GradientText,
  Subtitle,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  StatsWrapper,
  StatsContainer,
  StatCard,
  StatCardContent,
  StatNumber,
  StatLabel,
  ScrollIndicator,
  ScrollText,
  ScrollIcon,
} from "./styles";

const Theme31Hero = () => {
  const stats = [
    { number: "500+", label: "Speaking Engagements" },
    { number: "1M+", label: "Lives Touched" },
    { number: "15+", label: "Years of Experience" },
    { number: "50+", label: "Cities Reached" },
  ];

  return (
    <HeroSection>
      <HeroContainer maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={7}>
            <ContentWrapper>
              {/* Main Headline */}
              <MainHeadline variant="h1">
                Voice of Inspiration.
                <br />
                <GradientText component="span">Face of Change.</GradientText>
              </MainHeadline>

              {/* Subtitle */}
              <Subtitle variant="h5">
                TV Anchor | Motivational Speaker | Writer | Social Change
                Catalyst
              </Subtitle>

              {/* Description */}
              <Description variant="body1">
                Inspiring millions through powerful storytelling and
                transformative conversations. Join me on a journey of change,
                growth, and making a difference in the world.
              </Description>

              {/* CTA Buttons */}
              <ButtonGroup>
                <PrimaryButton variant="contained" size="large">
                  Explore My Journey
                </PrimaryButton>
                <SecondaryButton
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrow sx={{ fontSize: "20px" }} />}
                >
                  Book Me for a Talk
                </SecondaryButton>
              </ButtonGroup>
            </ContentWrapper>
          </Grid>

          {/* Right Stats Grid */}
          <Grid item xs={12} lg={5}>
            <StatsWrapper>
              <StatsContainer>
                <Grid container spacing={2}>
                  {stats.map((stat, index) => (
                    <Grid item xs={6} key={index}>
                      <StatCard>
                        <StatCardContent>
                          <StatNumber variant="h3">{stat.number}</StatNumber>
                          <StatLabel variant="body2">{stat.label}</StatLabel>
                        </StatCardContent>
                      </StatCard>
                    </Grid>
                  ))}
                </Grid>
              </StatsContainer>
            </StatsWrapper>
          </Grid>
        </Grid>
      </HeroContainer>

      {/* Scroll Indicator */}
      <ScrollIndicator>
        <ScrollText variant="body2">Scroll to explore</ScrollText>
        <ScrollIcon>
          <KeyboardArrowDown
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: 32,
            }}
          />
        </ScrollIcon>
      </ScrollIndicator>

      {/* Enhanced Bounce Animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-12px);
            }
            60% {
              transform: translateY(-6px);
            }
          }
        `}
      </style>
    </HeroSection>
  );
};

export default Theme31Hero;
