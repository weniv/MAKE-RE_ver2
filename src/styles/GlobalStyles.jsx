import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
    :root {
        --main-color: #2E6FF2;
        --button-hover-color: #6296FF;
        --font-color: #121314;
        --gray-color: #47494D;
        --lightgray-color: #8D9299;
        --border-color: #D9DBE0;
        --bg-color: #FFFFFF;
        --hover-color: #F3F5FA
    }
    ${reset}

    @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-style: normal;
    }

    *, body{
        font-family: "Pretendard";
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
    }

    button {
        border: none;
        cursor: pointer;
        font-size: 14px;
        background-color: inherit;
        padding: 0;
    }

    .ir {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    a 
    {color: ${(props) => props.theme.surface}}

    input, textarea {
        color: ${(props) => props.theme.surface};
        border: 1px solid ${(props) => props.theme.grayLv2};
        background-color: ${(props) => props.theme.background};
    }

    input::placeholder,
    textarea::placeholder{
        color: ${(props) => props.theme.grayLv3};
    }

    input:focus,input:active,
    textarea:focus, textarea:active{
        outline: 2px solid ${(props) => props.theme.primary};
    }


    .iconLv1 {
        background-color: ${(props) => props.theme.grayLv4}
    }
    .iconLv2 {
        background-color: ${(props) => props.theme.grayLv3}
    }
    .iconLv3 {
        background-color: ${(props) => props.theme.grayLv2}
    }
`

export default GlobalStyles
