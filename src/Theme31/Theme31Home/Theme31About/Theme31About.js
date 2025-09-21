import React from "react";
import { Container, Grid } from "@mui/material";
import {
  FormatQuote,
  Mic,
  EmojiEvents,
  MenuBook,
  People,
} from "@mui/icons-material";
import {
  AboutSection,
  JourneyHeader,
  JourneyBadge,
  JourneyTitle,
  PurposeText,
  ImpactText,
  JourneyDescription,
  MainContent,
  ContentGrid,
  ImageContainer,
  ProfileImage,
  ExperienceBadge,
  ExperienceNumber,
  ExperienceLabel,
  ContentSection,
  SectionTitle,
  ContentParagraph,
  QuoteSection,
  QuoteIcon,
  QuoteText,
  QuoteAuthor,
  AuthorName,
  MilestonesSection,
  MilestonesTitle,
  MilestonesGrid,
  MilestoneCard,
  MilestoneIcon,
  MilestoneYear,
  MilestoneTitle,
  MilestoneDescription,
} from "./styles";

const Theme31About = () => {
  const journeyMilestones = [
    {
      year: "2008",
      title: "Media Journey Begins",
      description:
        "Started as a young anchor, bringing fresh perspectives to television",
      icon: Mic,
    },
    {
      year: "2012",
      title: "Breakthrough Shows",
      description: "Hosted popular programs that resonated with millions",
      icon: EmojiEvents,
    },
    {
      year: "2016",
      title: "Author & Writer",
      description: "Published books that inspire and motivate readers",
      icon: MenuBook,
    },
    {
      year: "2020",
      title: "Social Impact",
      description:
        "Launched initiatives for youth empowerment and social change",
      icon: People,
    },
  ];
  return (
    <AboutSection>
      <Container maxWidth="lg">
        {/* Journey Header */}
        <JourneyHeader>
          <JourneyBadge label="About Gopinath" />
          <JourneyTitle variant="h1">
            A Journey of <PurposeText>Purpose</PurposeText> &{" "}
            <ImpactText>Impact</ImpactText>
          </JourneyTitle>
          <JourneyDescription>
            From television studios to motivational stages, from writing desks
            to social initiatives - every step has been about creating
            meaningful connections and inspiring positive change.
          </JourneyDescription>
        </JourneyHeader>

        {/* Main Content */}
        <MainContent>
          <ContentGrid>
            {/* Image Section */}
            <ImageContainer>
              <ProfileImage
                src="/src/assets/about-image.jpg"
                alt="Gopinath speaking at an event"
              />
              <ExperienceBadge>
                <ExperienceNumber variant="h4">15+</ExperienceNumber>
                <ExperienceLabel>Years Experience</ExperienceLabel>
              </ExperienceBadge>
            </ImageContainer>

            {/* Content Section */}
            <ContentSection>
              <SectionTitle variant="h2">
                Building Bridges Through Stories
              </SectionTitle>

              <ContentParagraph>
                Gopinath has dedicated his career to meaningful storytelling -
                whether it's through television anchoring that connects with
                audiences, motivational speaking that transforms perspectives,
                or social initiatives that create lasting change.
              </ContentParagraph>

              <ContentParagraph>
                His unique blend of media expertise, inspirational messaging,
                and social consciousness has made him a trusted voice for
                transformation and growth.
              </ContentParagraph>

              {/* Quote Section */}
              <QuoteSection>
                <QuoteIcon>
                  <FormatQuote sx={{ fontSize: 20 }} />
                </QuoteIcon>

                <QuoteText>
                  Every conversation is an opportunity to inspire, every story a
                  chance to transform, and every moment a possibility to create
                  positive change.
                </QuoteText>

                <QuoteAuthor>
                  <AuthorName>— Gopinath</AuthorName>
                </QuoteAuthor>
              </QuoteSection>
            </ContentSection>
          </ContentGrid>
        </MainContent>

        {/* Journey Milestones */}
        <MilestonesSection>
          <MilestonesTitle variant="h2">Journey Milestones</MilestonesTitle>

          <MilestonesGrid>
            {journeyMilestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <MilestoneCard key={index}>
                  <MilestoneIcon>
                    <IconComponent sx={{ fontSize: 24 }} />
                  </MilestoneIcon>

                  <MilestoneYear variant="h4">{milestone.year}</MilestoneYear>

                  <MilestoneTitle variant="h6">
                    {milestone.title}
                  </MilestoneTitle>

                  <MilestoneDescription>
                    {milestone.description}
                  </MilestoneDescription>
                </MilestoneCard>
              );
            })}
          </MilestonesGrid>
        </MilestonesSection>
      </Container>
    </AboutSection>
  );
};

export default Theme31About;
