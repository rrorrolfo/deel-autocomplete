import { useEffect, useRef } from "react";
import styles from "./searchInput.module.css";

type SearchInputProps = {
  value: string;
  setValue: (val: string) => void;
  toggleShowSuggestions: (val: boolean) => void;
};

const SearchInput = ({
  value,
  setValue,
  toggleShowSuggestions,
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      type="text"
      placeholder="Search for a product by name"
      className={styles.autocompleteInput}
      value={value}
      onChange={handleChange}
      ref={inputRef}
      onFocus={() => toggleShowSuggestions(true)}
      onBlur={() => toggleShowSuggestions(false)}
    />
  );
};

export default SearchInput;
