import styled from "@emotion/styled";

export default function RecentWorks(){
    return <Wrapper>
        <ContentWrap>
        <Title>Recent works</Title>
          <SubTitle>
            Our portfolio
          </SubTitle>
        </ContentWrap>
    </Wrapper>
} 

const Wrapper = styled.div`
    background-color: var(--white);
`
const ContentWrap = styled.div`
    max-width: 1320px;
    margin: 0 auto;
`

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 16px;
  text-align: center;

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
  color: var(--black);
  margin-bottom: 16px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;