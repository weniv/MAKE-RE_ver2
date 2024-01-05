import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { lightTheme } from '../theme/theme'

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: ${(props) => props.theme.primaryColor};
        --secondary-color: ${(props) => props.theme.secondaryColor};
        --activation-color: ${(props) => props.theme.activationColor};
        --background-color: ${(props) => props.theme.backgroundColor};
        --surface-color: ${(props) => props.theme.surfaceColor};
        --gray-lv1-color: ${(props) => props.theme.grayLv1Color};
        --gray-lv2-color: ${(props) => props.theme.grayLv2Color};
        --gray-lv3-color: ${(props) => props.theme.grayLv3Color};
        --gray-lv4-color: ${(props) => props.theme.grayLv4Color};
        --error-color: ${(props) => props.theme.errorColor};

        --code-purple: ${(props) => props.theme.codePurple};
        --code-pink: ${(props) => props.theme.codePink};
        --code-blue: ${(props) => props.theme.codeBlue};
        --code-green: ${(props) => props.theme.codeGreen};
        --code-orange: ${(props) => props.theme.codeOrange};

        
        
        --shadow: ${(props) => props.theme.shadow};

    }
    ${reset}
    @media print {
        :root {
            --primary-color:  ${lightTheme.primaryColor};
            --secondary-color: ${lightTheme.secondaryColor};
            --activation-color: ${lightTheme.activationColor};
            --background-color: ${lightTheme.backgroundColor};
            --surface-color: ${lightTheme.surfaceColor};
            --gray-lv1-color: ${lightTheme.grayLv1Color};
            --gray-lv2-color: ${lightTheme.grayLv2Color};
            --gray-lv3-color: ${lightTheme.grayLv3Color};
            --gray-lv4-color: ${lightTheme.grayLv4Color};
            --error-color: ${lightTheme.errorColor};

            --code-purple: ${lightTheme.codePurple};
            --code-pink: ${lightTheme.codePink};
            --code-blue: ${lightTheme.codeBlue};
            --code-green: ${lightTheme.codeGreen};
            --code-orange: ${lightTheme.codeOrange};

            
            
            --shadow: ${lightTheme.shadow};
        }
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-style: normal;
    }

    *, body{
        font-family: "Pretendard";
        box-sizing: border-box;
    }

    html {
        font-size:10px;
    }

    body {
        font-size:1.6rem;
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

    a {
        color: var(--surface-color);
        text-decoration: none;
    }

    input, textarea {
        color: var(--surface-color);
        border: 1px solid var(--gray-lv2-color);
        background-color: var(--background-color);
        cursor: auto;
    }

    input::placeholder,
    textarea::placeholder{
        color: var(--gray-lv3-color);
    }

    input:focus,input:active,
    textarea:focus, textarea:active{
        outline: 2px solid var(--primary-color);
    }

    input:-webkit-autofill { 
        -webkit-box-shadow: 0 0 0 30px var(--gray-lv1-color) inset ; 
        -webkit-text-fill-color: var(--surface-color); 
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active { 
        transition: background-color 5000s ease-in-out 0s; 
    }

    textarea {
        &::-webkit-scrollbar {
            width: 0.6rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgba(141, 146, 153, 0.5);
            border-radius: 10px;
        }

    }


    .iconLv1 {
        background-color: var(--gray-lv4-color)
    }
    .iconLv2 {
        background-color: var(--gray-lv3-color)
    }
    .iconLv3 {
        background-color: var(--gray-lv2-color)
    }


    @media print {
        html, body {
            background-color:var(--background-color);
        }
    }
`

export default GlobalStyles
