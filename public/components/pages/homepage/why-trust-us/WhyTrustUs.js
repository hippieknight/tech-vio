import { useEffect } from "react";
import styled from "@emotion/styled";
import { IsElementInViewport } from "../../../../utils/CheckElementInViewport";
import WhyCard from "../../../_common/card/WhyCard";

const WhyTrustUs = () => {
  useEffect(() => {
    const section = document.getElementById("why-trust-us");

    const TriggerAnimation = () => {
      if (IsElementInViewport(section)) {
        section.classList.add("animation-slideUp");
      }
    };

    const RemoveAnimation = () => {
      section.classList.remove("animation-slideUp");
    };
    window.addEventListener("scroll", TriggerAnimation);

    return () => {
      window.removeEventListener("scroll", RemoveAnimation);
    };
  }, []);

  return (
    <Wrapper>
      <SectionWrap id="why-trust-us">
        <ContentWrap>
          <Title>Why Trust Us?</Title>
          <SubTitle>
            Achieve digital transformation for your retail business services
          </SubTitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <WhyChooseWrap>
            {why_trust_us.map((item) => (
              <WhyCard key={item.id} {...item} />
            ))}
          </WhyChooseWrap>
        </ContentWrap>
        <ImageWrap>
          <Image src="./img/why-choose-us/choose2.jpg" alt="why-trust-us" />
        </ImageWrap>
      </SectionWrap>
    </Wrapper>
  );
};

export default WhyTrustUs;

const why_trust_us = [
  { id: 1, name: "Protect your Business" },
  { id: 2, name: "Data Security" },
  { id: 3, name: "Running your Business" },
  { id: 4, name: "Network Security" },
  { id: 5, name: "Small Business Owners" },
  { id: 6, name: "Network Monitoring" },
];

const Wrapper = styled.div`
  color: var(--black);
`;

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 16px;
  max-width: 1320px;
  margin: 0 auto;

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
  color: var(--primary-purple);
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
