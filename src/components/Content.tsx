import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0.65rem;
`;

const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

interface IContentProps {
  currentXP: number;
}

export default function Content(props: IContentProps) {
  const { currentXP } = props;

  return (
    <Container>
      <Title>OSRS Incremental v1.0</Title>
      Exp/h: {currentXP}
    </Container>
  );
}
