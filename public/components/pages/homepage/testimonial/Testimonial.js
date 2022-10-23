import { useEffect } from "react";
import styled from "@emotion/styled";
import TestimonialCard from "../../../_common/card/TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IsElementInViewport } from "../../../../utils/CheckElementInViewport";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    speed: 2000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
        },
      },
    ],
  };

  return (
    <SectionWrap>
      <Title>Testimonial</Title>
      <SubTitle>What Our Clients Say</SubTitle>
      <Slider {...settings}>
        {what_our_customer_say.map((item) => (
          <TestimonialCard
            key={item.id}
            name={item.name}
            role={item.role}
            avatar={item.avatar}
            content={item.content}
            rating={item.rating}
          />
        ))}
      </Slider>
    </SectionWrap>
  );
};

export default Testimonial;

const what_our_customer_say = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.",
    name: "Zarah Burnett",
    role: "Business man",
    rating: 5,
    avatar: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.",
    name: "Saabir al-Obeid",
    role: "Business man",
    rating: 4.5,
    avatar: "https://picsum.photos/100/100",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.",
    name: "Steve Wills",
    role: "Business man",
    rating: 4.9,
    avatar: "https://picsum.photos/140/140",
  },
  {
    id: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.",
    name: "Nhat Hiep Tran",
    role: "Business man",
    rating: 4.6,
    avatar: "https://picsum.photos/80/80",
  },
];

const SectionWrap = styled.div`
  padding: 60px 16px;

  @media (min-width: 768px) {
    padding: 60px 32px;
  }
  @media (min-width: 1024px) {
    padding: 80px 60px;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--orange);
  text-align: center;
  margin-bottom: 16px;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;
const SubTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    font-size: 52px;
    margin-bottom: 80px;
  }
`;
