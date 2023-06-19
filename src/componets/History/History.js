import { Delta } from "../../img";
import styles from "./History.module.css";

const History = (props) => {
  return (
    <div className={styles.block}>
      <div className={styles.text}>
        Привет! Я специализируюсь на использовании фреймворка React. Мне
        нравится, как он упрощает создание пользовательских интерфейсов и
        обеспечивает бесперебойное взаимодействие пользователя с приложением. Я
        постоянно следую за новостями в мире React и всегда стремлюсь
        использовать передовые методы и лучшие практики, чтобы создавать
        решения, которые действительно работают. Я уверен в своих навыках в
        HTML, CSS, JavaScript. Я люблю людей и работать в команде и делиться
        своим опытом, чтобы помочь улучшить результаты проекта и настроен на
        постоянное развитие в своей профессии. Я хочу создавать надежные и
        инновационные приложения на React, я готов принять вызов и вместе с вами
        создать что-то поистине крутое.
      </div>
      <div className={styles.block_info}>
        <div className={styles.delta_contener}>
          <div className={styles.delta}>
            <Delta />
          </div>
        </div>
        <div className={styles.block_info_contener}>
          <div className={styles.block_info_contener_s}>
            <div className={styles.part}>Образование</div>
            <ul>
              <li className={styles.listB}>
                ВГУ
              </li>
              <li className={styles.list}>
                Прикладная математика и информатика
              </li>
              <li className={styles.list}>2005-2010</li>
              <li className={styles.listB}>DataArt учебный проект</li>

              <a href="https://github.com/romarooman" className={styles.list}>
                <div className={styles.textFiled}>
                  https://github.com/romarooman
                </div>
              </a>
              <li className={styles.listB}>Udemy</li>
              <li className={styles.list}>React Javascript</li>
            </ul>
          </div>
          <hr />
          <div className={styles.block_info_contener_s}>
            <div className={styles.part}>Карьера</div>
            <ul>
              <li className={styles.listB}>Концерн Созвездие</li>
              <li className={styles.list}>Ведущий инженер</li>
              <li className={styles.list}>2011-2023</li>
            </ul>
          </div>
          <hr />
          <div className={styles.block_info_contener_s}>
            <div className={styles.part}>Навыки</div>
            <ul className={styles.skill}>
              <li className={styles.skill_li}>HTML</li>
              <li className={styles.skill_li}>CSS</li>
              <li className={styles.skill_li}>JavaScript</li>
              <li className={styles.skill_li}>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export { History };
