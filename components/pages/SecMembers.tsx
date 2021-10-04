import { SecTitle } from "@/components/atoms/SecTitle"
import { members } from "@/data/members"
import layout from "@/styles/layout.module.scss"
import style from "@/styles/pages/home.module.scss"
import { FC } from "react"

export const SecMembers: FC = () => {
  return (
    <section className={style.members}>
      <div className={layout.container}>
        <SecTitle title="Members" />
        <p className={style.members__title}>
          Webエンジニアからモバイルエンジニア、データサイエンティスト、デザイナー志望の方まで幅広いメンバーを歓迎します。
        </p>
        <div className={style.members__items}>
          {members.map((member) => (
            <div key={member.id} className={style.members__item}>
              <img
                className={style.members__img}
                src={`https://github.com/${member.github}.png?size=125`}
                alt={`${member.name}のアイコン`}
              />
              <p>{member.position}</p>
              <p>{member.univ}</p>
              <p className={style.members__name}>{member.name}</p>
              <p className={style.members__nameEng}>{member.name_eng}</p>
              <p className={style.members__comment}>{member.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
