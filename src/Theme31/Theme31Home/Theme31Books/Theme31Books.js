import React from "react";
import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import {
  MenuBook,
  Star,
  AccessTime,
  Email,
  FormatQuote,
  TrendingUp,
} from "@mui/icons-material";
import {
  BooksSection,
  SectionHeader,
  SectionBadge,
  MainTitle,
  AccentText,
  Subtitle,
  BooksContainer,
  BookCard,
  BookCardMedia,
  BookPagesBadge,
  BookCardContent,
  BookCategory,
  BookTitle,
  BookSubtitle,
  BookDescription,
  BookRatingContainer,
  BookRatingText,
  BookPriceContainer,
  BookPrice,
  BookOrderButton,
  QuoteCard,
  QuoteBackground,
  QuoteContent,
  QuoteText,
  QuoteAuthor,
  ArticlesContainer,
  SectionTitle,
  ArticleCard,
  ArticleMeta,
  ArticleMetaText,
  ArticleTitle,
  ArticleExcerpt,
  NewsletterCard,
  NewsletterBackground,
  NewsletterContent,
  NewsletterTitle,
  NewsletterDescription,
  NewsletterForm,
  NewsletterTextField,
  NewsletterButton,
} from "./styles";

const Theme31Books = () => {
  const books = [
    {
      title: "Voices of Change",
      subtitle: "Stories That Transform Lives",
      description:
        "A collection of inspiring stories from individuals who overcame challenges to create positive impact in their communities.",
      rating: 4.8,
      reviews: 234,
      price: "₹299",
      category: "Biography & Memoir",
      pages: 280,
    },
    {
      title: "The Anchor's Journey",
      subtitle: "Behind the Camera Insights",
      description:
        "Personal experiences and lessons learned from 15+ years in television anchoring and media industry.",
      rating: 4.9,
      reviews: 189,
      price: "₹349",
      category: "Media & Communication",
      pages: 320,
    },
    {
      title: "Youth Rising",
      subtitle: "Empowering the Next Generation",
      description:
        "A practical guide for young professionals on leadership, career development, and creating meaningful change.",
      rating: 4.7,
      reviews: 156,
      price: "₹279",
      category: "Self-Help & Development",
      pages: 240,
    },
  ];

  const recentArticles = [
    {
      title: "The Power of Authentic Storytelling in Modern Media",
      excerpt:
        "How genuine narratives create deeper connections with audiences...",
      readTime: "5 min read",
      date: "Dec 15, 2024",
    },
    {
      title: "Building Resilience: Lessons from 15 Years in Television",
      excerpt:
        "Key strategies for overcoming challenges in high-pressure environments...",
      readTime: "7 min read",
      date: "Dec 10, 2024",
    },
    {
      title: "Mentoring the Next Generation of Change-Makers",
      excerpt:
        "How to effectively guide young professionals toward meaningful careers...",
      readTime: "6 min read",
      date: "Dec 5, 2024",
    },
  ];

  return (
    <BooksSection>
      <Container maxWidth="lg">
        {/* Section Header */}
        <SectionHeader>
          <SectionBadge label="Books & Writings" />
          <MainTitle variant="h2">
            Words That <AccentText>Inspire</AccentText> & Transform
          </MainTitle>
          <Subtitle variant="body1">
            Through books, articles, and thought leadership pieces, sharing
            insights on personal growth, media excellence, and creating positive
            social impact.
          </Subtitle>
        </SectionHeader>

        {/* Books Grid */}
        <BooksContainer>
          <SectionTitle variant="h4">
            Published Books
          </SectionTitle>
          <Grid container spacing={4}>
            {books.map((book, index) => (
              <Grid item xs={12} md={4} key={index}>
                <BookCard>
                  <BookCardMedia>
                    <MenuBook
                      sx={{ fontSize: 60, color: "white", opacity: 0.9 }}
                    />
                    <BookPagesBadge>
                      <Typography
                        variant="caption"
                        sx={{ color: "white", fontWeight: 600 }}
                      >
                        {book.pages} pages
                      </Typography>
                    </BookPagesBadge>
                  </BookCardMedia>

                  <BookCardContent>
                    <BookCategory
                      label={book.category}
                      size="small"
                    />

                    <BookTitle variant="h6">
                      {book.title}
                    </BookTitle>

                    <BookSubtitle variant="subtitle2">
                      {book.subtitle}
                    </BookSubtitle>

                    <BookDescription variant="body2">
                      {book.description}
                    </BookDescription>

                    <BookRatingContainer>
                      <Star sx={{ fontSize: 16, color: "#f57c00" }} />
                      <BookRatingText variant="body2">
                        {book.rating} ({book.reviews} reviews)
                      </BookRatingText>
                    </BookRatingContainer>

                    <BookPriceContainer>
                    
                      <BookPrice variant="h6">
                        {book.price}
                      </BookPrice>
                      <BookOrderButton
                        variant="contained"
                        size="small"
                      >
                        Order Now
                      </BookOrderButton>
                    </BookPriceContainer>
                  </BookCardContent>
                </BookCard>
              </Grid>
            ))}
          </Grid>
        </BooksContainer>

        {/* Quote Section */}
        <QuoteCard>
          <QuoteBackground>
            <FormatQuote sx={{ fontSize: 120 }} />
          </QuoteBackground>

          <QuoteContent>
            <QuoteText variant="h4">
              "Writing is my way of giving back to the world. Through each book,
              I aim to share not just stories, but tools for transformation that
              readers can apply in their own journeys toward success and
              fulfillment."
            </QuoteText>
            <QuoteAuthor variant="h6">
              - Gopinath, Author & Thought Leader
            </QuoteAuthor>
          </QuoteContent>
        </QuoteCard>

        {/* Recent Articles */}
        <ArticlesContainer>
          <SectionTitle variant="h4">
            Recent Articles & Insights
          </SectionTitle>
          <Grid container spacing={4}>
            {recentArticles.map((article, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ArticleCard>
                  <ArticleMeta>
                    <AccessTime sx={{ fontSize: 16, color: "#666" }} />
                    <ArticleMetaText variant="caption">
                      {article.readTime}
                    </ArticleMetaText>
                    <ArticleMetaText
                      variant="caption"
                      sx={{ ml: "auto" }}
                    >
                      {article.date}
                    </ArticleMetaText>
                  </ArticleMeta>

                  <ArticleTitle variant="h6">
                    {article.title}
                  </ArticleTitle>

                  <ArticleExcerpt variant="body2">
                    {article.excerpt}
                  </ArticleExcerpt>
                </ArticleCard>
              </Grid>
            ))}
          </Grid>
        </ArticlesContainer>

        {/* Newsletter Signup */}
        <NewsletterCard>
          <NewsletterBackground />
          <NewsletterContent>
            <NewsletterTitle variant="h4">
              Stay Updated with New Releases
            </NewsletterTitle>
            <NewsletterDescription variant="body1">
              Get notified about new books, articles, and exclusive content
              delivered directly to your inbox.
            </NewsletterDescription>

            <NewsletterForm>
              <NewsletterTextField
                placeholder="Enter your email"
                variant="outlined"
              />
              <NewsletterButton
                variant="contained"
                size="large"
                startIcon={<Email />}
              >
                Subscribe
              </NewsletterButton>
            </NewsletterForm>
          </NewsletterContent>
        </NewsletterCard>
      </Container>
    </BooksSection>
    // </BooksSection>
  );
};

export default Theme31Books;
