import styles from "./App.module.css";
import Autocomplete from "./features/autocomplete";

function App() {
  return (
    <div className={styles.container}>
      <Autocomplete />
    </div>
  );
}

export default App;
