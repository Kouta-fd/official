import { SecTitle } from "@/components/atoms/SecTitle"
import layout from "@/styles/layout.module.scss"
import style from "@/styles/pages/home.module.scss"
import { FC } from "react"

export const SecAbout: FC = () => {
  return (
    <section className={style.about}>
      <div className={layout.container}>
        <SecTitle title="About" />
        <div className={style.about__items}>
          <div className={style.about__item}>
            <p className={style.about__title}>エンジニア同士の交流</p>
            <img
              className={style.about__icon}
              src="icons/about/community.svg"
              alt=""
            />
            <p className={style.about__description}>
              大学での現地での交流に加えて、Discord
              を用いたオンラインでの交流をすることができます。
              <br />
              オンラインでの活動は、今出川・京田辺の両校地から参加することが可能です。
            </p>
          </div>
          <div className={style.about__item}>
            <p className={style.about__title}>チームでのアプリ開発</p>
            <img
              className={style.about__icon}
              src="icons/about/desktop.svg"
              alt=""
            />
            <p className={style.about__description}>
              サークル内で使用するツールの開発や、ハッカソンなどを通して、チーム開発の経験を積むことができます。
              <br />
              初心者の方でも参加しやすいよう、技術的なフォローアップを行います。
            </p>
          </div>
          <div className={style.about__item}>
            <p className={style.about__title}>勉強会・LT会</p>
            <img
              className={style.about__icon}
              src="icons/about/LT.svg"
              alt=""
            />
            <p className={style.about__description}>
              技術的な勉強会に加えて、メンバーが興味を持っている技術領域についてのLT会などを開催する予定です。
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
