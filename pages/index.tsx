import { FC } from "react"
import layout from "../styles/layout.module.scss"
import style from "../styles/pages/home.module.scss"
import { SecAbout } from "./SecAbout"
import { SecHero } from "./SecHero"

export const Home: FC = () => {
  return (
    <div className={`${style.home} ${layout.container}`}>
      <SecHero />
      <SecAbout />
    </div>
  )
}

export default Home
