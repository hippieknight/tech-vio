import styled from "@emotion/styled";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function TeamCard({ name, role, avtUrl }) {
  return (
    <Wrap>
      <ImageWrap>
        <Image src={avtUrl} alt="our-team" />
        <SocialWrap id="social">
          <a href="#" type="content">
            <FaFacebookF />
          </a>
          <a href="#" type="content">
            <FaTwitter />
          </a>
          <a href="#" type="content">
            <FaLinkedin />
          </a>
        </SocialWrap>
      </ImageWrap>
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Wrap>
  );
}

const Wrap = styled.div`
  text-align: center;
`;

const SocialWrap = styled.div`
  width: 80px;
  display: none;
  position: absolute;
  top: 50%;
  left: calc(50% - 40px);

  svg {
    color: var(--white);
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const ImageWrap = styled.div`
  max-width: 300px;
  position: relative;
  border-radius: 4px;
  margin-bottom: 16px;

  &::before {
    content: "";
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:hover {
    &::before {
      opacity: 1;
      transition: 0.5;
      border-radius: 4px;
    }

    #social {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const Image = styled.img`
  max-width: 300px;
  object-fit: cover;
  border-radius: 4px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
const Role = styled.p`
  font-size: 16px;
  color: var(--primary-purple);
`;
