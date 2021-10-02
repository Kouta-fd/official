import { FC } from "react"
import layout from "../styles/layout.module.scss"
import style from "../styles/pages/home.module.scss"
import { SecHero } from "./SecHero"

export const Home: FC = () => {
  return (
    <div className={`${style.home} ${layout.container}`}>
      <SecHero />
      <div></div>
    </div>
  )
}

export default Home
