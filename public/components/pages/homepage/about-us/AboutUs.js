import styled from "@emotion/styled";
import ProgressCpn from "../../../_common/progress/Progress";

const AboutUs = () => {
  return (
    <SectionWrap>
      <ContentWrap>
        <Title>About Our Company</Title>
        <SubTitle>
          Providing your business with a quality IT service is our passion.
        </SubTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
          minim veniam, nostrud
        </Description>
        <ProgressWrap>
          <ProgressCpn
            percent={90}
            title="IT Consulting"
            showPercent
            color="#7B68EE"
          />
          <ProgressCpn
            percent={75}
            title="Virtual Workstation"
            showPercent
            color="#7B68EE"
          />
          <ProgressCpn
            percent={80}
            title="Managed IT Service"
            showPercent
            color="#7B68EE"
          />
        </ProgressWrap>
        <Button className="button button-secondary">Learn More</Button>
      </ContentWrap>
      <ImageWrap>
        <Image src="./img/about-us/about.jpg" alt="about-us" />
        <YearOfExp>
          <h2>23</h2>
          <p>YEARS EXPERIENCE</p>
        </YearOfExp>
      </ImageWrap>
    </SectionWrap>
  );
};

export default AboutUs;

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 16px;
  background-color: var(--section-background);

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
    font-size: 20px;
  }
`;
const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 16px;
  @media (min-width: 768px) {
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

const ProgressWrap = styled.div`
  margin-top: 32px;
`;
const ImageWrap = styled.div`
  position: relative;

  @media (min-width: 1024px) {
    flex: 1;
    padding-left: 80px;
  }
`;
const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 3px;
`;

const Button = styled.button`
  margin-top: 12px;
`;

const YearOfExp = styled.div`
  position: absolute;
  left: 25px;
  bottom: 25px;
  padding: 20px 40px;
  background-color: var(--white);
  border-bottom: 2px solid var(--orange);
  box-shadow: -1px 3px 20px 0px rgb(82 90 101 / 10%);

  h2 {
    font-size: 70px;
    font-weight: 700;
    line-height: 1.1;
    background: linear-gradient(to bottom right, #2e312e, var(--orange));
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
    color: var(--orange);
  }
`;
