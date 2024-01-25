import { useState, useRef, useEffect } from "react";
import styles from "./autocomplete.module.css";
import SuggestionsTable from "./suggestionsTable";

const Autocomplete = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Search for a product"
        className={styles.autocompleteInput}
        value={value}
        onChange={handleChange}
        ref={inputRef}
      />
      <SuggestionsTable />
    </div>
  );
};

export default Autocomplete;
