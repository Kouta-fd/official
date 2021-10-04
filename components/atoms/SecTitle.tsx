import style from "@/styles/components/atoms/atoms.module.scss"
import { FC } from "react"

type Props = {
  title: string
  type?: string
}

export const SecTitle: FC<Props> = ({ title, type }) => {
  if (type === "white") {
    return (
      <p className={`${style.secTitle} ${style.secTitle__txt_white}`}>
        {title}
      </p>
    )
  }
  return <p className={style.secTitle}>{title}</p>
}
