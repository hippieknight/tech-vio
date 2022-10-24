import styled from "@emotion/styled";
import BlogCard from "../../../_common/card/Blogcard";

const Blog = () => {
  return (
    <Wrapper>
      <SectionWrap>
        <Title>Blog & Article</Title>
        <SubTitle>Recent Blog</SubTitle>
        <BlogWrap>
          {blog.map((item) => (
            <BlogCard
              key={item.id}
              name={item.name}
              date={item.date}
              description={item.description}
              imgUrl={item.imgUrl}
            />
          ))}
        </BlogWrap>
      </SectionWrap>
    </Wrapper>
  );
};

export default Blog;

const blog = [
  {
    id: 1,
    date: "17/06/2021",
    name: "Planning for a Safe Return to the Workplace IT Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt",
    imgUrl: "./img/blog/blog-1.jpg",
  },
  {
    id: 2,
    date: "25/06/2021",
    name: "Announcing Our New Smiles for Success Charity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt",
    imgUrl: "./img/blog/blog-2.jpg",
  },
  {
    id: 3,
    date: "20/07/2021",
    name: "Machine Learning Applications for Every Industry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt",
    imgUrl: "./img/blog/blog-3.jpg",
  },
];

const Wrapper = styled.div`
  background-color: var(--white);
  color: var(--black);
`;
const SectionWrap = styled.div`
  padding: 60px 16px;
  max-width: 1320px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 60px 32px;
  }
  @media (min-width: 1024px) {
    padding: 80px 60px;
  }
`;

const BlogWrap = styled.div`
  display: grid;
  gap: 30px;
  justify-items: center;

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
    & > *:nth-of-type(2n + 1) {
      justify-self: end;
    }
    & > *:nth-of-type(2n) {
      justify-self: start;
    }
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--orange);
  text-align: center;
  margin-bottom: 8px;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;
const SubTitle = styled.p`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    font-size: 52px;
    margin-bottom: 80px;
  }
`;
