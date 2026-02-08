import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import arah from "../../Assets/arah.jpg";
import miller from "../../Assets/miller.jpeg";
import michael from "../../Assets/michael.jpeg";
import emily from "../../Assets/emily.jpeg";
import robert from "../../Assets/robert.jpeg";

// Theme aligned with sc1.js (Atlas Crossings / global logistics)
const theme = {
  darkGreen: "#1b4d3e",
  darkGreenHover: "#2a6b5a",
  lightGreen: "#7CB342",
  lightGreenHover: "#8BC34A",
  lightGreenBg: "#A5D6A7",
  textLight: "#ffffff",
  textDark: "#2c3e50",
  textGray: "#5a6c7d",
  shadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  shadowMedium: "0 8px 16px rgba(0, 0, 0, 0.15)",
  shadowLarge: "0 12px 24px rgba(0, 0, 0, 0.2)",
};

// Testimonial data – global logistics / Atlas Crossings
const testimonials = [
  {
    name: "Sarah Gonzuela",
    feedback:
      "Atlas Crossings has transformed how we handle international freight. Their end-to-end logistics and real-time tracking give us complete visibility. Our supply chain has never been more reliable.",
    location: "New York, NY",
    imageUrl: arah,
    rating: 5,
  },
  {
    name: "Miller Temili",
    feedback:
      "We partner with Atlas Crossings for all our cross-border shipments. Their customs expertise and on-time delivery record are outstanding. A true partner in global logistics.",
    location: "Los Angeles, CA",
    imageUrl: miller,
    rating: 4.5,
  },
  {
    name: "Michael Harrington",
    feedback:
      "From booking to delivery, Atlas Crossings delivers excellence. Their 24/7 support and proactive updates make managing our fleet and shipments effortless. Highly recommend for transport logistics.",
    location: "Chicago, IL",
    imageUrl: michael,
    rating: 4,
  },
  {
    name: "Emily Davis",
    feedback:
      "Atlas Crossings is our go-to for global logistics. Real-time tracking, transparent pricing, and a team that actually cares about our deadlines. They've become an extension of our operations.",
    location: "Houston, TX",
    imageUrl: emily,
    rating: 5,
  },
  {
    name: "Robert Brown",
    feedback:
      "We've tried many logistics providers—Atlas Crossings stands out. Their commitment to innovation and reliability shows in every shipment. They've helped us scale our international reach with confidence.",
    location: "Miami, FL",
    imageUrl: robert,
    rating: 4.5,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} color={theme.lightGreen} />
      ))}
      {halfStar && <FaStarHalfAlt color={theme.lightGreen} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} color={theme.lightGreen} style={{ opacity: 0.6 }} />
      ))}
    </>
  );
};

// Wrapper section to match sc1 layout
const TestimonialsSection = styled.section`
  background: linear-gradient(180deg, #f0f4ef 0%, ${theme.white} 100%);
  padding: 80px 20px 100px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b4d3e' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 1;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: 100px 40px 120px;
  }
`;

const SectionHeading = styled.h2`
  font-size: 1.9rem;
  font-weight: 700;
  color: ${theme.textDark};
  text-align: center;
  margin-bottom: 25px;
  letter-spacing: -0.5px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 30px;
    letter-spacing: -1px;
  }
`;

const Separator = styled.div`
  width: 80px;
  height: 5px;
  background: linear-gradient(90deg, ${theme.lightGreen} 0%, ${theme.lightGreenHover} 100%);
  margin: 0 auto 50px;
  border-radius: 3px;
  box-shadow: ${theme.shadow};
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    width: 140px;
    height: 6px;
    margin-bottom: 60px;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 0 1rem;
  position: relative;
  z-index: 1;

  .slick-dots {
    bottom: -40px;

    li {
      margin: 0 6px;

      button:before {
        font-size: 10px;
        color: ${theme.lightGreen};
        opacity: 0.5;
      }

      &.slick-active button:before {
        color: ${theme.darkGreen};
        opacity: 1;
      }
    }
  }

  .slick-slide {
    padding: 0 10px;
    outline: none;
  }
`;

const TestimonialCard = styled.div`
  background: ${theme.white};
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: ${theme.shadowMedium};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(27, 77, 62, 0.08);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  min-height: 380px;

  &:hover {
    box-shadow: ${theme.shadowLarge};
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: 360px;
  }
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 1.25rem;
`;

const ProfileImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  margin-bottom: 1.25rem;
  object-fit: cover;
  border: 3px solid ${theme.lightGreenBg};
  box-shadow: ${theme.shadow};
`;

const Feedback = styled.p`
  font-size: 1.05rem;
  color: ${theme.textGray};
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.7;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Name = styled.h3`
  font-size: 1.2rem;
  color: ${theme.textDark};
  margin-bottom: 0.35rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Location = styled.p`
  font-size: 0.95rem;
  color: ${theme.textGray};
  font-weight: 400;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <TestimonialsSection>
      <SectionHeading>What Our Partners Say</SectionHeading>
      <Separator />
      <Container>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} aria-label={`Testimonial from ${testimonial.name}`}>
              <Stars>{renderStars(testimonial.rating)}</Stars>
              <ProfileImage src={testimonial.imageUrl} alt={`${testimonial.name}`} />
              <Feedback>&ldquo;{testimonial.feedback}&rdquo;</Feedback>
              <Name>{testimonial.name}</Name>
              <Location>{testimonial.location}</Location>
            </TestimonialCard>
          ))}
        </Slider>
      </Container>
    </TestimonialsSection>
  );
};

export default TestimonialSlider;
