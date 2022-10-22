import { useCallback, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Line } from "rc-progress";

export default function ProgressCpn({
  percent,
  title,
  showPercent,
  strokeColor,
}) {
  const [percentProgress, setPercentProgress] = useState(0);

  const incresePercent = useCallback(() => {
    const newPercent = percentProgress + 1;
    if (newPercent > percent) {
      clearTimeout();
      return;
    }
    setPercentProgress(newPercent);
    setTimeout(() => {
      incresePercent;
    }, 1000);
  }, [percent, percentProgress]);

  useEffect(() => {
    incresePercent();
  }, [incresePercent]);

  return (
    <Progress id="progress">
      <TitleAndPercent>
        <Title>{title}</Title>
        {showPercent && <Percent>{percentProgress}%</Percent>}
      </TitleAndPercent>
      <Line
        percent={percentProgress}
        strokeWidth={2}
        trailWidth={2}
        strokeColor={strokeColor}
      />
    </Progress>
  );
}

const Progress = styled.div`
  margin-bottom: 12px;
`;
const TitleAndPercent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--primary-purple);
  font-size: 16px;
  font-weight: 700;
`;
const Title = styled.p``;
const Percent = styled.p``;
