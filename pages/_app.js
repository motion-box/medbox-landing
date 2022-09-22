import '../styles/globals.css'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
