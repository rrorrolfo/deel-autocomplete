import { useState, useRef, useEffect } from "react";
import styles from "./autocomplete.module.css";
import SuggestionsTable from "./suggestionsTable";
import { fetchProductsByName } from "../../api/requests";
import {
  ProductType,
  ProductWithHiglightTitle,
} from "../../common/types/products";
import { getHighlightedTitle } from "../../common/utils";

const Autocomplete = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<ProductWithHiglightTitle[]>(
    []
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const debounceFetchProducts = setTimeout(async () => {
      const products: ProductType[] = await fetchProductsByName(value);

      const highlightedProducts: ProductWithHiglightTitle[] = products.map(
        (product) => ({
          ...product,
          highlightTitle: getHighlightedTitle(product, value),
        })
      );

      setSuggestions(highlightedProducts);
    }, 300);

    return () => clearTimeout(debounceFetchProducts);
  }, [value]);

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
      <SuggestionsTable suggestions={suggestions} />
    </div>
  );
};

export default Autocomplete;
