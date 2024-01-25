import { useState, useRef, useEffect } from "react";
import styles from "./autocomplete.module.css";
import SuggestionsTable from "./suggestionsTable";
import { useFetchProductsByName } from "../../hooks";
import { getHighlightedTitle } from "../../common/utils";
import { ProductWithHiglightTitle } from "../../common/types/products";

const Autocomplete = () => {
  const [value, setValue] = useState("");
  const [showSuggestions, toggleShowSuggestions] = useState(false);
  const { products } = useFetchProductsByName(value);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const highlightedProducts: ProductWithHiglightTitle[] = products
    .slice(0, 10)
    .map((product) => ({
      ...product,
      highlightTitle: getHighlightedTitle(product, value),
    }));

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Search for a product"
        className={styles.autocompleteInput}
        value={value}
        onChange={handleChange}
        ref={inputRef}
        onFocus={() => toggleShowSuggestions(true)}
        onBlur={() => toggleShowSuggestions(false)}
      />
      {showSuggestions && (
        <SuggestionsTable suggestions={highlightedProducts} />
      )}
    </div>
  );
};

export default Autocomplete;
