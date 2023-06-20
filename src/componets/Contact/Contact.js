import {
  DeltaR,
  GitIcon,
  GlassIcon,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
} from "../../img";

import styles from "./Contact.module.css";
import avatar from "./../../img/self.jpg";

const Contact = (props) => {
  return (
    <article class={styles.avatar_section}>
      <div>
        <div class={styles.glass}>
          <GlassIcon />
        </div>
        <img class={styles.avatar_img} src={avatar} alt="avatar" />
      </div>
      <div class={styles.profile_contener}>
        <div class={styles.rectangleL}>
          <DeltaR />
        </div>

        <div class={styles.profile_info}>
          <h1 class="toptitle__content-title">Романов Роман</h1>
          <div className={styles.age}>34 года, Воронеж</div>

          <div class={styles.content_text}>
            <div className={styles.connectingFiled}>
              <PhoneIcon />
              <a href="tel:+79202134890" className={styles.refField}>
                <div className={styles.textFiled}>+79202134890</div>
              </a>
            </div>
            <div className={styles.connectingFiled}>
              <MailIcon />
              <a
                href="mailto:romarooman@gmail.com<"
                className={styles.refField}
              >
                <div className={styles.textFiled}>romarooman@gmail.com</div>
              </a>
            </div>
            <div className={styles.connectingFiled}>
              <TelegramIcon />

              <a href=" https://t.me/romarooman" className={styles.refField}>
                <div className={styles.textFiled}>romarooman</div>{" "}
              </a>
            </div>
            <div className={styles.connectingFiled}>
              <GitIcon />
              <a
                href="https://github.com/romarooman"
                className={styles.refField}
              >
                <div className={styles.textFiled}>
                  https://github.com/romarooman
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export { Contact };
