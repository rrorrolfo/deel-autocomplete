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
  const { products, errorFetching, isLoading } =
    useFetchProductsByName(debouncedValue);

  const highlightedProducts: ProductWithHiglightTitle[] = useMemo(
    () =>
      products.slice(0, 10).map((product) => ({
        ...product,
        highlightTitle: getHighlightedTitle(product, debouncedValue),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products]
  );

  const isEmptyDebouncedValue = debouncedValue === "";
  const shouldDisplayLoadingText =
    isLoading && highlightedProducts.length === 0;
  const displaySuggestions =
    highlightedProducts.length > 0 && !isEmptyDebouncedValue;

  if (errorFetching) {
    return (
      <span className={styles.errorMessage}>
        There was an error, please search for other product name
      </span>
    );
  }

  if (isEmptyDebouncedValue) {
    return <></>;
  }

  return (
    <>
      {showSuggestions && (
        <div className={styles.resultsTable}>
          <ul className={styles.suggestionsList}>
            {shouldDisplayLoadingText ? (
              <li>Loading...</li>
            ) : displaySuggestions ? (
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
