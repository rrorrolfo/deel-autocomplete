import { useMemo } from "react";
import styles from "./suggestionsTable.module.css";
import { ProductWithHiglightTitle } from "../../../common/types/products";
import { useFetchProductsByName } from "../../../hooks";
import { getHighlightedTitle } from "../../../common/utils";

type SuggestionsTableProps = {
  debouncedValue: string;
  showSuggestions: boolean;
};

const SuggestionsTable = ({
  debouncedValue,
  showSuggestions,
}: SuggestionsTableProps) => {
  const { products, errorFetching } = useFetchProductsByName(debouncedValue);

  const highlightedProducts: ProductWithHiglightTitle[] = useMemo(
    () =>
      products.slice(0, 10).map((product) => ({
        ...product,
        highlightTitle: getHighlightedTitle(product, debouncedValue),
      })),
    [products, debouncedValue]
  );

  if (errorFetching) {
    return (
      <span className={styles.errorMessage}>
        There was an error, please search for other product name
      </span>
    );
  }

  if (debouncedValue === "") {
    return <></>;
  }

  return (
    <>
      {showSuggestions && (
        <div className={styles.resultsTable}>
          <ul className={styles.suggestionsList}>
            {highlightedProducts.length ? (
              highlightedProducts.map(({ highlightTitle, id }) => (
                <li key={id}>{highlightTitle}</li>
              ))
            ) : (
              <li>No suggestions match your search</li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};
export default SuggestionsTable;
