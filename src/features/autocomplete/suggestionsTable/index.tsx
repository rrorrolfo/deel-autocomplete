import { ProductWithHiglightTitle } from "../../../common/types/products";
import styles from "./suggestionsTable.module.css";

type SuggestionsTableProps = {
  suggestions: ProductWithHiglightTitle[];
};

const SuggestionsTable = ({ suggestions }: SuggestionsTableProps) => {
  return (
    <div className={styles.resultsTable}>
      <ul className={styles.suggestionsList}>
        {suggestions.length ? (
          suggestions.map(({ highlightTitle, id }) => (
            <li key={id}>{highlightTitle}</li>
          ))
        ) : (
          <li>No suggestions match your search</li>
        )}
      </ul>
    </div>
  );
};
export default SuggestionsTable;
