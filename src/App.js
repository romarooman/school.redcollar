import styles from "./App.module.css";
import { Contact } from "./componets/Contact";
import { Header } from "./componets/Header";
import { History } from "./componets/History/History";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <aside>
          <Contact />
        </aside>
        <History />
      </main>
    </>
    // <>
    // <Pomofocus/>
    // </>
  );
}

export default App;
