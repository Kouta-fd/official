import { FC } from "react"
import style from "../styles/pages/home.module.scss"
import { SecAbout } from "./SecAbout"
import { SecHero } from "./SecHero"
import { SecMembers } from "./SecMembers"
import { SecSkills } from "./SecSkills"

export const Home: FC = () => {
  return (
    <div className={style.home}>
      <SecHero />
      <SecAbout />
      <SecMembers />
      <SecSkills />
    </div>
  )
}

export default Home
