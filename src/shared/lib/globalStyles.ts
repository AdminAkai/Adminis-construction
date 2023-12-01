import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #808080 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.primary};
  }

  *::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 10px;
    border: 4px solid ${({ theme }) => theme.primary};
  }
`

export default GlobalStyle
