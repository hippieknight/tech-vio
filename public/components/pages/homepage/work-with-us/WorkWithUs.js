import styled from "@emotion/styled";

const WorkWithUs = () => {
  return (
    <WorkWithUsWrap>
      <Title>Want To Work With Us?</Title>
      <SubTitle>Digitally transform and grow your business!</SubTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud consectetur voluptatem accusantium doloremque
        adipiscing elit.
      </Description>
      <ButtonWrap>
        <Button className="button button-secondary">Call Now</Button>
        <Button className="button button-primary">Contact Us</Button>
      </ButtonWrap>
    </WorkWithUsWrap>
  );
};

export default WorkWithUs;

const WorkWithUsWrap = styled.div`
  position: relative;
  padding: 70px 16px;
  background: url("./img/counter/banner-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
  gap: 32px;
  z-index: 1;

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
    justify-content: flex-start;
  }
`;

const Button = styled.button``;
