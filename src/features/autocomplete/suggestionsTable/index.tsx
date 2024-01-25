import styles from "./suggestionsTable.module.css";

const SuggestionsTable = () => {
  return (
    <div className={styles.resultsTable}>
      <ul className={styles.suggestionsList}>
        <li>Result</li>
        <li>Result</li>
        <li>Result</li>
      </ul>
    </div>
  );
};
export default SuggestionsTable;
