import { SecAbout } from "@/components/pages/SecAbout"
import { SecContact } from "@/components/pages/SecContact"
import { SecHero } from "@/components/pages/SecHero"
import { SecMembers } from "@/components/pages/SecMembers"
import { SecSkills } from "@/components/pages/SecSkills"
import style from "@/styles/pages/home.module.scss"
import { FC } from "react"

export const Home: FC = () => {
  return (
    <div className={style.home}>
      <SecHero />
      <SecAbout />
      <SecMembers />
      <SecSkills />
      <SecContact />
    </div>
  )
}

export default Home
