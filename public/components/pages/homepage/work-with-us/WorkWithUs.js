import styled from "@emotion/styled";

const WorkWithUs = () => {
  return (
    <Wrapper>
      <WorkWithUsWrap>
        <Title>Want To Work With Us?</Title>
        <SubTitle>Digitally transform and grow your business!</SubTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud consectetur voluptatem accusantium
          doloremque adipiscing elit.
        </Description>
        <ButtonWrap>
          <Button className="button button-secondary">Call Now</Button>
          <Button className="button button-primary">Contact Us</Button>
        </ButtonWrap>
      </WorkWithUsWrap>
    </Wrapper>
  );
};

export default WorkWithUs;

const Wrapper = styled.div`
  position: relative;
  background: url("./img/counter/banner-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 1;
  color: var(--white);

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    opacity: 0.6;
    background: #03030c;
  }
`;

const WorkWithUsWrap = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 70px 16px;
  text-align: center;
  gap: 32px;

  @media (min-width: 768px) {
    padding: 70px 32px;
  }
  @media (min-width: 1024px) {
    padding: 70px 200px;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--orange);
  text-align: center;
  margin-bottom: 8px;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;
const SubTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: var(--white);

  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 1024px) {
    font-size: 52px;
  }
  @media (min-width: 1440px) {
    padding: 0;
    padding: 0 150px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: var(--white);

  @media (min-width: 768px) {
    font-size: 20px;
    padding: 0 100px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
    padding: 0;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;

  & > *:not(:last-of-type) {
    margin-right: 12px;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const Button = styled.button``;
