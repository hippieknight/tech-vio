import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";

export default function BreadCrumb() {
  const router = useRouter();
  const routes = router.pathname.split("/");

  return (
    <Wrap>
      {routes.map((route) => {
        if (route === "")
          return (
            <Link href="/" type="content">
              <p>Home</p>
            </Link>
          );
        else
          return (
            <Link href={route} type="content">
              <p>{route.split("-").join(" ")}</p>
            </Link>
          );
      })}
    </Wrap>
  );
}

const Wrap = styled.div`
  color: var(--white);
  display: flex;
  justify-content: center;

  & > *:not(:first-of-type) {
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      margin-top: 8px;
      background-color: var(--primary-purple);
      border-radius: 50px;
      margin-right: 8px;
    }
  }

  p {
    color: var(--white);
    text-transform: capitalize;
    font-size: 18px;
    cursor: pointer;

    &:not(:last-of-type) {
      margin-right: 8px;
    }

    &:hover {
      color: var(--primary-purple);
    }

    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;
