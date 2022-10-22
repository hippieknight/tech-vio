import { useState, useEffect } from "react";
import styled from "@emotion/styled";
//components
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
//hooks
import useMediaQuery from "../../../hooks/useMediaQuery";
import Link from "next/link";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const mobile = useMediaQuery(`(max-width: 1023px)`);

  const handleShowSidebar = () => {
    setShowSidebar(true);
  };
  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 150) {
        document.getElementById("header").classList.add("sticky");
      }
      if (window.scrollY <= 1) {
        document.getElementById("header").classList.remove("sticky");
      }
    };
  }, []);

  return (
    <HeaderWrap id="header">
      <Wrap>
        <a href="#" type="content">
          <LogoWrap>
            <img src="./img/logo.png" alt="logo" />
          </LogoWrap>
        </a>
        {mobile ? (
          <MobileNavbar className="mobile-nav">
            {!showSidebar ? (
              <FaBars onClick={handleShowSidebar} />
            ) : (
              <MdClose onClick={handleCloseSidebar} />
            )}

            <SidebarWrap className={`${showSidebar ? "show" : "hide"}`}>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">About us</NavLink>
              <NavLink href="#">Services</NavLink>
              <NavLink href="#">Projects</NavLink>
              <NavLink href="#">Pages</NavLink>
              <NavLink href="#">Blog</NavLink>
              <NavLink href="#">Contact</NavLink>
            </SidebarWrap>
          </MobileNavbar>
        ) : (
          <DesktopNavbar>
            <LinkWrap>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">About us</NavLink>
              <NavLink href="#">Services</NavLink>
              <NavLink href="#">Projects</NavLink>
              <NavLink href="#">Pages</NavLink>
              <NavLink href="#">Blog</NavLink>
              <NavLink href="#">Contact</NavLink>
            </LinkWrap>
            <ButtonWrap>
              <Button>Get It Support</Button>
            </ButtonWrap>
          </DesktopNavbar>
        )}
      </Wrap>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  background: linear-gradient(var(--dark-purple), var(--dark-blue));
  padding: 0 16px;
  height: 80px !important;
  top: -120px;
  transition: top 0.5s ease-in-out;
  z-index: 999;
  box-shadow: 0 2px 28px 0 rgb(0 0 0 / 6%);

  &.sticky {
    position: sticky;
    top: 0;
  }

  @media (min-width: 768px) {
    padding: 0 32px;
  }
  @media (min-width: 1024px) {
    padding: 0 60px;
  }
  @media (min-width: 1440px) {
    height: 120px !important;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 1320px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    & > *:not(:last-of-type) {
      margin-right: 120px;
    }
  }
  @media (min-width: 1440px) {
    height: 120px;
  }
`;
const LogoWrap = styled.div``;

const MobileNavbar = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: calc(50% - 15px);
    right: 0;
    width: 30px;
    height: 30px;
    color: var(--white);
  }
`;
const DesktopNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  a {
    font-weight: 700;
    font-size: 16px;
    @media (min-width: 1024px) {
      color: var(--white);

      &:not(:last-of-type) {
        margin-right: 24px;
      }
      &:hover {
        background: linear-gradient(
          to bottom right,
          var(--white),
          var(--orange)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &:nth-of-type(2n + 1) {
          background: linear-gradient(to top left, var(--white), var(--orange));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
`;

const SidebarWrap = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  width: 70vw;
  height: calc(100vh - 80px);
  right: -100%;
  top: 40px;
  padding: 40px 0;
  background-color: var(--white);
  z-index: 1;

  a {
    font-weight: 700;
    font-size: 16px;
  }

  & > * {
    padding: 0 20px 10px;
    &:not(:last-of-type) {
      margin-bottom: 24px;
      border-bottom: 1px dashed #c4c4c4;
    }
  }

  &.show {
    display: flex;
    transition: transform 1s;
    transform: translateX(0);
  }

  &.hide {
    display: none;
    transition: transform 1s;
    transform: translateX(100%);
  }

  @media (min-width: 768px) {
    right: -32px;
    & > * {
      padding-left: 40px;
    }
  }
`;

const LinkWrap = styled.div`
  margin-right: 80px;
`;
const NavLink = styled(Link)``;

const ButtonWrap = styled.div``;
const Button = styled.button`
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 500;
  padding: 12px 32px;
  background-color: var(--primary-purple);
  border-radius: 4px;
  border: none;
  color: var(--white);
  -webkit-transition: background 1s;
  -moz-transition: background 1s;
  -o-transition: background 1s;
  transition: background 1s;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to bottom right,
      var(--primary-purple),
      var(--dark-purple)
    );
  }
`;
