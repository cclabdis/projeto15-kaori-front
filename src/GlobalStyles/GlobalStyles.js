import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyles;