import { ProductType } from "../../../common/types/products";
import styles from "./suggestionsTable.module.css";

type SuggestionsTableProps = {
  suggestions: ProductType[];
};

const SuggestionsTable = ({ suggestions }: SuggestionsTableProps) => {
  return (
    <div className={styles.resultsTable}>
      <ul className={styles.suggestionsList}>
        {suggestions.length ? (
          suggestions.map(({ title, id }) => <li key={id}>{title}</li>)
        ) : (
          <li>No suggestions match your search</li>
        )}
      </ul>
    </div>
  );
};
export default SuggestionsTable;
