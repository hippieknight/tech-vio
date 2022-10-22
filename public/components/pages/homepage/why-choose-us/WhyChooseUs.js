import { useEffect } from "react";
import styled from "@emotion/styled";
import { IsElementInViewport } from "../../../../utils/CheckElementInViewport";
import WhyCard from "../../../_common/card/WhyCard";

const WhyChooseUs = () => {
  useEffect(() => {
    const section = document.getElementById("why-choose-us");

    const TriggerAnimation = () => {
      if (IsElementInViewport(section)) {
        section.classList.add("animation-slideLeft");
      }
    };

    const RemoveAnimation = () => {
      section.classList.remove("animation-slideLeft");
    };
    window.addEventListener("scroll", TriggerAnimation);

    return () => {
      window.removeEventListener("scroll", RemoveAnimation);
    };
  }, []);

  return (
    <SectionWrap id="why-choose-us">
      <ImageWrap>
        <Image src="./img/why-choose-us/choose.jpg" alt="why-choose-us" />
      </ImageWrap>
      <ContentWrap>
        <Title>Why Choose Us?</Title>
        <SubTitle>
          Safeguard your brand with Cyber-Security & IT Solutions
        </SubTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Description>
        <WhyChooseWrap>
          {why_choose_us.map((item) => (
            <WhyCard key={item.id} {...item} />
          ))}
        </WhyChooseWrap>
      </ContentWrap>
    </SectionWrap>
  );
};

export default WhyChooseUs;

const why_choose_us = [
  { id: 1, name: "Remote It Assistance" },
  { id: 2, name: "Practice IT Management" },
  { id: 3, name: "Managed IT Service" },
  { id: 4, name: "Solving IT Problems" },
  { id: 5, name: "IT Security Services" },
  { id: 6, name: "Cloud Services" },
];

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 16px;

  @media (min-width: 768px) {
    padding: 60px 32px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 80px 60px;
  }
`;

const ContentWrap = styled.div`
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    margin-bottom: unset;
    margin-right: 40px;
    flex: 1;
  }
`;
const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;
const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;
const Description = styled.p`
  font-size: 14px;
  color: var(--text-description);
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const WhyChooseWrap = styled.div`
  margin-top: 24px;
  display: grid;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageWrap = styled.div`
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    flex: 1;
  }
`;
const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 3px;
`;
