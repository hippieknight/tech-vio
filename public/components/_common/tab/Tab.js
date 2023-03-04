import styled from "@emotion/styled";

export default function Tab({tabs}){
    return <Wrap>
        {tabs.map((tab)=><Tab key={tab.id}>{tab.name}</Tab>)}
    </Wrap>
}

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`