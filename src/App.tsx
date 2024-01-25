import styles from "./App.module.css";
import Autocomplete from "./features/autocomplete";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Deel Autocomplete</h1>
      <Autocomplete />
    </div>
  );
}

export default App;
