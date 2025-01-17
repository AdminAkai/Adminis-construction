import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) => theme.Adminis};
    transition: scrollbar-color 3s ease;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.primary};
    transition: background-color 3s ease;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.Adminis};
    transition: background-color 3s ease;
    border-radius: 10px;
    border: 4px solid ${({ theme }) => theme.primary};
  }
`

export default GlobalStyle
