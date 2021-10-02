import { SecTitle } from "@/components/atoms/SecTitle"
import layout from "@/styles/layout.module.scss"
import style from "@/styles/pages/home.module.scss"
import { FC } from "react"

export const SecSkills: FC = () => {
  return (
    <section className={style.about}>
      <div className={layout.container}>
        <SecTitle title="Skills" />
      </div>
    </section>
  )
}
