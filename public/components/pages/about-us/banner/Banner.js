import styled from "@emotion/styled";
import BreadCrumb from "../../../_common/breadcrumb/BreadCrumb";

const BannerAboutUs = ({sectionTitle}) => {
  return (
    <Wrapper>
      <SectionWrap>
        <PageName>{sectionTitle}</PageName>
        <BreadCrumb />
      </SectionWrap>
    </Wrapper>
  );
};

export default BannerAboutUs;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-image: url("./img/banner/about-us/banner-bg.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  margin: -80px auto 0;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #030821;
    left: 0;
    top: 0;
    opacity: 0.5;
    z-index: -1;
  }

  @media (min-width: 1024px) {
    height: 500px;
    margin-top: -120px;
  }
`;
const SectionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PageName = styled.h1`
  color: var(--white);
  font-size: 35px;
  text-align: center;
  margin-top: 30px;
  @media (min-width: 1024px) {
    font-size: 42px;
    margin-top: 80px;
    margin-bottom: 16px;
  } ;
`;
