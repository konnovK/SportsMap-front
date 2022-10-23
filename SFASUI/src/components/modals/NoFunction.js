import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./NoFunction.module.css";

const NoFunction = ({ onClose }) => {
  return (
    <div className={styles.noFunctionDiv}>
      <div className={styles.noFunctionDiv1}>
        <img
          className={styles.claritycloseLineIcon}
          alt=""
          src="../claritycloseline.svg"
        />
        <div className={styles.textButtonDiv}>
          <div className={styles.textDiv}>
            <div className={styles.div}>
              К сожалению, эта функция не поддерживается
            </div>
            <div className={styles.expositoryTextDiv}>Something went wrng.</div>
          </div>
          <div className={styles.div1}>Но мы уже работаем над этим!</div>
        </div>
        <Button
          className={styles.button}
          variant="outline-primary"
          size="lg"
          onClick={onClose}
        >
          Окей!
        </Button>
        <img
          className={styles.modalImageIcon}
          alt=""
          src="../modal-image4.svg"
        />
      </div>
    </div>
  );
};

export default NoFunction;
