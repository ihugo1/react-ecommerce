import styles from "./DataStateHandler.module.css";
import { FaGhost, FaFaceSadTear } from "react-icons/fa6";
import { ClipLoader } from "react-spinners";

export const DataStateHandler = ({ data, loading, error, dataType="data", renderData }) => {
  if (loading) {
    return (
      <div className={styles.feedbackMessage}>
        <ClipLoader color="#4a90e2" size={40} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.feedbackMessage}>
        <FaFaceSadTear />
        <p>Error while loading {dataType}: {error.message || error}</p>
      </div>
    );
  }

  const isEmptyArray = Array.isArray(data) && data.length === 0;
  const isEmptyObject = !Array.isArray(data) && !data;

  if (isEmptyArray || isEmptyObject) {
    return (
      <div className={styles.feedbackMessage}>
        <FaGhost />
        <p>No {dataType} found.</p>
      </div>
    );
  }

  return <>{renderData(data)}</>;
};
