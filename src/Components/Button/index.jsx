import styled from "styled-components";

const Button = styled.button`
    background-color: ${(props) =>
        props.outlined ? "transparent" : "var(--twitterRed)"};
    color: ${(props) =>
        props.outlined ? "var(--twitterRed)" : "var(--white)"};
    border: ${(props) =>
        props.outlined ? "1px solid var(--twitterRed)" : "none"};
    cursor: pointer;

    padding: 10px;
    border-radius: 50rem;

    font-weight: bold;
    font-size: min(15px, max(3vw, 10px));

    outline: none;

    &:hover {
        background-color: ${(props) =>
            props.outlined
                ? "var(--twitter-dark-hover)"
                : "var(--twitterRed-light-hover)"};
    }
`;
export default Button