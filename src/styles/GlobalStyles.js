import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--white);
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        min-width: 260px;

        width: 100%;
        height: 100%;

    }
    * input, * button {
        outline: none;
        border: 0;
        appearance: none;
        background-color: transparent;

    }
    html{
        background-color: var(--primary);
    }
    body {
        overflow-x: hidden;
    }
    *::-webkit-scrollbar{
        height: 7px;
        width: 7px;
        border-radius: 50rem;
        background-color: var(--white);
    }
    *::-webkit-scrollbar-thumb{
        border-radius: 50rem;
        background-color: var(--twitterRed);
    }
    :root {
    --primary: #101417;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitterRed: #E8265E;
    --twitterBlue: #33A1F2;
    --twitter-dark-hover: #E8265E10;
    --twitterBlue-light-hover: #2C8ED6;
    --twitterRed-light-hover: #DD3565;
  }
`;
