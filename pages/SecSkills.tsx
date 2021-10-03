import { SecTitle } from "@/components/atoms/SecTitle"
import { skills } from "@/data/skills"
import layout from "@/styles/layout.module.scss"
import style from "@/styles/pages/home.module.scss"
import { FC } from "react"

export const SecSkills: FC = () => {
  return (
    <section className={style.skills}>
      <div className={layout.container}>
        <SecTitle title="Skills" />
        <div className={style.skills__section}>
          <p className={style.skills__title}>Web Frontend</p>
          <div className={style.skills__items}>
            {skills.webFront.map((skill) => (
              <div className={style.skills__item}>
                <div className={style.skills__icon}>
                  <img src={`icons/skills/${skill.icon}`} alt={skill.name} />
                </div>
                <p className={style.skills__name}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.skills__section}>
          <p className={style.skills__title}>Web Backend</p>
          <div className={style.skills__items}>
            {skills.webBack.map((skill) => (
              <div className={style.skills__item}>
                <div className={style.skills__icon}>
                  <img src={`icons/skills/${skill.icon}`} alt={skill.name} />
                </div>
                <p className={style.skills__name}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.skills__section}>
          <p className={style.skills__title}>Data Analysis</p>
          <div className={style.skills__items}>
            {skills.data.map((skill) => (
              <div className={style.skills__item}>
                <div className={style.skills__icon}>
                  <img src={`icons/skills/${skill.icon}`} alt={skill.name} />
                </div>
                <p className={style.skills__name}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
