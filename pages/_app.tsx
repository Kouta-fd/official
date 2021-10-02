import AppHeader from "../components/layouts/AppHeader"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppHeader />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
