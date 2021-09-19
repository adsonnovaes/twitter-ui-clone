import React from 'react';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
 } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Tweeter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>{'Lorem ipson ad met sit'.repeat(90)}</p>
      </Body>
    </Container>
  );
}

export default SideBar;