import { AppFooter } from "@/components/layouts/AppFooter"
import AppHeader from "../components/layouts/AppHeader"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
    </div>
  )
}

export default MyApp
