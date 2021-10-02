import { FC } from "react"
import style from "../styles/pages/home.module.scss"

export const SecHero: FC = () => {
  return (
    <section className={style.hero}>
      <div className={style.hero__imgSec}>
        <h1>
          <img
            className={style.hero__img}
            src="/logo.svg"
            alt="-undefined 同志社大学 エンジニアのためのコミュニティ"
          />
        </h1>
        <h2 className={style.hero__txt}>
          同志社大学 エンジニアのためのコミュニティ
        </h2>
      </div>
    </section>
  )
}
