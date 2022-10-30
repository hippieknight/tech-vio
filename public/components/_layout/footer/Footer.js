import styled from "@emotion/styled";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdOutlinePhoneInTalk, MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <Wrap>
      <SubscribeForm>
        <Content>
          <Title>Sign Up Our Newsletter</Title>
          <SubTitle>
            We Offer An Informative Monthly Technology Newsletter - Check It
            Out.
          </SubTitle>
        </Content>
        <Form>
          <input type="text" placeholder="Enter your email..." />
          <button className="button button-secondary">Subscribe Now</button>
        </Form>
      </SubscribeForm>
      <Grid>
        <Column>
          <Section>About Us</Section>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco consectetur
            laboris.
            <Social>
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedin />
            </Social>
          </Info>
        </Column>
        <Column>
          <Section>Our Services</Section>
          <Info>
            <p>IT Solution</p>
            <p>Web Development</p>
            <p>Networking Services</p>
            <p>SEO Optimization</p>
            <p>App Optimization</p>
          </Info>
        </Column>
        <Column>
          <Section>Useful Links</Section>
          <Info>
            <p>About Us</p>
            <p>Case Study</p>
            <p>Contact Us</p>
            <p>Private Policy</p>
            <p>Terms & Conditions</p>
          </Info>
        </Column>
        <Column>
          <Section>Contact Info</Section>
          <Info>
            <p>
              <MdOutlinePhoneInTalk /> 0984523175
            </p>
            <p>
              <MdOutlineEmail /> hiepsimattroi1807@gmail.com
            </p>
            <p>
              <FiMapPin /> Street 8, Linh Trung, Thu Duc
            </p>
          </Info>
        </Column>
      </Grid>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  background-color: #1c1c23;
  padding: 40px 16px 0;

  @media (min-width: 768px) {
    padding: 40px 32px 0;
  }

  @media (min-width: 1024px) {
    padding: 60px 60px 0;
  }
`;

const SubscribeForm = styled.div`
  padding: 12px 0 52px;
  border-bottom: 1px solid #777;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > *:not(:last-of-type) {
      margin-right: 32px;
    }
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 12px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
`;

const Content = styled.div`
  margin-bottom: 24px;
  flex: 1;
`;
const Form = styled.div`
  flex: 1;

  input {
    width: 100%;
    padding: 16px;
    border-radius: 4px;
    border: none;
    margin-bottom: 12px;

    &:focus {
      outline: none;
    }
  }
  button {
    padding: 16px 32px;
    height: 48px;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    input {
      width: 60%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  padding: 60px 0;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr 2fr;
  }
`;
const Column = styled.div`
  color: #fff;
`;
const Section = styled.p`
  font-size: 19px;
  font-weight: 700;
  padding-bottom: 4px;
  margin-bottom: 20px;
  border-bottom: 1px solid #777;
`;
const Info = styled.div`
  display: grid;
  gap: 8px;
  font-size: 15px;
  line-height: 1.8;
  letter-spacing: 0.03px;

  p {
    display: flex;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }
`;

const Social = styled.div`
  svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;
