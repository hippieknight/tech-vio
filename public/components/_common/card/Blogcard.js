import styled from "@emotion/styled";
import { FaUserTie, FaCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";

export default function BlogCard({ name, description, date, imgUrl }) {
  return (
    <Wrap>
      <ImageWrap>
        <Image src={imgUrl} alt="blog" />
      </ImageWrap>
      <Info>
        <Flex>
          <FaUserTie />
          <p>Author</p>
        </Flex>
        <Flex>
          <FaCalendarAlt />
          <p>{dayjs(date).format("DD-MMM-YYYY")}</p>
        </Flex>
      </Info>
      <TitleWrap>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </TitleWrap>
      <Readmore href="#">Read more</Readmore>
    </Wrap>
  );
}

const Wrap = styled.div`
  border-radius: 4px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  max-width: 300px;
  box-shadow: -1px 5px 20px 0px rgb(82 90 101 / 10%);
  cursor: pointer;

  @media (min-width: 1440px) {
    max-width: 350px;
  }
`;
const ImageWrap = styled.div``;
const Image = styled.img`
  max-width: 300px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  @media (min-width: 1440px) {
    max-width: 350px;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;

  & > *:not(:last-of-type) {
    margin-right: 24px;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-purple);

  svg {
    margin-right: 8px;
  }
`;

const TitleWrap = styled.div`
  padding: 0 16px 16px;
`;
const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;

  &:hover {
    color: var(--primary-purple);
  }
`;
const Description = styled.p`
  font-size: 16px;
  color: var(--text-description);
`;

const Readmore = styled.a`
  font-size: 16px;
  margin-left: 16px;
  font-weight: 700;
  color: var(--primary-purple);
  border-bottom: 2px solid var(--primary-purple);
`;
