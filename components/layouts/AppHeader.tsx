import { FC } from "react"
import style from "../../styles/layout.module.scss"

export const AppHeader: FC = () => {
  return (
    <nav className={style.container}>
      <div className={style.header}>
        <img
          className={style.header__logo}
          src="/logo.svg"
          alt="-undefined のロゴ"
        />
      </div>
    </nav>
  )
}

export default AppHeader
