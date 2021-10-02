import style from "@/styles/components/atoms/atoms.module.scss"
import { FC } from "react"

type Props = {
  title: string
}

export const SecTitle: FC<Props> = ({ title }) => {
  return <p className={style.secTitle}>{title}</p>
}
