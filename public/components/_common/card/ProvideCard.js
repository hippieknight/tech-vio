import styled from "@emotion/styled";

const ProvideCard = ({ name, description, icon }) => {
  return (
    <CardWrap>
      {icon}
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Readmore href="#">Read more</Readmore>
    </CardWrap>
  );
};

export default ProvideCard;

const CardWrap = styled.div`
  padding: 35px 30px;
  box-shadow: 5px 7px 15px 2px rgb(82 90 101 / 12%);
  border-radius: 4px;

  svg {
    width: 55px;
    height: 55px;
    color: var(--orange);
    margin-bottom: 40px;
    transition: transform 0.5s;
    transform: rotateY(0deg);
  }

  &:hover {
    transform: translateY(-10px);
    transition: transform 0.5s;
    svg {
      transition: transform 0.5s;
      transform: rotateY(180deg);
    }
  }
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;
const Description = styled.p`
  font-size: 16px;
  color: var(--text-description);
  margin-bottom: 16px;
`;

const Readmore = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: var(--orange);
  border-bottom: 2px solid var(--orange);
`;
