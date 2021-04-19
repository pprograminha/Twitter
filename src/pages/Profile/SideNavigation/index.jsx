import React from 'react'
import {
  Container,
  TopSide,
  Logo,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles'
import Button from "../../../components/Button";
const SideNavigation = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        <button>
          <HomeIcon />
          <span>Página Inicial</span>
        </button>
        <button>
          <BellIcon />
          <span>Notificações</span>
        </button>
        <button>
          <EmailIcon />
          <span>Mensagens</span>
        </button>
        <button>
          <FavoriteIcon />
          <span>Favoritados</span>
        </button>
        <button className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </button>
        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>
      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>Marcos Proença</strong>
          <span>@mz_pc</span>
        </ProfileData>
        <ExitIcon />
      </BotSide>
    </Container>
  )

}

export default SideNavigation