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
          <div className={styles.age}>34 года Воронеж</div>

          <div class={styles.content_text}>
            <div className={styles.connectingFiled}>
              <PhoneIcon />
              <div className={styles.textFiled}>+7 9202134890</div>
            </div>
            <div className={styles.connectingFiled}>
              <MailIcon />
              <div className={styles.textFiled}>romarooman@gmail.com</div>{" "}
            </div>
            <div className={styles.connectingFiled}>
              <TelegramIcon />
              <div className={styles.textFiled}>romarooman</div>
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
