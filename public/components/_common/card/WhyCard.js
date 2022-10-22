import styled from "@emotion/styled";

const ProvideCard = ({ name }) => {
  return (
    <CardWrap>
      <Name>{name}</Name>
    </CardWrap>
  );
};

export default ProvideCard;

const CardWrap = styled.div`
  position: relative;
  padding: 16px;
  border-left: 2px solid var(--primary-purple);
  border-radius: 5px;
  box-shadow: -1px 3px 20px 0px rgb(82 90 101 / 10%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -2px;
    width: 0;
    height: 100%;
    border-radius: 5px;
    background-color: var(--primary-purple);
  }

  &:hover {
    color: var(--white);

    &::before {
      width: 100%;
      transition: 0.4s;
      z-index: -1;
    }
  }
`;
const Name = styled.p`
  font-size: 18px;
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
