import { useState } from "react";
import styles from "./autocomplete.module.css";
import SuggestionsTable from "./suggestionsTable";
import SearchInput from "./searchInput";
import { useDebounce } from "../../hooks";

const Autocomplete = () => {
  const [value, setValue] = useState("");
  const [showSuggestions, toggleShowSuggestions] = useState(false);

  const debouncedValue = useDebounce(value, 300);

  return (
    <div className={styles.inputContainer}>
      <SearchInput
        toggleShowSuggestions={toggleShowSuggestions}
        value={value}
        setValue={setValue}
      />
      <SuggestionsTable
        debouncedValue={debouncedValue}
        showSuggestions={showSuggestions}
      />
    </div>
  );
};

export default Autocomplete;
