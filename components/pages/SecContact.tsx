import { SecTitle } from "@/components/atoms/SecTitle"
import layout from "@/styles/layout.module.scss"
import style from "@/styles/pages/home.module.scss"
import { FC } from "react"
import { FormInput } from "../atoms/FormInput"

export const SecContact: FC = () => {
  return (
    <section className={style.contact}>
      <div className={layout.container}>
        <SecTitle title="Contact" />
        <p className={style.contact__txt}>
          合同LT会や、サークル参加希望の方はこちらからご連絡ください。
        </p>
        <form className={style.contact__form}>
          <div className={style.contact__formSec}>
            <span className={style.contact__form_grid}>
              <FormInput placeholder="NAME" />
              <FormInput placeholder="EMAIL" />
            </span>
            <textarea
              className={style.contact__txtarea}
              placeholder="MESSAGE"
              maxLength={1024}
              rows={6}
            ></textarea>
          </div>
          <button className={style.contact__btn}>SUBMIT</button>
        </form>
      </div>
    </section>
  )
}
