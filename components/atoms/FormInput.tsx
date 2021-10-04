import style from "@/styles/components/atoms/atoms.module.scss"
import { FC } from "react"

type Props = {
  placeholder?: string
}

export const FormInput: FC<Props> = ({ placeholder }) => {
  return (
    <input placeholder={placeholder} className={style.formInput} type="text" />
  )
}
