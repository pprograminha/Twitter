import styled, { css } from 'styled-components'
import {
    Home,
    Notifications,
    Email,
    FavoriteBorder,
    Person,
    ExitToApp,
    Retweet,
} from "../../../styles/GlobalIcons";

export const Container = styled.div`
    display: none;
    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 20px 20px;

        max-height: 100vh;
        overflow-y: auto;
    }
`;
export const TopSide = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    @media (min-width: 1280px) {
        align-items: flex-start;
    }
    > button {
      display: flex;
      flex-shrink: 0;
      > span {
          display: none;
      }
      margin-bottom: 20px;
      user-select: none;

      cursor: pointer;
      @media screen and (min-width: 1280px) {
          > span {
              display: inline;
              margin-left: 13px;

              font-weight: bold;
              font-size: 19px;
          }
      }
      &:hover,
      &.active {
          > svg {
              fill: var(--twitterRed);
          }
          > span {
              color: var(--twitterRed);
          }
      }

      & ~ button:last-of-type {
          margin-top: 35px;

          width: 40px;
          height: 40px;

          > span {
              display: none;
          }
          @media (min-width: 1280px) {
              width: 100%;
              height: auto;
              > span {
                  display: inline;
              }
          }
      }
    }
`;
export const Logo = styled(Retweet)`
    width: 41px;
    height: 41px;

    fill: var(--twitterRed);

    margin-bottom: 20px;

`;
export const BotSide = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
    > svg {
        &.active,
        &:hover {
            fill: var(--twitterRed);
        }
        cursor: pointer;
    }
`;
export const Avatar = styled.div`
    margin-top: 25px;
    width: 40px;
    height: 40px;

    flex-shrink: 0;
    border-radius: 50%;
    background-color: var(--gray);
`;
export const ProfileData = styled.div`
    display: none;

    @media (min-width: 1280px) {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        > span {
            color: var(--gray);
        }
    }
`;

const cssIcon = css`
    flex-shrink: 0;
    width: 30px;
    height: 30px;
`;

export const HomeIcon = styled(Home)`
    ${cssIcon}
`;
export const BellIcon = styled(Notifications)`
    ${cssIcon}
`;
export const EmailIcon = styled(Email)`
    ${cssIcon}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
    ${cssIcon}
`;
export const ProfileIcon = styled(Person)`
    ${cssIcon}
`;
export const ExitIcon = styled(ExitToApp)`
    display: none;
    @media (min-width: 1280px) {
        margin-left: 25px;

        display: inline-block;
        width: 25px;
        height: 25px;

        &:hover {
            > path {
                color: var(--twitterRed);
            }
        }
    }
`;
