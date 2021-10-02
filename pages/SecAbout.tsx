import { SecTitle } from "@/components/atoms/SecTitle"
import style from "@/styles/pages/home.module.scss"
import { FC } from "react"

export const SecAbout: FC = () => {
  return (
    <section>
      <SecTitle title="About" />
      <div className={style.about__descriptions}>
        <div>
          <img className={style.about__icon} src="icons/desktop.svg" alt="" />
          <p>エンジニア同士の交流</p>
        </div>
        <div>
          <img className={style.about__icon} src="icons/desktop.svg" alt="" />
          <p>エンジニア同士の交流</p>
        </div>
        <div>
          <img className={style.about__icon} src="icons/desktop.svg" alt="" />
          <p>エンジニア同士の交流</p>
        </div>
      </div>
    </section>
  )
}
