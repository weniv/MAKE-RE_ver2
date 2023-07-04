import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
    ${reset}
    
    @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-style: normal;
    }

    * {
        font-family: "Pretendard";
    }
`

export default GlobalStyles
