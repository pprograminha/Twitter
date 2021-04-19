import styled from "styled-components";
import { Search } from "../../styles/GlobalIcons";
export const Container = styled.div`
    display: none;
    @media (min-width: 1000px) {
        overflow-y: auto;
        display: flex;
        flex-direction: column;

        padding: 20px 15px;

        width: min(399px, 32vw);
    }
    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
`;
export const SearchWrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 2;

    background-color: var(--primary);
    padding: 10px 24px;

    width: min(399px, 32vw);
    height: 100%;
    max-height: 57px;
`;
export const SearchInput = styled.input`
    width: 100%;
    height: 39px;

    font-size: 14px;

    padding: 0 10px 0 52px;
    border-radius: 50rem;

    background-color: var(--search);
    border: 1px solid var(--outline);
    transition: border-color 180ms ease-in-out;

    &::placeholder {
        color: var(--gray);
        font-weight: bold;
        letter-spacing: 1px;
    }
    ~ svg {
        fill: var(--gray);
        position: relative;
        top: -31.5px;
        left: 15px;
        z-index: 1;

        transition: fill 180ms ease-in-out;
    }
    outline: 0;
    &:focus {
        border-color: var(--twitterRed);
        ~ svg {
            fill: var(--twitterRed);
        }
        &::placeholder {
            color: var(--twitterRed);
        }
    }
`;
export const Body = styled.div`
    padding: 57px 24px 200px;
`;
export const SearchIcon = styled(Search)`
    width: 20px;
    height: 20px;
`;
