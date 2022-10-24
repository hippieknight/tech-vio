import styled from "@emotion/styled";

const HomeBanner = () => {
  return (
    <Wrapper>
      <Wrap>
        <ContentWrap>
          <Title>IT Solutions & Business Services Company</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, magna
            aliqua. ipsum is simply dummy text of the printing.
          </SubTitle>
          <ButtonWrap>
            <Button className="button button-primary">About Us</Button>
            <Button className="button button-secondary">Contact Us</Button>
          </ButtonWrap>
        </ContentWrap>
        <Image src="./img/banner/homepage/home-font.png" alt="main-image" />
        <BottomImg src="./img/banner/homepage/home-bottom-shape.png" alt="" />
      </Wrap>
    </Wrapper>
  );
};

export default HomeBanner;

const Wrapper = styled.div`
  background: linear-gradient(
    to bottom,
    #370b6f,
    #00429b,
    #006dba,
    #0095ce,
    #2dbcdc
  );
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 230px 32px 100px;

  max-width: 1440px;
  margin: -80px auto 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 220px 60px 150px;
    margin-top: -120px;
  }
`;
const ContentWrap = styled.div`
  padding: 0 16px;
  color: #fff;
  text-align: center;

  @media (min-width: 1024px) {
    flex: 1;
    text-align: left;
  }
`;
const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    font-size: 55px;
  }
`;
const SubTitle = styled.p`
  font-size: 16px;
  letter-spacing: 0.3px;
  line-height: 1.8;
  margin-bottom: 32px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;

  & > *:not(:last-of-type) {
    margin-right: 12px;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Button = styled.button``;

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  margin-top: 40px;

  @media (min-width: 1024px) {
    max-width: 50%;
    flex: 1;
    margin-top: 0;
  }
`;

const BottomImg = styled.img`
  position: absolute;
  left: 0;
  bottom: -2px;
  max-width: 100%;
`;
