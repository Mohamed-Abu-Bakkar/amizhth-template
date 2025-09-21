import React from "react";
import {
  Container,
  Grid,
  Box,
} from "@mui/material";
import {
  School,
  Lightbulb,
  RecordVoiceOver,
  People,
  LocationOn,
  CalendarToday,
  Favorite,
} from "@mui/icons-material";
import {
  SocialImpactSection,
  SectionHeader,
  SectionBadge,
  MainTitle,
  AccentText,
  Subtitle,
  InitiativeCard,
  InitiativeCardContent,
  IconContainer,
  InitiativeTitle,
  ImpactText,
  InitiativeDescription,
  AchievementsContainer,
  AchievementsTitle,
  AchievementItem,
  ProgressContainer,
  ProgressHeader,
  ProgressLabel,
  ProgressValue,
  StyledLinearProgress,
  SectionTitle,
  StoryCard,
  StoryHeader,
  StoryAvatar,
  StoryInfo,
  StoryName,
  StoryLocation,
  StoryLocationText,
  StoryQuote,
  ProgramChip,
  EventCard,
  EventDate,
  EventDateText,
  EventTitle,
  EventLocation,
  EventLocationText,
  EventDescription,
  EventAttendees,
  CTACard,
  CTABackground,
  CTAContent,
  CTATitle,
  CTASubtitle,
  CTAButton,
  CTACardMovement,
  CTAIconBackground,
  CTAMovementContent,
  CTAMovementTitle,
  CTAMovementDescription,
  CTAMovementButton,
} from "./styles";

const Theme31SocialImpact = () => {
  const initiatives = [
    {
      icon: School,
      title: "Youth Mentorship Program",
      impact: "500+ Students Mentored",
      description:
        "Comprehensive mentorship program connecting young professionals with industry leaders for career guidance and personal development.",
      achievements: [
        "85% participants secured better job opportunities",
        "200+ successful career transitions",
        "50+ mentor-mentee success stories",
      ],
      progress: 85,
    },
    {
      icon: Lightbulb,
      title: "Educational Outreach Initiative",
      impact: "50+ Schools Reached",
      description:
        "Interactive workshops and seminars in schools to inspire students and provide practical skills for their future careers.",
      achievements: [
        "10,000+ students directly impacted",
        "95% positive feedback from educators",
        "30+ partnerships with educational institutions",
      ],
      progress: 75,
    },
    {
      icon: RecordVoiceOver,
      title: "Community Storytelling Project",
      impact: "1000+ Stories Documented",
      description:
        "Platform for community members to share their transformation stories and inspire others through authentic narratives.",
      achievements: [
        "500+ published success stories",
        "2M+ total story views",
        "80% readers report feeling inspired",
      ],
      progress: 90,
    },
  ];

  const transformationStories = [
    {
      name: "Anjali Mehta",
      age: 22,
      location: "Mumbai",
      story:
        "From a confused college graduate to leading a team of 20 at a tech startup",
      program: "Youth Mentorship",
    },
    {
      name: "Rohit Singh",
      age: 17,
      location: "Delhi",
      story: "Overcame speech anxiety to become his school's debate champion",
      program: "Educational Outreach",
    },
    {
      name: "Priya Sharma",
      age: 35,
      location: "Bangalore",
      story:
        "Single mother who started her own NGO after participating in our program",
      program: "Community Storytelling",
    },
  ];

  const upcomingEvents = [
    {
      title: "Youth Leadership Summit 2025",
      date: "Jan 15, 2025",
      location: "Mumbai Convention Center",
      description: "Annual gathering of young leaders and mentors",
      attendees: "500+ Expected",
    },
    {
      title: "Community Impact Workshop",
      date: "Jan 28, 2025",
      location: "Delhi University",
      description: "Hands-on workshop on creating social impact",
      attendees: "200+ Expected",
    },
    {
      title: "Storytelling for Change Masterclass",
      date: "Feb 10, 2025",
      location: "Bangalore Tech Park",
      description: "Advanced storytelling techniques for social entrepreneurs",
      attendees: "150+ Expected",
    },
  ];

  return (
    <SocialImpactSection>
      <Container maxWidth="lg">
        {/* Section Header */}
        <SectionHeader>
          <SectionBadge label="Social Impact" />
          <MainTitle variant="h2">
            Creating <AccentText>Lasting</AccentText> Social Change
          </MainTitle>
          <Subtitle variant="body1">
            Dedicated to empowering communities through education, mentorship,
            and storytelling initiatives that create meaningful and sustainable
            positive impact.
          </Subtitle>
        </SectionHeader>

        {/* Initiative Cards */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <InitiativeCard>
                  <InitiativeCardContent>
                    <IconContainer>
                      <IconComponent
                        sx={{
                          fontSize: 40,
                          color: "#e65100",
                        }}
                      />
                    </IconContainer>

                    <InitiativeTitle variant="h5">
                      {initiative.title}
                    </InitiativeTitle>

                    <ImpactText variant="h6">
                      {initiative.impact}
                    </ImpactText>

                    <InitiativeDescription variant="body2">
                      {initiative.description}
                    </InitiativeDescription>

                    <AchievementsContainer>
                      <AchievementsTitle variant="body2">
                        Key Achievements:
                      </AchievementsTitle>
                      {initiative.achievements.map((achievement, idx) => (
                        <AchievementItem key={idx} variant="body2">
                          {achievement}
                        </AchievementItem>
                      ))}
                    </AchievementsContainer>

                    <ProgressContainer>
                      <ProgressHeader>
                        <ProgressLabel variant="body2">
                          Progress
                        </ProgressLabel>
                        <ProgressValue variant="body2">
                          {initiative.progress}%
                        </ProgressValue>
                      </ProgressHeader>
                      <StyledLinearProgress
                        variant="determinate"
                        value={initiative.progress}
                      />
                    </ProgressContainer>
                  </InitiativeCardContent>
                </InitiativeCard>
              </Grid>
            );
          })}
        </Grid>

        {/* Transformation Stories */}
        <Box sx={{ mb: 10 }}>
          <SectionTitle variant="h4">
            Transformation Stories
          </SectionTitle>
          <Grid container spacing={4}>
            {transformationStories.map((story, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StoryCard>
                  <StoryHeader>
                    <StoryAvatar>
                      {story.name.charAt(0)}
                    </StoryAvatar>
                    <StoryInfo>
                      <StoryName variant="h6">
                        {story.name}, {story.age}
                      </StoryName>
                      <StoryLocation>
                        <LocationOn sx={{ fontSize: 16, color: "#666" }} />
                        <StoryLocationText variant="body2">
                          {story.location}
                        </StoryLocationText>
                      </StoryLocation>
                    </StoryInfo>
                  </StoryHeader>

                  <StoryQuote variant="body1">
                    "{story.story}"
                  </StoryQuote>

                  <ProgramChip
                    label={story.program}
                    size="small"
                  />
                </StoryCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Upcoming Events */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h4">
            Upcoming Events
          </SectionTitle>
          <Grid container spacing={4}>
            {upcomingEvents.map((event, index) => (
              <Grid item xs={12} md={4} key={index}>
                <EventCard>
                  <EventDate>
                    <CalendarToday sx={{ fontSize: 18, color: "#e65100" }} />
                    <EventDateText variant="body2">
                      {event.date}
                    </EventDateText>
                  </EventDate>

                  <EventTitle variant="h6">
                    {event.title}
                  </EventTitle>

                  <EventLocation>
                    <LocationOn sx={{ fontSize: 16, color: "#666" }} />
                    <EventLocationText variant="body2">
                      {event.location}
                    </EventLocationText>
                  </EventLocation>

                  <EventDescription variant="body2">
                    {event.description}
                  </EventDescription>

                  <EventAttendees variant="body2">
                    {event.attendees}
                  </EventAttendees>
                </EventCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Join Movement CTA */}
                {/* Join Movement CTA */}
        <CTACardMovement>
          <CTAIconBackground>
            <Favorite sx={{ fontSize: 200 }} />
          </CTAIconBackground>

          <CTAMovementContent>
            <CTAMovementTitle variant="h3">
              Join the Movement for Change
            </CTAMovementTitle>
            <CTAMovementDescription variant="body1">
              Be part of our growing community of change-makers. Together, we
              can create lasting impact and empower the next generation of
              leaders.
            </CTAMovementDescription>
            <CTAMovementButton
              variant="contained"
              size="large"
              startIcon={<People />}
            >
              Get Involved Today
            </CTAMovementButton>
          </CTAMovementContent>
        </CTACardMovement>
      </Container>
    </SocialImpactSection>
  );
};


export default Theme31SocialImpact;
