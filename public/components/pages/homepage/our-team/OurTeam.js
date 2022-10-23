import styled from "@emotion/styled";
import TeamCard from "../../../_common/card/TeamCard";

const OurTeam = () => {
  return (
    <SectionWrap id="our-team">
      <Title>Team Member</Title>
      <SubTitle>Expert Team</SubTitle>
      <TeamWrap>
        {our_team.map((item) => (
          <TeamCard
            key={item.id}
            name={item.name}
            role={item.role}
            avtUrl={item.avtUrl}
          />
        ))}
      </TeamWrap>
    </SectionWrap>
  );
};

export default OurTeam;

const our_team = [
  {
    id: 1,
    name: "Ava Farrington",
    avtUrl: "./img/our-team/team-1.jpg",
    role: "Founder, CEO",
  },
  {
    id: 2,
    name: "Kevin Haley",
    avtUrl: "./img/our-team/team-2.jpg",
    role: "Co-founder, CTO",
  },
  {
    id: 3,
    name: "Alishia Fulton",
    avtUrl: "./img/our-team/team-3.jpg",
    role: "Chief creative officer",
  },
  {
    id: 4,
    name: "Lucas Martinez",
    avtUrl: "./img/our-team/team-4.jpg",
    role: "Project Manager",
  },
];

const SectionWrap = styled.div`
  padding: 60px 16px;
  background: var(--section-background);

  @media (min-width: 768px) {
    padding: 60px 32px;
  }
  @media (min-width: 1024px) {
    padding: 80px 60px;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--orange);
  text-align: center;
  margin-bottom: 16px;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 20px;
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

const TeamWrap = styled.div`
  display: grid;
  gap: 24px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`;
