import React from 'react';
import FollowSuggestion from '../FollowSuggestion';
import List from '../List';

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
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion
              name="Luiz Batanero"
              nickname="@luizbatanero"
            />,
            <FollowSuggestion 
              name="Luke Morales" 
              nickname="@lukemorales" 
            />,
            <FollowSuggestion
              name="Camila Magalhães"
              nickname="@camilaamgl"
            />,
          ]}
        />

        <List
          title="Talvez você curta"
          elements={[
            <h1>Teste1</h1>,
            <h1>Teste2</h1>,
            <h1>Teste3</h1>,
          ]}
        />
      </Body>
    </Container>
  );
}

export default SideBar;