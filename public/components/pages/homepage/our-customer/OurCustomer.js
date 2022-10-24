import styled from "@emotion/styled";

const OurCustomer = () => {
  return (
    <Wrapper>
      <SectionWrap>
        <Title>TRUSTED BY OVER 40,000</Title>
        <SubTitle>Our Customers</SubTitle>
        <Animation>
          <CustomerWrap>
            {our_customers.map((item) => (
              <Image key={item.id} src={item.imgUrl} alt="our-customer" />
            ))}
          </CustomerWrap>
          <CustomerWrap>
            {our_customers.map((item) => (
              <Image key={item.id} src={item.imgUrl} alt="our-customer" />
            ))}
          </CustomerWrap>
        </Animation>
      </SectionWrap>
    </Wrapper>
  );
};

export default OurCustomer;

const our_customers = [
  { id: 1, imgUrl: "./img/our-customer/client-1.png" },
  { id: 2, imgUrl: "./img/our-customer/client-2.png" },
  { id: 3, imgUrl: "./img/our-customer/client-3.png" },
  { id: 4, imgUrl: "./img/our-customer/client-4.png" },
  { id: 5, imgUrl: "./img/our-customer/client-5.png" },
  { id: 6, imgUrl: "./img/our-customer/client-6.png" },
  { id: 7, imgUrl: "./img/our-customer/client-7.png" },
  { id: 8, imgUrl: "./img/our-customer/client-8.png" },
];

const Wrapper = styled.div`
  background-color: var(--section-background);
  color: var(--black);
`;
const SectionWrap = styled.div`
  padding: 60px 0;
  max-width: 1320px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 60px 0;
  }
  @media (min-width: 1024px) {
    padding: 80px 0;
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
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    font-size: 52px;
    margin-bottom: 60px;
  }
`;
const Animation = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
`;
const CustomerWrap = styled.div`
  display: flex;
  transform: translateX(-100%);

  & > * {
    margin-left: 80px;
  }

  &:not(:last-of-type) {
    margin-left: 80px;
  }

  @keyframes slideLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  animation: slideLeft 10s linear infinite;
`;
const Image = styled.img`
  max-width: 164px;
  object-fit: cover;
`;
