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

    input:focus,input:active{
        outline:2px solid var(--main-color);
    }
`

export default GlobalStyles
