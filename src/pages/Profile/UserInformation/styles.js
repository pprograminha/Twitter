import styled, { css } from "styled-components";
import {
    ArrowLeft,
    Home,
    Email,
    Search,
    Notifications,
    LocationOn, Cake, Chat, Favorite, Retweet
} from "../../../styles/GlobalIcons";

import Button from "../../../components/Button";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: min(601px, 100%);

    @media (min-width: 500px) {
        border-left: 1px solid var(--outline);
        border-right: 1px solid var(--outline);
    }
    position: relative;
    > button {
      border-top: 1px solid var(--outline);
    background-color: var(--primary);
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 9px min(46px, max(10vw, 10px));

    @media (min-width: 500px) {
        display: none;
    }
    }
`;
export const Header = styled.div`
    position: sticky;
    z-index: 2;
    text-align: left;
    display: flex;
    align-items: center;
    background-color: var(--primary);

    padding: 8px 0 9px 13px;
    border-bottom: 1px solid var(--outline);

    > button {
        padding: 8px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        &:hover {
            background-color: var(--twitter-dark-hover);
        }
    }
`;
export const BackIcon = styled(ArrowLeft)`
    fill: var(--twitterRed);
`;
export const ProfileInfo = styled.div`
    margin-left: 32px;
    display: flex;
    flex-direction: column;
    strong {
        font-size: 19px;
    }
    span {
        font-size: 15px;
        color: var(--gray);
    }
`;

export const UserFeed = styled.div`
    display: flex;
    flex-direction: column;

    height: 5000px;

    overflow-y: auto;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;
export const Banner = styled.div`
    flex-shrink: 0;

    width: 100%;
    height: min(max(90px, 33vw), 199px);

    background-color: var(--twitterRed);

    position: relative;
`;
export const Avatar = styled.div`
    background-color: var(--white);
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    position: absolute;
    bottom: max(-60px, min(-11vw, -22px));
    left: 15px;
    border-radius: 50%;
    border: 3px solid var(--primary);
`;
export const ProfileData = styled.div`
    padding: min(max(20px, calc(10vw + 6px)), 67px) 16px 0;
    display: flex;
    flex-direction: column;

    position: relative;

    > h1 {
        letter-spacing: 1px;
        font-weight: lighter;
        font-size: 18px;
    }

    > h2 {
        font-weight: normal;
        font-size: 12px;

        color: var(--gray);
    }
    > p {
        font-size: 15px;
        margin-top: 11px;
        a {
            display: inline-block;
            margin-left: 5px;
            text-decoration: none;
            color: var(--twitterRed);
        }
    }

    > ul {
        margin-top: 10px;
        margin-bottom: 10px;
        list-style: none;
        > li {
            font-size: min(15px, max(3vw, 10px));
            color: var(--gray);
        }
    }
`;
export const Followage = styled.div`
    display: flex;
    span {
        font-size: 15px;
        color: var(--gray);
        & ~ span {
            margin-left: 22px;
        }
    }
`;

export const EditButton = styled(Button)`
    top: 15px;
    right: 3%;
    background-color: var(--primary);
    max-width: min(150px, max(30vw, 85px));
    width: 100%;
    position: absolute;
`;

export const Feed = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tab = styled.div`

    letter-spacing: 1px;
    font-weight: bold;
    font-size: 15px;
    text-align: center;

    margin-top: 10px;
    padding: 11px 0 16px;

    outline: 0;
    cursor: pointer;

    color: var(--twitterRed);
    border-bottom: 2px solid var(--twitterRed);

    &:hover{
        background-color: var(--twitter-dark-hover);
    }

`;
export const Tweets = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0;
`

export const Tweet = styled.div`
    display: flex;
    flex-direction: column;

    padding: 14px 3%;
    border-bottom: 1px solid var(--outline);
`;
export const Retweeted = styled.div`
    display: flex;
    align-items: center;

    color: var(--gray);
    font-size: 13px;
`;
export const FixedIcon = styled(Retweet)`
    fill: var(--gray);

    width: 14px;
    height: 14px;

    margin-left: 35px;
    margin-right: 6px;
`;
export const Body = styled.div`
    display: flex;
    margin-top: 10px;

    position: relative;
`;
export const Avatar2 = styled.div`
    position: absolute;

    border-radius: 50%;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    background-color: var(--white);
`;
export const Content = styled.div`
    width: 100%;
    padding-left: calc(48px + 3%);
`;
export const Header2 = styled.div`
    display: flex;
    align-items: center;

    font-size: min(15px, max(10px, 3vw));
    white-space: nowrap;
    margin-right: 6px;

    span,
    time {
        color: var(--gray);
    }
    strong > span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
export const Dot = styled.div`
    background-color: var(--gray);
    border-radius: 50%;
    width: 2px;
    height: 2px;
    margin: 0 10px;
`;
export const Description = styled.div`
    margin: 6px 0;
    font-size: 13px;
`;
export const ImageContent = styled.div`
    margin-top: 12px;

    width: 100%;
    height: min(300px, max(175px, 41vw));

    background-color: var(--white);

    border-radius: 14px;
    cursor: pointer;
    transition: opacity 0.5s ease-in-out;

    &:hover {
        opacity: 0.7;
    }
`;
export const Icons = styled.div`
    user-select: none;
    padding: 0 4%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;

    @media (min-width: 360px) {
        width: 63%;
    }
`;
export const Status = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    font-size: 14px;
    &:hover {
        opacity: 0.7;
    }
    &:nth-of-type(1){
        color: #66fcf1;
    }
    &:nth-of-type(2){
        color: #ffe66d;
    }
    &:nth-of-type(3){
        color: #d90429;
    }
`;

const cssIcon2 = css`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

export const CommentIcon = styled(Chat)`
    stroke: #66fcf1;
    ${cssIcon2}
`;
export const RetweetIcon = styled(Retweet)`
    stroke: #ffe66d;
    fill: #ffe66d;
    ${cssIcon2}
`;
export const LikeIcon = styled(Favorite)`
    fill: #d90429;
    ${cssIcon2}
`;

export const LocationIcon = styled(LocationOn)`
    ${cssIcon2}
`;
export const CakeIcon = styled(Cake)`
    ${cssIcon2}
`;



const cssIcon3 = css`
    width: 31px;
    height: 31px;

    cursor: pointer;
    fill: var(--gray);

    &:hover,
    &:active,
    &.active {
        fill: var(--like);
    }
`;

export const HomeIcon = styled(Home)`
    ${cssIcon3}
`;
export const SearchIcon = styled(Search)`
    ${cssIcon3}
`;
export const BellIcon = styled(Notifications)`
    ${cssIcon3}
`;
export const EmailIcon = styled(Email)`
    ${cssIcon3}
`;
