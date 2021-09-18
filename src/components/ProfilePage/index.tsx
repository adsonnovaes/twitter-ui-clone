import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage
 } from './styles'; 

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        {/* <EditButt outlined >Editar perfil</EditButt> */}

        <h1>Adson Novaes</h1>
        <h2>@novaesadson</h2>
 
        <p>
          Developer FullStack <a href="https://github.com/adsonnovaes" >@adsonnovaes</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Petrolândia, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 23 de janeiro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>

      </ProfileData>

    </Container>
  );
}

export default ProfilePage;