import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
    :root {
        --main-color: #2E6FF2;
        --font-color: #121314;
        --gray-color: #47494D;
        --lightgray-color: #8D9299;
        --border-color: #D9DBE0;
        --bg-color: #FFFFFF;
    }

    ${reset}


    @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-style: normal;
    }

    * {
        font-family: "Pretendard";
        box-sizing:border-box;
    }
`

export default GlobalStyles
