import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Star, CalendarMonth } from "@mui/icons-material";
import {
  SpeakingSection,
  SpeakingContainer,
  SectionHeader,
  SectionBadge,
  MainTitle,
  AccentText,
  SectionDescription,
  CountersContainer,
  CounterItem,
  CounterNumber,
  CounterLabel,
  TopicsSection,
  TopicsTitle,
  TopicCard,
  TopicText,
  WhyChooseSection,
  WhyChooseTitle,
  WhyChooseItem,
  WhyChooseContent,
  WhyChooseItemTitle,
  WhyChooseItemDescription,
  TestimonialsSection,
  TestimonialsTitle,
  TestimonialCard,
  TestimonialRating,
  TestimonialFeedback,
  TestimonialAuthor,
  TestimonialAvatar,
  TestimonialAuthorInfo,
  TestimonialAuthorName,
  TestimonialAuthorPosition,
  TestimonialAuthorLocation,
  CTACard,
  CTABackground,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButtonGroup,
  CTAPrimaryButton,
  CTASecondaryButton,
} from "./styles";

const Theme31Speaking = () => {
  // Animated counter hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
  };

  const talksCount = useCounter(500);
  const audienceCount = useCounter(1000000);
  const citiesCount = useCounter(50);
  const yearsCount = useCounter(15);

  const speakingTopics = [
    "Leadership & Personal Development",
    "Media & Communication Excellence",
    "Social Impact & Change Management",
    "Youth Empowerment & Mentorship",
    "Storytelling for Impact",
    "Career Transformation Strategies",
  ];

  const whyChoosePoints = [
    {
      title: "Proven Track Record",
      description:
        "500+ successful speaking engagements across diverse industries and audiences",
    },
    {
      title: "Authentic Storytelling",
      description:
        "Real experiences from 15+ years in media and social change work",
    },
    {
      title: "Interactive Approach",
      description:
        "Engaging sessions that inspire action and lasting behavioral change",
    },
    {
      title: "Customized Content",
      description:
        "Tailored presentations that align with your organization's goals and values",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, Tech Innovations Ltd",
      location: "Mumbai",
      rating: 5,
      feedback:
        "Gopinath's keynote transformed our team's perspective on leadership. His authentic approach and powerful storytelling left a lasting impact.",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Principal, St. Mary's College",
      location: "Delhi",
      rating: 5,
      feedback:
        "An extraordinary speaker who connects deeply with young minds. Our students were inspired to pursue their dreams with renewed vigor.",
    },
    {
      name: "Amit Patel",
      position: "HR Director, Global Corp",
      location: "Bangalore",
      rating: 5,
      feedback:
        "Best motivational session we've had. Gopinath's insights on personal transformation were exactly what our employees needed.",
    },
  ];

  return (
    <SpeakingSection>
      <SpeakingContainer maxWidth="lg">
        {/* Section Header */}
        <SectionHeader>
          <SectionBadge label="Motivational Speaking" />
          <MainTitle variant="h2">
            Inspire. <AccentText>Motivate.</AccentText> Transform.
          </MainTitle>
          <SectionDescription>
            Delivering powerful keynotes and workshops that motivate individuals
            and organizations to achieve their highest potential through
            authentic storytelling and actionable insights.
          </SectionDescription>
        </SectionHeader>

        {/* Animated Counters */}
        <CountersContainer>
          <Grid container spacing={4}>
            <Grid item xs={6} md={3}>
              <CounterItem>
                <CounterNumber variant="h2" sx={{ color: "#1054aa" }}>
                  {talksCount}+
                </CounterNumber>
                <CounterLabel variant="h6">Talks Delivered</CounterLabel>
              </CounterItem>
            </Grid>
            <Grid item xs={6} md={3}>
              <CounterItem>
                <CounterNumber variant="h2" sx={{ color: "#e65100" }}>
                  {audienceCount >= 1000000
                    ? "1M+"
                    : `${Math.floor(audienceCount / 1000)}K+`}
                </CounterNumber>
                <CounterLabel variant="h6">Audience Reached</CounterLabel>
              </CounterItem>
            </Grid>
            <Grid item xs={6} md={3}>
              <CounterItem>
                <CounterNumber variant="h2" sx={{ color: "#f57c00" }}>
                  {citiesCount}+
                </CounterNumber>
                <CounterLabel variant="h6">Cities Covered</CounterLabel>
              </CounterItem>
            </Grid>
            <Grid item xs={6} md={3}>
              <CounterItem>
                <CounterNumber variant="h2" sx={{ color: "#1054aa" }}>
                  {yearsCount}+
                </CounterNumber>
                <CounterLabel variant="h6">Years Experience</CounterLabel>
              </CounterItem>
            </Grid>
          </Grid>
        </CountersContainer>

        {/* Speaking Topics */}
        <TopicsSection>
          <TopicsTitle variant="h4">Key Speaking Topics</TopicsTitle>
          <Grid container spacing={2}>
            {speakingTopics.map((topic, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <TopicCard>
                  <TopicText variant="body1">{topic}</TopicText>
                </TopicCard>
              </Grid>
            ))}
          </Grid>
        </TopicsSection>

        {/* Why Choose Gopinath */}
        <WhyChooseSection>
          <WhyChooseTitle variant="h4">Why Choose Gopinath?</WhyChooseTitle>
          <Grid container spacing={4}>
            {whyChoosePoints.map((point, index) => (
              <Grid item xs={12} md={6} key={index}>
                <WhyChooseItem>
                  <Star sx={{ color: "#f57c00", fontSize: 24, mt: 0.5 }} />
                  <WhyChooseContent>
                    <WhyChooseItemTitle variant="h6">
                      {point.title}
                    </WhyChooseItemTitle>
                    <WhyChooseItemDescription variant="body1">
                      {point.description}
                    </WhyChooseItemDescription>
                  </WhyChooseContent>
                </WhyChooseItem>
              </Grid>
            ))}
          </Grid>
        </WhyChooseSection>

        {/* Testimonials */}
        <TestimonialsSection>
          <TestimonialsTitle variant="h4">
            Client Testimonials
          </TestimonialsTitle>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <TestimonialCard>
                  <TestimonialRating value={testimonial.rating} readOnly />
                  <TestimonialFeedback variant="body1">
                    "{testimonial.feedback}"
                  </TestimonialFeedback>
                  <TestimonialAuthor>
                    <TestimonialAvatar>
                      {testimonial.name.charAt(0)}
                    </TestimonialAvatar>
                    <TestimonialAuthorInfo>
                      <TestimonialAuthorName variant="subtitle1">
                        {testimonial.name}
                      </TestimonialAuthorName>
                      <TestimonialAuthorPosition variant="body2">
                        {testimonial.position}
                      </TestimonialAuthorPosition>
                      <TestimonialAuthorLocation variant="body2">
                        {testimonial.location}
                      </TestimonialAuthorLocation>
                    </TestimonialAuthorInfo>
                  </TestimonialAuthor>
                </TestimonialCard>
              </Grid>
            ))}
          </Grid>
        </TestimonialsSection>

        {/* CTA Section */}
        <CTACard>
          <CTABackground>
            <CalendarMonth sx={{ fontSize: 200 }} />
          </CTABackground>

          <CTAContent>
            <CTATitle variant="h3">Ready to Inspire Your Team?</CTATitle>
            <CTADescription variant="body1">
              Book a transformative speaking session that will motivate your
              audience and drive meaningful change in your organization.
            </CTADescription>
            <CTAButtonGroup>
              <CTAPrimaryButton variant="contained" size="large">
                Book a Speaking Session
              </CTAPrimaryButton>
              <CTASecondaryButton variant="outlined" size="large">
                View Speaking Topics
              </CTASecondaryButton>
            </CTAButtonGroup>
          </CTAContent>
        </CTACard>
      </SpeakingContainer>
    </SpeakingSection>
  );
};

export default Theme31Speaking;
