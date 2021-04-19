import React from "react";
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
  UserFeed,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
  Feed,
  Tab,
  Tweets,
  Tweet,
  Retweeted,
  FixedIcon,
  Body,
  Avatar2,
  Content,
  Header2,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  Dot,
} from "./styles";

export default function Main() {
  return (
    <>
      <Container>
        <Header>
          <button>
            <BackIcon />
          </button>
          <ProfileInfo>
            <strong>Marcos Proença</strong>
            <span>612 Tweets</span>
          </ProfileInfo>
        </Header>
        <UserFeed>
          <Banner>
            <Avatar></Avatar>
          </Banner>
          <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
            <h1>Marcos Proença</h1>
            <h2>@mz_pc</h2>
            <p>
              Developer at
            <a href="http://www.google.com">@W</a>
            </p>
            <ul>
              <li>
                <LocationIcon />
                São Paulo, Brasil
            </li>
              <li>
                <CakeIcon />
                Nascido(a) em 12 de setembro de 2003
            </li>
            </ul>
            <Followage>
              <span>
                seguindo <strong>14</strong>
              </span>
              <span>
                <strong>2</strong> seguidores
            </span>
            </Followage>
          </ProfileData>
          <Feed>
            <Tab>Tweets</Tab>
            <Tweets>
              <Tweet>
                <Retweeted>
                  <FixedIcon />
                Você retweetou
            </Retweeted>
                <Body>
                  <Avatar2 />
                  <Content>
                    <Header2>
                      <strong>Marcos Proença</strong>
                      <span>@mz_pc</span>
                      <Dot />
                      <time>17 de jun</time>
                    </Header2>
                    <Description>Lindinho</Description>
                    <ImageContent />
                    <Icons>
                      <Status>
                        <CommentIcon />
                            24
                        </Status>
                      <Status>
                        <RetweetIcon />1
                        </Status>
                      <Status>
                        <LikeIcon />
                            15
                        </Status>
                    </Icons>
                  </Content>
                </Body>
              </Tweet>
            </Tweets>
          </Feed>
        </UserFeed>
        <button>
          <HomeIcon className="active" />
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
        </button>
      </Container>
    </>
  );
}
