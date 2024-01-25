import { useState } from "react";
import styles from "./autocomplete.module.css";
import SuggestionsTable from "./suggestionsTable";

const Autocomplete = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Search for a product"
        className={styles.autocompleteInput}
        value={value}
        onChange={handleChange}
      />
      <SuggestionsTable />
    </div>
  );
};

export default Autocomplete;
