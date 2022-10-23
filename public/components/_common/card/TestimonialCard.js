import styled from "@emotion/styled";
import StarRatings from "react-star-ratings";

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  avatar,
}) {
  return (
    <Wrap>
      <StarRatings
        rating={rating}
        starSpacing="4px"
        starDimension="20px"
        starRatedColor="#FF5E28"
      />
      <Content>{content}</Content>
      <Avatar src={avatar} alt="testimonial" />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin: 0 12px;
  background: var(--section-background);
  border-radius: 4px;
`;

const Content = styled.p`
  font-size: 16px;
  text-align: center;
  font-style: italic;
  color: var(--text-description);
  margin-bottom: 16px;
  margin-top: 8px;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50px;
  border: 5px solid var(--white);
  margin-bottom: 16px;
  border-bottom-color: var(--primary-purple);
  border-left-color: var(--primary-purple);
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;
const Role = styled.p`
  font-size: 15px;
`;
